/* Headless smoke test for sim/index.html using jsdom.
 * Verifies: title screen, chapter start, dialogue advancing, backgrounds,
 * sprites, CG layer, and the CG gallery grid.
 * Usage: node tools/sim_smoke.js */
const path = require('path')
const { JSDOM, VirtualConsole } = require('jsdom')

const file = path.resolve(__dirname, '../sim/index.html')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const errors = []
const vc = new VirtualConsole()
vc.on('jsdomError', (e) => errors.push(String(e && e.message ? e.message : e)))
vc.on('error', (...a) => errors.push('console.error ' + a.join(' ')))

;(async () => {
  const dom = await JSDOM.fromFile(file, {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole: vc,
    url: 'file://' + file.replace(/\\/g, '/'),
  })
  const { window } = dom
  await new Promise((res) => window.addEventListener('load', res))
  await sleep(500)

  const doc = window.document
  const DBG = window.XBY_DEBUG
  const fail = (msg) => { console.error('[smoke] FAIL ' + msg); process.exitCode = 1 }
  const ok = (msg) => console.log('[smoke] ok  ' + msg)

  if (!DBG) return fail('XBY_DEBUG missing')
  if (!doc.getElementById('titleScr')) return fail('title screen missing')
  const banner = doc.getElementById('titleBg')
  if (!banner || !/title_top\.jpg$/.test(banner.getAttribute('src') || '')) fail('title banner not used')
  else ok('title banner ' + banner.getAttribute('src').split('/').pop())
  ok('title screen rendered, chapters=' + DBG.reader.index.chapters.length)

  // gallery
  DBG.gallery()
  await sleep(200)
  const cells = doc.querySelectorAll('#galGrid .cell')
  if (cells.length !== DBG.reader.index ? false : false) { /* noop */ }
  if (cells.length < 25) fail('gallery cells ' + cells.length + ' < 25')
  else ok('gallery cells ' + cells.length)
  DBG.title()

  // walk through the opening of chapter 1
  DBG.start('ch1')
  await sleep(300)
  const seen = []
  for (let i = 0; i < 24; i++) {
    const st = DBG.state()
    const text = doc.getElementById('l0').textContent + doc.getElementById('l1').textContent
    if (text) seen.push({ who: doc.getElementById('name').textContent, text, bg: st.bg, chars: Object.keys(st.chars || {}) })
    DBG.advance()
    await sleep(40)
  }
  if (seen.length < 5) fail('advanced only ' + seen.length + ' lines')
  else ok('advanced ' + seen.length + ' lines')

  const withText = seen.filter((s) => s.text.length > 1)
  if (!withText.length) fail('no dialogue text captured')
  else ok('first line: ' + JSON.stringify(withText[0]).slice(0, 120))

  const bgs = new Set(seen.map((s) => s.bg))
  ok('backgrounds seen: ' + [...bgs].slice(0, 5).join(', '))
  if (!bgs.size) fail('no background set')

  // jump to each chapter start and read one frame
  for (const ch of DBG.reader.index.chapters) {
    DBG.start(ch.id)
    await sleep(250)
    const st = DBG.state()
    const title = doc.getElementById('hudT').textContent
    if (st.chapterTitle !== ch.title) fail(`chapter ${ch.id} title ${st.chapterTitle} != ${ch.title}`)
    else ok(`chapter ${ch.id} "${title}" pc=${st.pc} bg=${st.bg}`)
  }

  // 从头扫一遍，确认立绘与 CG 层真的会被渲染
  DBG.start('ch1')
  await sleep(200)
  let sp = null
  for (let i = 0; i < 600 && !sp; i++) {
    await new Promise((r) => DBG.reader.next(() => r()))
    DBG.render()
    const st = DBG.state()
    const tags = Object.keys(st.chars || {})
    if (tags.length) sp = { pc: st.pc, tag: tags[0], expr: st.chars[tags[0]].eye }
  }
  if (!sp) fail('no sprite appeared in 600 steps')
  else {
    const shown = ['spL', 'spC', 'spR'].some((id) => {
      const el = doc.getElementById(id)
      return el && el.style.display !== 'none' && el.getAttribute('src')
    })
    if (shown) ok(`sprite: ${sp.tag}/${sp.expr} @pc ${sp.pc} (rendered)`)
    else fail('sprite state set but no <img> visible')
  }

  // 重新从头找到第一张 CG，CG 出现后应立刻左右平移
  DBG.start('ch1')
  await sleep(200)
  let cg = null
  for (let i = 0; i < 600 && !cg; i++) {
    await new Promise((r) => DBG.reader.next(() => r()))
    DBG.render()
    const st = DBG.state()
    if (st.fg) cg = { pc: st.pc, fg: st.fg }
  }
  if (!cg) fail('no CG appeared in 600 steps')
  else {
    const cgEl = doc.getElementById('cg')
    if (!cgEl.getAttribute('src')) fail('CG image src missing')
    const before = cgEl.style.left || '0px'
    await sleep(700)
    const after = cgEl.style.left || '0px'
    ok(`cg: ${cg.fg} @pc ${cg.pc}, pan ${before} -> ${after}`)
    if (before === after) fail('CG pan does not move')
  }

  // CG 查看器
  if (!doc.getElementById('galView') || !doc.getElementById('galImg')) fail('cg viewer missing')
  else ok('cg viewer present')

  if (errors.length) {
    for (const e of errors.slice(0, 8)) console.error('[smoke] js error: ' + e)
    process.exitCode = 1
  } else {
    ok('no js errors')
  }
  dom.window.close()
})().catch((e) => { console.error('[smoke] crashed', e); process.exit(1) })
