/* Static checks for the compiled story stream and its assets.
 * Usage: node tools/check_story.js [--quiet]
 * Exits non-zero on the first class of problem, printing every offending line. */
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const storyDir = path.join(root, 'src/common/story')
const imgDir = path.join(root, 'src/common/img')
const quiet = process.argv.indexOf('--quiet') >= 0

const index = JSON.parse(fs.readFileSync(path.join(storyDir, 'index.txt'), 'utf8'))
const problems = []
const seen = { bg: new Set(), cg: new Set(), sp: new Set(), ops: {} }

let pc = 0
const chapters = index.chapters.slice().sort((a, b) => a.start - b.start)
let ci = 0
for (const chunk of index.chunks) {
  const file = path.join(storyDir, path.basename(chunk.file))
  const lines = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean)
  if (lines.length !== chunk.count) {
    problems.push(`${chunk.file}: ${lines.length} lines, index says ${chunk.count}`)
  }
  for (const line of lines) {
    if (pc === chunk.start + lines.length - 1) { /* noop */ }
    const parts = line.split('\t')
    const op = parts[0]
    seen.ops[op] = (seen.ops[op] || 0) + 1
    if (op === 'b') {
      const f = path.join(imgDir, 'b', parts[1] + '.jpg')
      if (!fs.existsSync(f)) problems.push(`pc ${pc}: missing bg ${parts[1]}`)
      seen.bg.add(parts[1])
    } else if (op === 'g') {
      if (!fs.existsSync(path.join(imgDir, 'w', parts[1] + '.jpg'))) problems.push(`pc ${pc}: missing cg ${parts[1]}`)
      if (!fs.existsSync(path.join(imgDir, 't', parts[1] + '.jpg'))) problems.push(`pc ${pc}: missing cg thumb ${parts[1]}`)
      seen.cg.add(parts[1])
    } else if (op === 'p') {
      const f = path.join(imgDir, 's', parts[1], (parts[3] || 'normal') + '.png')
      if (!fs.existsSync(f)) problems.push(`pc ${pc}: missing sprite ${parts[1]}/${parts[3]}`)
      seen.sp.add(parts[1] + '/' + parts[3])
    } else if (op === 's') {
      if (parts.length < 3) problems.push(`pc ${pc}: malformed say`)
      if (!parts[1]) { /* narration is fine */ }
    } else if (op === 'm') {
      const bits = parts[1].split('\x1f')
      for (let i = 1; i < bits.length; i += 2) {
        const target = Number(bits[i])
        if (!(target >= 0 && target < index.total)) problems.push(`pc ${pc}: menu target out of range ${target}`)
      }
    } else if (op === 'e' || op === 'c' || op === 'h') {
      // ok
    } else {
      problems.push(`pc ${pc}: unknown op ${op}`)
    }
    pc++
  }
  void ci
}
if (pc !== index.total) problems.push(`total ${pc} != index.total ${index.total}`)

for (const ch of chapters) {
  if (!(ch.start >= 0 && ch.start < index.total)) problems.push(`chapter ${ch.id} start ${ch.start} out of range`)
  if (ch.start !== 0) {
    const chunk = index.chunks.filter((c) => c.start <= ch.start).pop()
    const line = fs.readFileSync(path.join(storyDir, path.basename(chunk.file)), 'utf8')
      .split('\n')[ch.start - chunk.start]
    if (!line || line.charAt(0) !== 'c') problems.push(`chapter ${ch.id} does not start at a title card: ${String(line).slice(0, 40)}`)
  }
}
const titles = new Set(chapters.map((c) => c.title))
if (titles.size !== chapters.length) problems.push('duplicate chapter titles')

if (!quiet) {
  console.log(`[check] ${index.total} instructions · ${chapters.length} chapters · ${index.chunks.length} chunks`)
  console.log('[check] ops:', JSON.stringify(seen.ops))
  console.log(`[check] assets used: bg ${seen.bg.size} · cg ${seen.cg.size} · sprite ${seen.sp.size}`)
}
if (problems.length) {
  console.error('[check] ' + problems.length + ' problem(s):')
  for (const p of problems.slice(0, 30)) console.error('  - ' + p)
  process.exit(1)
}
if (!quiet) console.log('[check] OK')
