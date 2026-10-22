/* Walk the whole compiled story through the real interpreter (no DOM).
 * Usage: node tools/story_walk.js */
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const root = path.resolve(__dirname, '..')
const sandbox = { window: {}, console }
vm.createContext(sandbox)
vm.runInContext(fs.readFileSync(path.join(root, 'sim/vm.bundle.js'), 'utf8'), sandbox)
vm.runInContext(fs.readFileSync(path.join(root, 'sim/data.js'), 'utf8'), sandbox)
const { XBY_VM, XBY_STORY } = sandbox.window

const readText = (p, cb) => {
  if (p.indexOf('index.txt') >= 0) return cb(null, JSON.stringify(XBY_STORY.index))
  const text = XBY_STORY.chunks[p]
  if (text === undefined) return cb('missing ' + p)
  cb(null, text)
}

const reader = XBY_VM.createReader(readText)
const step = () => new Promise((resolve, reject) => reader.next((e, f) => (e ? reject(new Error(e)) : resolve(f))))

;(async () => {
  await new Promise((res, rej) => reader.init((e) => (e ? rej(new Error(e)) : res())))
  console.log(`[walk] ${XBY_STORY.index.chapters.length} chapters · ${XBY_STORY.index.total} instructions`)

  let total = 0
  let spoke = 0
  const cast = new Set()
  const bgs = new Set()
  const cgs = new Set()
  for (const ch of XBY_STORY.index.chapters) {
    await new Promise((res, rej) => reader.start(ch.id, (e, f) => (e ? rej(new Error(e)) : res(f))))
    let frames = 0
    let frame = reader.frame
    while (frame && frame.kind !== 'end' && frames < 5000) {
      if (frame.kind === 'say') { spoke++; if (frame.text) total += 1 }
      const st = reader.state
      if (st.bg) bgs.add(st.bg)
      if (st.fg) cgs.add(st.fg)
      Object.keys(st.chars || {}).forEach((k) => cast.add(k))
      frames++
      frame = await step()
    }
    console.log(`[walk] ${ch.id} ${ch.title}: ${frames} frames, end=${frame && frame.kind}`)
    if (!frame || frame.kind !== 'end') { console.error('[walk] FAIL chapter did not reach end'); process.exit(1) }
  }
  console.log(`[walk] total say frames ${spoke} · non-empty ${total} · bg ${bgs.size} · cg ${cgs.size} · cast ${[...cast].join(',')}`)
  if (spoke < 2500) { console.error('[walk] FAIL too few dialogue frames'); process.exit(1) }
  console.log('[walk] OK')
})().catch((e) => { console.error('[walk] crashed', e); process.exit(1) })
