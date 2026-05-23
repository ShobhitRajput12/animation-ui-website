# TODO

- [ ] Add 4 new footer items into app/category/footers/data.ts (FOOTER_DATA)
  - [ ] curtain-marquee-privacy-footer (tag: css)
  - [ ] magnetic-pill-credits-footer (tag: css)
  - [ ] svg-text-reveal-footer (tag: css)
  - [ ] scroll-spotlight-grid-footer (tag: css)
- [ ] Keep existing items unchanged.
- [ ] Verify file remains valid TypeScript array syntax.

# New components to add into app/category/footers/data.ts

Paste the following 4 objects into FOOTER_DATA (before the closing `];`). Each object includes `previewCode`, `code`, and `prompt`.

1) curtain-marquee-privacy-footer
---
,

2) magnetic-pill-credits-footer
---


3) svg-text-reveal-footer
---
{
  "slug": "svg-text-reveal-footer",
  "title": "SVG Radial Text Reveal Footer",
  "category": "footers",
  "tag": "css",
  "description": "SVG hover mask radial reveal + gradient stroke. Includes footer links.",
  "previewCode": "<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#05060a;display:flex;align-items:center;justify-content:center;font-family:system-ui}
footer{width:min(1100px,92vw);border-radius:26px;overflow:hidden;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.03);position:relative;color:rgba(255,255,255,.9);padding:34px}
.bg{position:absolute;inset:-80px;background:radial-gradient(circle at 50% 25%,rgba(124,92,252,.25),transparent 55%),radial-gradient(circle at 15% 80%,rgba(34,211,238,.16),transparent 52%)}
#wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.2fr .8fr;gap:18px;align-items:center}
@media(max-width:860px){#wrap{grid-template-columns:1fr}}
svg{width:100%;height:160px;display:block}
.links{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}
.a{color:rgba(255,255,255,.65);text-decoration:none;font-weight:700;border:1px solid rgba(255,255,255,.10);padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.03)}
.a:hover{color:#fff;border-color:rgba(255,255,255,.18)}
.smallbar{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.10);display:flex;justify-content:space-between;gap:10px;color:rgba(255,255,255,.55);font-size:12px}
</style></head><body>
<footer>
 <div class='bg'></div>
 <div id='wrap'>
  <div>
   <svg viewBox='0 0 300 100' onmousemove='move(event)' onmouseenter='enter()' onmouseleave='leave()'>
    <defs>
      <radialGradient id='mask' r='20%' cx='50%' cy='50%'>
        <stop offset='0%' stop-color='white'/>
        <stop offset='100%' stop-color='black'/>
      </radialGradient>
      <mask id='m'><rect width='100%' height='100%' fill='url(#mask)'/></mask>
    </defs>
    <text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' fill='transparent' stroke='#3ca2fa' stroke-width='0.3' mask='url(#m)'>SOBERS</text>
    <text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' fill='transparent' stroke='rgba(255,255,255,.18)' stroke-width='0.3'>SOBERS</text>
   </svg>
   <div class='links'>
    <a class='a' href='#'>Privacy</a>
    <a class='a' href='#'>Terms</a>
    <a class='a' href='#'>Support</a>
   </div>
  </div>
  <div>
   <div style='font-weight:900;font-size:26px;line-height:1.1'>Hover reveal</div>
   <div style='margin-top:10px;color:rgba(255,255,255,.65)'>Move your cursor to reveal the gradient stroke through a radial mask.</div>
  </div>
 </div>
 <div class='smallbar'><span>© 2026 Animation AI</span><span>SVG hover mask</span></div>
<script>
const svg=document.querySelector('svg');const grad=svg.querySelector('#mask');
function move(e){
 const r=svg.getBoundingClientRect();
