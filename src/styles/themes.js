export const DARK_VARS = `
  --bg:#09090E;--surface:#0F0F16;--surface2:#15151E;
  --border:#1C1C28;--border2:#242434;--text:#F2EFE8;
  --muted:#56536A;--muted2:#8A87A0;--accent:#C9963A;
  --accent2:#DFB058;--accentBg:rgba(201,150,58,0.10);
  --red:#F05454;--green:#4DC77A;--blue:#5B9CF6;--purple:#9B7EFF;
  --shadow:rgba(0,0,0,0.55);--searchBg:#111118;
`;

export const LIGHT_VARS = `
  --bg:#F6F4F0;--surface:#FFFFFF;--surface2:#F0EDE8;
  --border:#E4DED6;--border2:#D0C9C0;--text:#18150E;
  --muted:#9A9285;--muted2:#615C54;--accent:#A0700A;
  --accent2:#C08820;--accentBg:rgba(160,112,10,0.10);
  --red:#C83030;--green:#28914E;--blue:#1D5FC4;--purple:#6B30D4;
  --shadow:rgba(0,0,0,0.10);--searchBg:#FFFFFF;
`;

export const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

  /* ── FULL SCREEN FIX: html + body + #root must all be 100% wide ── */
  html,body,#root{width:100%;min-height:100vh}
  html{scroll-behavior:smooth}
  body{font-family:'Geist',sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased}
  ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--border2)}

  .dark{${DARK_VARS}}
  .light{${LIGHT_VARS}}

  @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes shimmer{from{background-position:-600px 0}to{background-position:600px 0}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
  .fade-up{animation:fadeUp .42s ease both}
  .fade-in{animation:fadeIn .32s ease both}

  /* ── APP SHELL ── */
  .app{width:100%;min-height:100vh;display:flex;flex-direction:column;background:var(--bg);color:var(--text);transition:background .28s,color .28s}

  /* ── HEADER ── */
  .hdr{position:sticky;top:0;z-index:200;width:100%;background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid var(--border);padding:0 36px;height:60px;display:flex;align-items:center;justify-content:space-between;transition:background .28s,border-color .28s}
  .hdr-logo{font-family:'Instrument Serif',serif;font-size:20px;color:var(--text);display:flex;align-items:center;gap:9px;cursor:pointer;transition:opacity .18s;letter-spacing:-.01em;background:none;border:none}
  .hdr-logo:hover{opacity:.65}
  .logo-sq{width:26px;height:26px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;font-family:'Geist',sans-serif;flex-shrink:0}
  .hdr-r{display:flex;align-items:center;gap:4px}
  .nav-btn{background:none;border:none;color:var(--muted2);font-family:'Geist',sans-serif;font-size:13px;font-weight:500;padding:7px 13px;cursor:pointer;transition:all .18s}
  .nav-btn:hover{color:var(--text);background:var(--surface2)}
  .nav-btn.on{color:var(--text);background:var(--surface2)}
  .nav-cta{background:var(--accent);color:#fff;border:none;font-family:'Geist',sans-serif;font-size:13px;font-weight:600;padding:8px 18px;cursor:pointer;transition:all .2s;white-space:nowrap;letter-spacing:.01em}
  .nav-cta:hover{background:var(--accent2);transform:translateY(-1px)}
  .hdivider{width:1px;height:18px;background:var(--border2);margin:0 5px}

  /* ── TOGGLE ── */
  .tog{width:42px;height:22px;background:var(--border2);position:relative;cursor:pointer;border:none;transition:background .28s;flex-shrink:0;display:flex;align-items:center}
  .tog.dk{background:var(--accent)}
  .tog-k{position:absolute;top:2px;left:2px;width:18px;height:18px;background:#fff;transition:transform .22s;display:flex;align-items:center;justify-content:center;font-size:10px;pointer-events:none}
  .tog.dk .tog-k{transform:translateX(20px)}

  /* ── HERO: full width, no max-width ── */
  .hero{width:100%;padding:68px 36px 36px;text-align:center;position:relative;overflow:hidden}
  .hero-glow{position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:650px;height:360px;background:radial-gradient(ellipse,var(--accentBg) 0%,transparent 70%);pointer-events:none}
  .hero-tag{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--border2);color:var(--muted2);font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;padding:5px 14px;margin-bottom:22px;animation:fadeUp .4s ease both}
  .ldot{width:5px;height:5px;background:var(--green);animation:pulse 2s infinite}
  .hero-h1{font-family:'Instrument Serif',serif;font-size:clamp(34px,5.5vw,62px);font-weight:400;line-height:1.08;color:var(--text);margin-bottom:16px;letter-spacing:-.025em;animation:fadeUp .4s .07s ease both}
  .hero-h1 em{font-style:italic;color:var(--accent)}
  .hero-sub{font-size:15px;color:var(--muted2);max-width:420px;margin:0 auto 40px;line-height:1.68;animation:fadeUp .4s .14s ease both}
  .hero-stats{display:flex;justify-content:center;gap:44px;animation:fadeUp .4s .21s ease both}
  .stat-n{font-family:'Instrument Serif',serif;font-size:28px;color:var(--text);letter-spacing:-.02em}
  .stat-l{font-size:10px;color:var(--muted);margin-top:2px;font-weight:600;letter-spacing:.05em;text-transform:uppercase}

  /* ── SEARCH: full width, no max-width ── */
  .search-sec{width:100%;padding:0 36px 28px;animation:fadeUp .4s .28s ease both}
  .sbox{display:flex;align-items:center;background:var(--searchBg);border:1.5px solid var(--border2);margin-bottom:16px;transition:border-color .2s,box-shadow .2s}
  .sbox:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accentBg)}
  .sico{padding:0 15px;color:var(--muted);display:flex;align-items:center;flex-shrink:0}
  .sinput{flex:1;background:none;border:none;outline:none;color:var(--text);font-family:'Geist',sans-serif;font-size:15px;padding:14px 0}
  .sinput::placeholder{color:var(--muted)}
  .sclear{background:none;border:none;color:var(--muted);cursor:pointer;padding:0 15px;font-size:20px;transition:color .18s;line-height:1;display:flex;align-items:center}
  .sclear:hover{color:var(--text)}
  .frow{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
  .fgl{font-size:10px;font-weight:700;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-right:1px;white-space:nowrap}
  .chip{padding:5px 13px;border:1px solid var(--border2);background:transparent;color:var(--muted2);font-family:'Geist',sans-serif;font-size:12px;font-weight:500;cursor:pointer;transition:all .16s;white-space:nowrap}
  .chip:hover{border-color:var(--muted);color:var(--text)}
  .chip.on{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:700}
  .rmeta{margin-left:auto;font-size:12px;color:var(--muted);white-space:nowrap;font-weight:500}
  .rmeta b{color:var(--text)}

  /* ── GRID: full width, no max-width ── */
  .grid-wrap{width:100%;padding:0 36px}
  .jgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px}

  /* ── LOAD MORE ── */
  .lmore{text-align:center;padding:36px 0 56px}
  .lbtn{background:var(--surface);border:1.5px solid var(--border2);color:var(--text);font-family:'Geist',sans-serif;font-size:13px;font-weight:600;padding:11px 32px;cursor:pointer;transition:all .2s}
  .lbtn:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}

  /* ── CARD ── */
  .jcard{background:var(--surface);border:1px solid var(--border);padding:20px;cursor:pointer;transition:all .2s;position:relative;overflow:hidden;animation:fadeUp .4s ease both}
  .jcard::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .28s}
  .jcard:hover{border-color:var(--border2);transform:translateY(-3px);box-shadow:0 14px 36px var(--shadow)}
  .jcard:hover::after{transform:scaleX(1)}
  .ct{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:13px}
  .clogo{width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;font-family:'Geist',sans-serif;flex-shrink:0}
  .brow{display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end}
  .bdg{font-size:10px;font-weight:700;padding:3px 8px;letter-spacing:.04em;text-transform:uppercase}
  .b-ft{background:rgba(77,199,122,.12);color:var(--green)}
  .b-re{background:rgba(91,156,246,.12);color:var(--blue)}
  .b-pt{background:rgba(155,126,255,.12);color:var(--purple)}
  .b-in{background:rgba(201,150,58,.12);color:var(--accent)}
  .b-co{background:rgba(240,84,84,.12);color:var(--red)}
  .b-fr{background:rgba(138,135,160,.14);color:var(--muted2)}
  .cfield{font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.05em;text-transform:uppercase;margin-bottom:3px}
  .ctitle{font-family:'Instrument Serif',serif;font-size:17px;font-weight:400;line-height:1.3;color:var(--text);margin-bottom:3px;letter-spacing:-.01em}
  .cco{font-size:12px;font-weight:500;color:var(--muted2);margin-bottom:11px}
  .cmeta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:11px}
  .mi{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--muted)}
  .cfoot{display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid var(--border)}
  .csal{font-size:12px;font-weight:700;color:var(--accent)}
  .carrow{width:28px;height:28px;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;transition:all .2s;color:var(--muted2)}
  .jcard:hover .carrow{background:var(--accent);border-color:var(--accent);color:#fff}

  /* ── SKELETON ── */
  .skel{background:linear-gradient(90deg,var(--surface) 25%,var(--surface2) 50%,var(--surface) 75%);background-size:600px 100%;animation:shimmer 1.5s infinite}

  /* ── DETAIL: full width 2-col ── */
  .dwrap{width:100%;padding:32px 36px 72px;display:grid;grid-template-columns:1fr 300px;gap:18px}
  .bbtn{display:inline-flex;align-items:center;gap:6px;background:none;border:none;color:var(--muted2);font-family:'Geist',sans-serif;font-size:13px;font-weight:500;cursor:pointer;padding:0;margin-bottom:22px;transition:color .18s}
  .bbtn:hover{color:var(--text)}
  .dmain{background:var(--surface);border:1px solid var(--border);padding:32px}
  .dlogo{width:56px;height:56px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;flex-shrink:0}
  .dco{font-size:12px;font-weight:600;color:var(--muted2);margin-bottom:5px;letter-spacing:.02em;text-transform:uppercase}
  .dtitle{font-family:'Instrument Serif',serif;font-size:clamp(22px,3vw,29px);font-weight:400;color:var(--text);line-height:1.15;margin-bottom:11px;letter-spacing:-.02em}
  .slbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:11px}
  .ddesc{font-size:14px;line-height:1.85;color:var(--muted2);white-space:pre-line}
  .rlist{list-style:none;display:flex;flex-direction:column;gap:8px}
  .ritem{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:var(--muted2);line-height:1.55}
  .rdot{width:4px;height:4px;background:var(--accent);margin-top:8px;flex-shrink:0}

  /* ── SIDEBAR ── */
  .sbar{display:flex;flex-direction:column;gap:12px}
  .scard{background:var(--surface);border:1px solid var(--border);padding:24px}
  .stitle{font-family:'Instrument Serif',serif;font-size:15px;font-weight:400;color:var(--text);margin-bottom:16px;letter-spacing:-.01em}
  .irow{display:flex;flex-direction:column;gap:12px}
  .iitem{display:flex;align-items:flex-start;gap:10px}
  .iico{width:30px;height:30px;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
  .ikey{font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.07em}
  .ival{font-size:13px;color:var(--text);font-weight:600;margin-top:2px}
  .abar{margin-top:14px;padding-top:14px;border-top:1px solid var(--border)}
  .ablbl{display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:6px}
  .atrack{height:3px;background:var(--border2);overflow:hidden}
  .afill{height:100%;background:var(--accent);transition:width 1.2s ease}
  .acta{width:100%;padding:13px;background:var(--accent);border:none;font-family:'Geist',sans-serif;font-size:14px;font-weight:700;color:#fff;cursor:pointer;transition:all .2s;letter-spacing:.01em}
  .acta:hover{background:var(--accent2);transform:translateY(-2px);box-shadow:0 8px 22px color-mix(in srgb,var(--accent) 40%,transparent)}

  /* ── FORM ── */
  .fwrap{width:100%;max-width:680px;margin:0 auto;padding:32px 36px 72px}
  .fcard{background:var(--surface);border:1px solid var(--border);padding:38px}
  .fey{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:5px}
  .fhead{font-family:'Instrument Serif',serif;font-size:24px;font-weight:400;color:var(--text);margin-bottom:4px;letter-spacing:-.02em}
  .fsub{font-size:13px;color:var(--muted2);margin-bottom:28px;line-height:1.6}
  .fld{margin-bottom:18px}
  .flbl{display:block;font-size:11px;font-weight:700;color:var(--muted2);margin-bottom:6px;letter-spacing:.03em;text-transform:uppercase}
  .flbl .req{color:var(--accent)}
  .finput{width:100%;background:var(--surface2);border:1.5px solid var(--border2);padding:11px 14px;color:var(--text);font-family:'Geist',sans-serif;font-size:14px;outline:none;transition:border-color .2s}
  .finput:focus{border-color:var(--accent)}
  .finput::placeholder{color:var(--muted)}
  .finput.err{border-color:var(--red)}
  textarea.finput{resize:vertical;min-height:115px}
  .ferr{font-size:11px;color:var(--red);margin-top:4px;font-weight:600}
  .cct{text-align:right;font-size:10px;color:var(--muted);margin-top:3px}

  /* ── RESUME ZONE ── */
  .rzne{border:1.5px dashed var(--border2);padding:26px 18px;text-align:center;cursor:pointer;transition:all .2s;position:relative;background:var(--surface2)}
  .rzne:hover,.rzne.dg{border-color:var(--accent);background:var(--accentBg)}
  .rzne.hf{border-style:solid;border-color:var(--green);background:rgba(77,199,122,.06);cursor:default}
  .rico{font-size:26px;margin-bottom:7px;display:flex;justify-content:center;color:var(--muted2)}
  .rtitle{font-size:13px;font-weight:600;color:var(--text);margin-bottom:3px}
  .rsub{font-size:11px;color:var(--muted)}
  .rfn{font-size:11px;color:var(--green);font-weight:600;margin-top:5px}
  .rinput{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}

  .subbtn{width:100%;padding:14px;background:var(--accent);border:none;font-family:'Geist',sans-serif;font-size:15px;font-weight:700;color:#fff;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px;letter-spacing:.01em}
  .subbtn:hover:not(:disabled){background:var(--accent2);transform:translateY(-2px);box-shadow:0 8px 26px color-mix(in srgb,var(--accent) 38%,transparent)}
  .subbtn:disabled{opacity:.55;cursor:not-allowed}
  .spin{width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;animation:spin .7s linear infinite}

  /* ── SUCCESS ── */
  .sw{text-align:center;padding:14px 0;animation:fadeUp .4s ease}
  .sico{width:66px;height:66px;background:rgba(77,199,122,.12);border:1.5px solid rgba(77,199,122,.3);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:26px}
  .stit{font-family:'Instrument Serif',serif;font-size:23px;color:var(--text);margin-bottom:7px}
  .ssub{font-size:13px;color:var(--muted2);line-height:1.65;margin-bottom:24px}

  /* ── ADMIN: full width ── */
  .awrap{width:100%;padding:32px 36px 72px}
  .atit{font-family:'Instrument Serif',serif;font-size:28px;color:var(--text);margin-bottom:3px}
  .asub{font-size:13px;color:var(--muted2);margin-bottom:24px}
  .tbl{background:var(--surface);border:1px solid var(--border);overflow:hidden}
  .thead{display:grid;grid-template-columns:1.2fr 1.4fr 1.4fr 2fr 90px;padding:11px 20px;border-bottom:1px solid var(--border);font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);gap:10px}
  .trow{display:grid;grid-template-columns:1.2fr 1.4fr 1.4fr 2fr 90px;padding:15px 20px;border-bottom:1px solid var(--border);align-items:center;transition:background .14s;animation:fadeUp .3s ease both;gap:10px}
  .trow:last-child{border-bottom:none}
  .trow:hover{background:var(--surface2)}
  .tnm{font-weight:600;font-size:13px;color:var(--text)}
  .tv{font-size:12px;color:var(--muted2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .sbdg{font-size:10px;font-weight:700;padding:3px 9px;background:rgba(77,199,122,.12);color:var(--green);text-transform:uppercase;letter-spacing:.06em;width:fit-content}

  /* ── TOAST ── */
  .toast{position:fixed;bottom:20px;right:20px;background:var(--surface);border:1px solid var(--border2);padding:13px 17px;display:flex;align-items:center;gap:8px;box-shadow:0 18px 48px var(--shadow);animation:fadeUp .3s ease;z-index:1000;max-width:290px}
  .tdot{width:6px;height:6px;background:var(--green);flex-shrink:0}
  .ttxt{font-size:13px;color:var(--text);font-weight:500}

  /* ── EMPTY ── */
  .empty{text-align:center;padding:56px 20px;color:var(--muted);font-size:14px}
  .eico{font-size:36px;margin-bottom:12px}

  /* ── RESPONSIVE ── */
  @media(max-width:740px){
    .dwrap{grid-template-columns:1fr}
    .sbar{order:-1}
    .thead,.trow{grid-template-columns:1fr 1fr}
    .thead>*:nth-child(n+3),.trow>*:nth-child(n+3){display:none}
    .hero-stats{gap:22px}
    .fcard,.dmain{padding:22px 16px}
    .hdr{padding:0 16px}
    .search-sec,.grid-wrap,.awrap,.fwrap,.dwrap{padding-left:16px;padding-right:16px}
  }
`;
