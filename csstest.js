:root {
--primary-color: #366ad3;
--v171: #17151b;
--v999: #999;
--hf1f: #f1f1f1;
}
.dark-mode {--hf1f: #333}
*, ::after, ::before {
box-sizing: border-box;
}
html{height:100%;scrollbar-width: thin;scroll-behavior:smooth}
body{
height:100%;
overflow-y: scroll!important;
-webkit-font-smoothing: antialiased;
}
iframe{width:100%;border:0}
svg{width:24px;height:24px}
.svg-1{stroke:white;width:34px;height:34px;}
.svg12 {width: 14px;height: 14px;color: rgba(255,255,255,0.4);}
.svg14 svg{width:14px;height:14px}
.svg12sv svg {width:12px;height:12px}
.dark-mode{background-color:#1a1a1a;color:white}
.modeSwitch{position:relative;display:inline-block;width:32px;height:17px}
.modeSwitch input{opacity:0;width:0;height:0}
.toggleSwitch{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.28);transition:.3s;border-radius:17px}
.toggleSwitch:before{position:absolute;content:"";height:13px;width:13px;left:2px;bottom:2px;background-color:whitesmoke;transition:.4s;border-radius:50%}
input:focus+.toggleSwitch{box-shadow:0 0 1px #2196f3}
.dark-mode input+.toggleSwitch:before{transform:translateX(15px)}
body{counter-reset:section;background-color:#e8ebf5;color:#222d34;font-size:15px;line-height:1.4;}
a{color:#222d34;text-decoration:none}
a:hover,.infolimit a,::marker{color:#366ad3}
.link a,.dark-mode .link a,#allert a{color:#366ad3}
#sidebar a{color:#222}
.m-0,body,#sidebar .title,.flat,figure,#PopularPosts2 .title,.related.style-2,#main .widget .title,#feed .title,#wpac-rating{margin:0}
.pen .separator a,.page-view .separator a{padding:0 !important}
.max-w,.fw .mx-feed,#notification .widget{max-width:1237px}
.ads img,#sidebar .widget-content img{max-width:100%;height:auto;}
.pv main .max-w{max-width:1080px}
.h-14{height:14px;vertical-align:middle;}
.w-180{width:180px}
.w-50p{max-width:600px}
.w-25{width:25px}
.wh-18-svg svg{width: 18px;height: 18px}
.mra,#notification .widget{margin-right:auto}
.mla,#notification .widget{margin-left:auto}
.mta{margin-top:auto}
.p-y6x12{padding:6px 12px}
.p-y5x20{padding:5px 20px}
.p-y0x15{padding:0 15px}
.p-y7x15-a a{padding:7px 15px}
.p-y10x15{padding:10px 15px;}
.p-y12x15{padding:12px 15px}
.p-15,#disqus_thread{padding:15px}
.p-20,#downloadlist{padding:20px}
.p-10,.prev,.all,.next,.pv .m-GwWBFmbcL{padding:10px}
.p-5,.ofz{padding:5px}
.p-6{padding:6px}
.p-13,#sidebar .widget-content{padding:13px}
.pr-15{padding-right:15px}
.pl-15{padding-left:15px}
.px-5 {padding-left: 5px;padding-right: 5px}
.pr-10{padding-right:10px}
.mr-13{margin-right:13px}
.mr-20{margin-right:20px}
.ml-20,#downloadlist .db{margin-left:20px}
.ml-7{margin-left:7px}
.pv .ml-7{margin-left:auto}
.ml-0{margin-left:0}
.md-ml-0{margin-left:0}
.mr-40{margin-right:40px}
.mr-7,h2 > svg,h3 > svg{margin-right:7px}
.mt-5{margin-top:5px}
.mt-15,.ch-bottom,.ch-top{margin-top:15px}
.mt-35{margin-top:35px}
.mb-2{margin-bottom:2px}
.mx-5{margin-right: 5px;margin-left: 5px}
.mb-6{margin-bottom:6px}
.mt8{margin-top:8px}
.mt-24,#disqus_thread,.svo .mt-sv15{margin-top:24px}
.mt-n100{margin-top:-100px}
.mb-13{margin-bottom:13px}
.mb-20,.not-home-mb20{margin-bottom:20px}
.mb-0{margin-bottom:0}
.mb-15,.ch-top,#disqus_thread,.pv .m-GwWBFmbcL{margin-bottom:15px}
.label-view .mb-20lv{margin-bottom:20px}
.mr-3{margin-right:3px}
.mt-0{margin-top:0}
#main .widget-content,#slide .widget-content{margin:13px}
.grid,#sidebar,.overlay,.flat,#Blog1,.ChapterNav,.style-2{display:grid}
.flex,#sidebar .list-label-widget-content .label-name,#PageList2,.score,.ofz,.slider-nav,.nextPrev a{display:flex}
.block,.b-img img,.homechapter a,.icon,figure .separator img,.block-a a{display:block}
.header-image-wrapper img{transition:.3s;max-height:50px;max-width: 150px;}
.header-image-wrapper img:hover{transform:scale(1.2);}
.i-mage img{position:absolute;height:100%;left:0;top:0;}
.i-block{display:inline-block}
.i-flex{display:inline-flex}
.hidden,.post .separator,.hi .index-list,.hi #downloadlist,#Viewer-module,#sidebar .item-byline,#notification h3,#recommendations .title,#ecHome,#myUL li:not([data*="Chapter"]),.post #character,#noidung,#tenkhac{display:none}
.gtc-3c {grid-template-columns: auto auto 1fr;gap: 10px;}
.gtr-mc{grid-template-rows:max-content}
.gtc-header{grid-template-columns:auto 1fr auto}
.gtc-main{grid-template-columns:1fr 350px}
.gtc-175fr{grid-template-columns:175px 1fr}
.gtc-1frxa{grid-template-columns:1fr minmax(100px,150px) minmax(100px,150px);border-bottom:solid 1px #eceff5}
.gtc-f141a{grid-template-columns:repeat(auto-fill,minmax(141px,1fr))}
.hfeed{grid-template-columns:repeat(auto-fill,minmax(141px,1fr))}
.gtr-a1fa{grid-template-rows:auto 1fr auto}
.gtc-rx1fr{grid-template-columns:1fr 1fr}
.gtc-100a1fr{grid-template-columns:minmax(100px,auto) 1fr}
.gtc-4x{grid-template-columns:repeat(4, 1fr);padding:5px}
.gtc-101{grid-template-columns:101px auto}
.gtc-142{grid-template-columns:repeat(auto-fill,minmax(114px,1fr))}
.gtc-4460{grid-template-columns:repeat(auto-fill,minmax(170px,1fr))}
.a1{grid-area:a1;}
.a2{grid-area:a2;}
.a3{grid-area:a3;}
.a4{grid-area:a4;}
@media screen and (min-width:1024px){.gtc-235fr{grid-template-columns:235px minmax(200px,auto);grid-template-areas: "a1 a2""a3 a3""a4 a4";}
}
.ChapterNav{grid-template-columns:repeat(3,1fr)}
.aic,.nextPrev a{align-items:center}
.pcc{place-content:center}
.pic{place-items:center}
.jic{justify-items:center}
.bsc{background-size:cover}
.fdcr{flex-direction:column}
.jcsb,.label-name,.ofz{justify-content:space-between}
.jcc,.slider-nav{justify-content:center}
.jsc{justify-self:center}
.tac,.ChapterNav,.score,.ads .widget-content,#notification .widget-content{text-align:center}
.lsn,.Label,.flat,.related.style-2 li,#downloadlist ul,#myUL{list-style:none}
.Label ul,.flat,.pl-0,.related.style-2,.dsq-widget-list,#downloadlist ul,#myUL{padding-left:0}
.bg-main,.pagecurrent,.all,.releases,#PageList2{background:linear-gradient(to right, #366ad3 , #366ad3)}
.header-background {background-color: #366ad3}
.jsfe{justify-self:flex-end}
.lh-60{line-height:60px}
.lh-42{line-height:42px}
.lh-37 {line-height:37px}
.lh-25px {line-height:25px}
.lh-26{line-height:26px}
.lh-20{line-height:20px}
.lh-1d7,.homechapter{line-height:1.7}
.lh-35{line-height:35px}
.gg-30{grid-gap:30px}
.gg-20,#sidebar,#Blog1{grid-gap:20px}
.gg-15{gap:15px}
.gg-10,.style-2{gap:10px}
.g5 {gap: 5px}
.fw-600,#sidebar #BlogArchive1 a,.subItem li .chpName{font-weight:600}
.fw-500{font-weight:500}
.fsi{font-style:italic}
#sidebar .c-fff ,.c-fff,#sidebar .overlay a,.date,.post-labels,.white\:hover:hover,.pagecurrent,.all,.all:hover{color:white}
.dim\:hover:hover{filter:brightness(80%)}
.c-666{color:#666}
.c-ddd{color:#ddd}
.c-999,.c-999-a a{color:var(--v999)}
.c-22{color:#222d34}
.c-555{color:#555}
.bg-171{background-color:var(--v171)}
.bg-999{background-color:var(--v999)}
.c-cc,#PageList2 a:hover{color:#ccc}
.bn{border:none}
.bg-trans{background:rgba(0,0,0,.18)}
.bg-222{background:#222}
.bt{background-color:transparent}
.r3,.col section .counter::before{border-radius:3px}
.tlr-5{border-top-left-radius:5px;border-top-right-radius:5px;}
.r4{border-radius:4px}
.r5{border-radius:5px}
.r50p{border-radius:50%}
.r-50{border-radius:50px}
#sidebar .widget,.r2,.FeaturedPost,#PopularPosts2,#disqus_thread,.ChapterNav,#downloadlist,.ofz,#main .HTML:not(.ads),.alr,.char:hover,.pv .m-GwWBFmbcL,#feed .widget,.tab li{border-radius:3px}
.r2f {border-radius: 2px;border: .5px solid var(--primary-color);color: var(--primary-color);}
#sidebar .title {border-top-left-radius:3px;border-top-right-radius:3px;}
.c-fff-force {color: white !important;}
.tl-r3{border-top-left-radius:3px}
.bl-r3{border-bottom-left-radius:3px}
.br-r3{border-bottom-right-radius:3px}
.tr-r3{border-top-right-radius:3px}
.cp,.feather-filter,#prev,#next{cursor:pointer}
.feather-sun, .feather-moon{width:14px;height:14px;fill:white;stroke:white}
.feather-star{width:15px;height:13px;fill:#366ad3;stroke:#366ad3}
.feather-bell{stroke:white;}
.unset{all:unset}
#sidebar .widget,.bc-fff,.FeaturedPost,#PopularPosts2,#allert .widget-content,#disqus_thread,.index-list,#downloadlist,#main .HTML:not(.ads),.pv .m-GwWBFmbcL,#feed .widget{background-color:white}
#sidebar .widget,.s1,.FeaturedPost,#PopularPosts2,#disqus_thread,#downloadlist,#main .HTML:not(.ads),#feed .widget{box-shadow:1px 3px 8px rgba(49,49,49,0.1)}
.s2{filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.7))}
#sidebar .title{font-size:17px;padding-bottom:15px}
#sidebar .title,.c-theme,#PopularPosts2 .title,#downloadlist .db,#main .widget .title,#feed .title{color:#366ad3}
.col{grid-template-columns:repeat(3,1fr)}
.col section:nth-child(1){grid-column:1 / -1;}
.col img,.full,.post-thumb,.page-view img{width:100%}
.col section:nth-child(n+2) .post-title,.col section:nth-child(n+2) .byline,.col section:nth-child(n+2) .date{display:none}
.col section:nth-child(n+2) img,.ofc{height:135px;object-fit:cover}
.col section:nth-child(1) img{height:165px;object-fit:cover;object-position:top}
.col section:nth-child(1) .ov-title{background:linear-gradient(to bottom,#0000,#000)}
.col section:nth-child(n+2){margin:7px}
#sidebar, #main,.min{grid-auto-rows:min-content}
.relative{position:relative}
.absolute{position:absolute}
.col section .counter::before{counter-increment:section;content:counter(section);position:absolute;top:6px;left:4px;background:#366ad3;color:white;padding:3px 7px;font-size:13px}
.ov-img, .ov-title{grid-row:1 / -1}
.ov-img{grid-column:1 / -1}
.ov-title{grid-column:1 / -1;align-self:self-end;padding:10px 15px;overflow:hidden}
.date,#sidebar .post-labels{font-size:13px}
#sidebar .post-labels,.wsn{white-space:nowrap}
.clamp{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;}
#sidebar .post-title,.fwn{font-weight:500}
.toe{text-overflow:ellipsis}
.oh,#PopularPosts2,#main .widget,#feed .widget,#sidebar .widget,#HTML3{overflow:hidden}
#sidebar #PopularPosts1{padding:0 0 3px 0}
#sidebar #PopularPosts1 .title{padding-bottom:0}
.ttu{text-transform:uppercase}
.fz-0d95r{font-size:.9rem}
.fs-30{font-size:30px}
.fs-25{font-size:25px}
.fs-20{font-size:20px}
.fs-9{font-size:9px}
.fs-14,.Label .label-name,.BlogArchive .widget-content,#allert .widget-content,.FeaturedPost .post-labels,.ChapterNav{font-size:14px}
.fs-15,.index-list,#downloadlist ul,#feed .title,#sidebar .title,.fw #main .title{font-size:15px}
.fs-13,.blog-pager{font-size:13px}
.fs-12,.share-icon{font-size:12px}
.fs-11{font-size:11px}
.fs-17{font-size:17px}
.p-3y6x{padding:3px 6px}
.pb-15{padding-bottom:15px}
#downloadlist ul{max-height:500px;overflow:auto}
.info{color:#00529B;background-color:#BDE5F8}
.success{color:#4F8A10;background-color:#DFF2BF}
.warning{color:#9F6000;background-color:#FEEFB3}
.error{color:#D8000C;background-color:#FFBABA}
.boxs{padding:10px;margin:10px 0}
.list-label-widget-content:hover,#download:hover{scrollbar-width:thin}
.list-label-widget-content,#download{max-height:300px;scrollbar-color:#366ad3 #d4dae6;scrollbar-width:none;overflow:scroll;-webkit-overflow-scrolling:touch;}
.list-label-widget-content:hover,#download:hover{overflow-y:scroll}
.list-label-widget-content::-webkit-scrollbar,#download::-webkit-scrollbar{width:7px}
.list-label-widget-content::-webkit-scrollbar-track,#download::-webkit-scrollbar-track{background:#d4dae6}
.list-label-widget-content::-webkit-scrollbar-thumb,#download::-webkit-scrollbar-thumb{background:#366ad3}
.list-label-widget-content li,#downloadlist li{border-bottom:solid 1px #eceff5;padding:7px 10px}
.list-label-widget-content li:hover{background:#f1f1f14f}
.flat{grid-template-columns:1fr 1fr;grid-gap:6px}
.flat .archivedate{background:#f8f9fb;padding:3px;text-align:center;line-height:28px}
.post-count{font-size:12px;color:#999;margin-left:5px;font-weight:normal;}
.post-count::before{content:"("}
.post-count::after{content:")"}
.cloud-label-widget-content .label-size{padding:3px 6px;border:1px solid #366ad3;display:inline-block;margin-bottom:5px}
#sidebar .cloud-label-widget-content .label-count{margin-left:5px;color:#366ad3;font-weight:bold}
::selection{color:white;background:#366ad3}
.PopularPosts .post-title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}
.item-thumbnail:hover img{filter:brightness(50%);transition:.2s}
#popular .item-thumbnail{width:58px;height:75.85px}
#PopularPosts3 .item-thumbnail img,#PopularPosts4 .item-thumbnail img,#PopularPosts5 .item-thumbnail img {width: 58px;height: 75.85px;object-fit: cover;border-radius: 2px;}
.bb-1pxsf,.ofz,#main .widget .title,#sidebar .title,#feed .title{border-bottom:1px solid #f1f1f1}
.bt-1pxs3{border-top:1px solid #333333a1}
.bb-2pxsec{border-bottom:solid 2px #eceff5}
.bt-2sf{border-top:2px solid #f1f1f1}
.s3f5{border-bottom:solid 3px #f5f7fa}
.y9x19p,#main .widget .title,#slide .widget .title,#sidebar .title,#feed .title{padding:8px 15px}
.yb10m,#main .widget .title,#slide .widget .title{margin-bottom:10px}
.m-3{margin:3px}
.m-y0x4-li li{margin:0 4px}
.y10x0{padding:10px 0}
.y3x5p{padding:3px 5px}
.y6x0p{padding:6px 0}
.y5x10p{padding:5px 10px}
.y0x9p{padding:0 9px}
.label{padding:4px 12px;color:#366ad3;border:1px solid #366ad3;background-color:#366ad317;}
.label:hover{background-color:#366ad3;color:white}
.yt8m{margin-top:8px;margin-bottom:8px}
.pv .mtn150{margin-top:-150px}
.pt-140p{padding-top:140%}
.pt-137p{padding-top:137%}
.y6x11p{padding:6px 11px}
.fd\:hover:hover{background-color:#fdfdfd}
.bc-f5{background-color:#f5f7fa}
.bc-2b{background-color:#2b2b2b}
.bc-22{background-color:#222}
.bc-33{background-color:#33333380}
.bc-e8{background-color:#e8ebf5}
.bg\:hover:hover{background:#366ad3}
.h-140{height:140px}
.h-220 img{height:199px}
.h-200{height:125px}
.h-135{height:135px}
.h-60{height:60px;width:40px;}
.h-17{height:17px}
.full-i img{width:100%;object-fit:cover;border-radius:2px;}
.b-0{bottom:0}
.l-0{left:0}
.t-3 {top: 3px}
.t-5{top:5px}
.r-5{right:5px}
.b\(50\){filter:brightness(50%)}
.dt{float:right}
[dir="rtl"] .dt{float:left}
.PageList [data]:before{margin-right:5px;vertical-align:sub}
[data="Series"]:before {content: url('https://api.iconify.design/ic:twotone-grid-view.svg?color=rgba(255,255,255,.6)&height=16');}
[data="Home"]:before {content: url('https://api.iconify.design/ant-design:home-twotone.svg?color=rgba(255,255,255,.6)&height=16');}
[data="Other"]::before {content: url('https://api.iconify.design/icon-park-outline:other.svg?color=rgba(255,255,255,.6)&height=16');}
[data="Komik"]::before {content: url('https://api.iconify.design/bx/bxs-book-reader.svg?color=rgba(255,255,255,.6)&height=16');}
[data="Manga List"]::before {content: url('https://api.iconify.design/bx/bx-list-minus.svg?color=rgba(255,255,255,.6)&height=16');}
[data="Bookmark"]::before {content: url('https://api.iconify.design/fluent/library-20-filled.svg?color=rgba(255,255,255,.6)&height=16');}
.chap-by-tag a:visited{color:gray}
.chap-by-tag div:not(:last-child){border-bottom:1px dashed #366ad3}
#Label2 .label-count{top:-5px;right:-8px;background:#366ad3;width:16px;height:16px}
.share-icon{padding:2px 7px;margin:5px}
.facebookThis{background:#1877f2}
.twitterThis{background:#1da1f2}
.whatsappThis{background:#01ba6d}
.pinterestThis{background:#e81737}
.share-icon svg{fill:white;margin-right:4px;width:20px;height:20px}
.fill-f{fill:white}
.vam{vertical-align:middle}
.o5{opacity:.5}
.ofc-f img{width:150px;height:200px;object-fit:cover}
.f-1{flex:1}
.index-list{border-bottom:1px solid #eceff5}
.index-list a{display:block;padding:11px 15px}
.FeaturedPost .post-labels a{color:#606060;display:inline-block;background:#e8e8e9;padding:1px 4px}
.feather-user{width:15px;height:15px;stroke:#366ad3}
.feather-tag{width:15px;height:15px;vertical-align:text-top;margin-right:3px}
.dark-mode .header-background,.dark-mode #sidebar .widget,.dark-mode .bc-fff, .dark-mode .FeaturedPost, .dark-mode #PopularPosts2, .dark-mode #allert .widget-content, .dark-mode #disqus_thread,.dark-mode .next,.dark-mode .prev,.dark-mode .index-list,.dark-mode #downloadlist,.dark-mode #main .widget:not(.Blog),.dark-mode .m-GwWBFmbcL,.dark-mode #feed .widget{background-color:#222;}
.dark-mode .bb-1pxsf, .dark-mode #main .widget .title,.dark-mode .ofz,.dark-mode #sidebar .title,.dark-mode #feed .title{border-bottom:1px solid #333}
.dark-mode #sidebar a,.dark-mode a,.dark-mode .next,.dark-mode .prev,.dark-mode .bt-2sf,.dark-mode #downloadlist{color:#ccc}
.dark-mode .list-label-widget-content li,.dark-mode .gtc-1frxa,.dark-mode .index-list,.dark-mode #downloadlist li{border-bottom:solid 1px #333333d6}
.dark-mode .list-label-widget-content li:hover,.dark-mode .fd\:hover:hover{background:#33333361}
.dark-mode .list-label-widget-content,.dark-mode #download{scrollbar-color:#366ad3 #333333d6}
.dark-mode .list-label-widget-content::-webkit-scrollbar-track,.dark-mode #download::-webkit-scrollbar-track{background:#333333d6}
.dark-mode .bc-f5{background-color:#3333338f}
.link\:hover:hover .ck{color:#366ad3}
.dark-mode .flat .archivedate{background:#2b2b2b}
.dark-mode .bt-2sf{border-top:2px solid #333333cf}
.dark-mode .bb-2pxsec{border-bottom:solid 2px #333333cf}
.dark-mode .c-ee{color:#eee}
.dark-mode .bc-e8{background-color:#2b2b2b}
.bg-photo-container{overflow:hidden;position:relative;}
#custom-hero,#custom-hero img,.limit img{position:absolute;top:0;width:100%;height:100%;object-fit:cover;}
.limit img {border-radius: 2px}
.post #custom-hero{display:none;}
.hero-background{height:264px;background-position:center;background-size:cover;width:100%;transform:scale(1.1);filter:blur(5px) saturate(2) brightness(70%);}
@media (max-width:768px){.gtc-175fr{grid-template-columns:125px 1fr}
}
@media (max-width:900px){.gtc-main{grid-template-columns:auto}
}
@media (max-width:375px){.gtc-175fr{grid-template-columns:auto}
.md\:tac{text-align:center}
.fdc-375{flex-direction:column}
}
@media (max-width:600px){#Text1{padding-right:13px;padding-left:13px}
}
@media (max-width:1024px){
.calc-wn20 {width: calc(100% - 20px);margin-right: auto;margin-left: auto;}
.gtc-235fr {grid-template-columns: auto;grid-template-areas: "a1""a2""a3""a4";}
.md-w120{width:120px}
.hero-background{height:170px;}
.md-auto{margin:0 auto}
.module-ctrl.top h1{font-size:1.2rem}
.md-ml-0{margin-left:revert}
.gtc-header{grid-template-columns:auto 1fr;padding:0 13px}
.fdc{flex-direction:column}
#PageList1{justify-self:flex-start}
#Header1{display:flex;align-items:center}
#PageList1,.md\:none{display:none}
.md\:jcc{justify-content:center}
.right{float:right}
.w-180,.md\:full,#PageList1{width:100%}
#PageList1 ul{padding-left:0}
#PageList1 li{border-bottom:1px solid #f1f1f1}
.dark-mode #PageList1 li{border-bottom:1px solid #333}
}
@media (max-width:1024px){
.sm\:dn,#Query-input{display:none;}
.menu-item{width:35px;height:35px;overflow:hidden;}
.right{width:35px;height:35px;padding:10px;background:rgba(0,0,0,.4);margin-left:4px;border-radius:5px;display:grid;place-content:center;}
}
@media (min-width:1025px){.search,.menu{display:none}
#header{margin-left:auto;margin-right:auto;padding-left: 50px;padding-right: 50px}
}
.completed{color:green}
.dropped{color:orangered}
.blog-pager{margin-top:20px;border-top:1px solid #eceff5;padding-top:10px;padding-bottom:10px;text-align:center}
#blog-pager a,.showpageOf,.pagecurrent{padding:9px 16px;margin:5px;border-radius:2px;background-color:#eceff5;display:inline-block}
.dark-mode #blog-pager a,.dark-mode .showpageOf{background-color: #16151d;}
.pagecurrent {background: var(--primary-color);}
.dark-mode .showpageOf,.dark-mode .pagecurrent{border-color:#333333d6;color:#ccc}
.dark-mode #blog-pager a, .dark-mode .blog-pager{border-color:#333333d6}
.pagecurrent{border:none}
.box{box-sizing:border-box}
.icon{height:18px;width:102px;margin-bottom:7px}
.z-1{z-index:1}
.scale-2{scale:2}
.entry-title{-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
.gtc-1frxa:last-child,.index-list:last-child{border-bottom:none}
.label-view #Blog1{grid-gap:0}
#content{display:none}
.score{position:absolute;right:0;z-index:1;padding:3px 5px;font-size:12px;font-weight:500;bottom:0;background:rgba(0,0,0,.8);color:rgba(255,255,255,.9)}
.f1{flex:1}
[data*="Chapter"]{margin-right:5px;color:#366ad3}
.ex[data]{display:none}
.ex[data*="Chapter"]{display:block}
.xe[data]{display:inline-flex}
.xe[data*="Chapter"]{display:none}
.hot::before{content:"H";background:orangered;color:white;font-size:14px;padding:1px 4px;margin-right:4px;border-radius:4px;}
.new::before{content:"N";background:limegreen;color:white;font-size:14px;padding:1px 4px;margin-right:4px;border-radius:4px;}
.sac{scroll-snap-align:center}
.sac {scroll-margin-top: 5rem;}
.widget-content.list-label-widget-content::-webkit-scrollbar{display:none}
textarea:focus, input:focus{outline:none}
sup{font-size:15px;vertical-align:top}
.slide{overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;scroll-behavior:smooth;}
.slide{align-content:center;display:grid;grid-template-columns:repeat(10,minmax(145px,1fr));grid-gap:1em;}
.slide::-webkit-scrollbar{display:none;}
:is(#feed,.slide,#recommendations)  img:hover{transform: scale(1.2);}
:is(#feed,.slide,#recommendations) img {transition: .3s;}
#s11{width:0;height:0;}
.com{top:18px;left:-29px;transform:rotate(-45deg);background:#8e2346;color:white;padding:2px 24px;box-shadow:0 2px 2px rgba(0, 0, 0, 0.5);}
.ong{top:17px;left:-25px;transform:rotate(-45deg);background:#5202ff;color:white;padding:2px 24px;box-shadow:0 2px 2px rgba(0, 0, 0, 0.5);}
.soo{top:24px;left:-33px;transform:rotate(-45deg);background:#534831;color:white;padding:2px 24px;box-shadow:0 2px 2px rgba(0, 0, 0, 0.5);}
.drp{top:18px;left:-29px;transform:rotate(-45deg);background:#0256ff;color:white;padding:2px 24px;box-shadow:0 2px 2px rgba(0, 0, 0, 0.5);margin-left:4px;}
.blob{background:black;border-radius:20px;box-shadow:0 0 0 0 rgba(0, 0, 0, 1);margin:5px 10px;height:12px;width:19px;transform:scale(1);animation:pulse-black 2s infinite;display:inline-block;}
.blob.key{background:#366ad3;box-shadow:0 0 0 0 #366ad3d1;animation:pulse-red 2s infinite;}
@keyframes pulse-red{0%{transform:scale(0.95);box-shadow:0 0 0 0 #366ad3d1;}
70%{transform:scale(1);box-shadow:0 0 0 10px rgba(255, 82, 82, 0);}
100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(255, 82, 82, 0);}
}
.pv figure .separator a,.p figure .separator a, .pen .separator a{pointer-events:none;}
.dark #listItem{background:#1b1b1b;}
.list-judul{padding:9px 19px;border-bottom:1px solid #ccd0d7;}
.dark-mode .list-judul{border-bottom:1px solid #514a4a;}
.list-judul h3{margin:0;font-size:19px;font-weight:500}
.searcch{padding:9px 8px}
input#searchchapter{font-weight:300;background:#e8ebf5;box-shadow:none !important;width:100%;height:34px;font-size:14px;line-height:1.42857143;color:white;border:none;border-radius:3px;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;padding:10px;}
.char:hover{background-color:#366ad31c}
.dark-mode input#searchchapter,.dark-mode .char:hover{background:#171616}
input#searchchapter::placeholder{color:#555}
.ep-item{padding:0;list-style:none;margin:0;display:flex;flex-wrap:wrap;}
.ep-right{margin-right:9px}
ul.ep-item::-webkit-scrollbar{width:2px;height:2px}
ul.ep-item::-webkit-scrollbar-thumb{border-radius:7px;background-color:#a20a0a}
.ep-item .char{padding:11px 15px 11px 8px;padding-top:11px;font-size:14px;position:relative;width:100%;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;flex:0 0 33%;max-width:33%;}
@media (max-width:768px){.ep-item .char{flex:100%;max-width:50%}
}
.ep-item .char:first-child{padding-top:11px}
.ep-item .char:last-child{border-bottom:none;}
.ep-right .eps{background:#366ad3;padding:10px;color:#fff;display:block;text-align:center}
.ep-left,.ep-left .eps-jdl{overflow:hidden;width:100%}
.ep-left{flex:1}
.ep-left .eps-jdl{line-height:21px;text-overflow:ellipsis;white-space:nowrap;float:left}
span.eps a{color:#fff}
span.eps a:hover,span.eps-jdl a:hover{color:#a20a0a}
span.eps-jdl a{color:#366ad3;}
.file-list span{font-size:7px}
.file-list span.eps-date{font-size:14px}
#threaded-comment-form .alr {background: #006b3c;}
.alr{margin-bottom:18px;box-shadow:0 2px 3px rgba(0,0,0,.1);color:#fff;background:#d7382d;font-size:13px;grid-template-columns:50px 1fr;}
.alr.royal{background:royalblue}
#Viewer-module:checked ~ .module-ctrl, .module-ctrl *{transition:.2s;}
.module-ctrl{max-height:0;opacity:0;visibility:hidden;overflow:hidden;}
#Viewer-module:checked ~ .module-ctrl.top, #Viewer-module:checked ~ .module-ctrl.bottom, .module-ctrl{position:fixed;width:100vw}
.module-ctrl{background-color:wheat}
.dark-mode .module-ctrl{background-color:#514d4d}
#Viewer-module:checked ~ .module-ctrl.top, .module-ctrl.top{top:0;}
#Viewer-module:checked ~ .module-ctrl.bottom{bottom:0;}
#Viewer-module:checked ~ .module-ctrl{max-height:200px;opacity:1;visibility:visible;}
.series-chapterlist{list-style:none;padding:0;font-size:15px;}
.flexch-infoz{padding:5px;}
.series-chapterlist li{background:#f7fafc;border-bottom:solid 1px #edf2f7;}
.flexch{display:grid;grid-template-columns:50px auto 50px;align-items:center;}
.series-chapterlist li time{display:block;}
.flexch-book, .flexch-dllink{position:relative;padding:10px;background:#edf2f7;font-size:25px;color:#777;text-align:center;}
.series-chapterlist li time{font-size:12px;}
.series-chapterlist li:hover svg{color:white;}
.series-chapterlist li:hover{color:#fff;}
.series-chapterlist li:hover a{color:#fff !important;}
.series-chapterlist li:hover .flexch-book, .series-chapterlist li:hover .flexch-dllink{background:#020202;}
.series-chapterlist li svg{color:#366ad3}
.dark-mode .series-chapterlist li{background:#3b3c4c;border-bottom:solid 1px #2f303e;}
.dark-mode .flexch-book, .dark-mode .flexch-dllink{background:#48495b;color:#eee;}
.dark-mode .series-chapterlist svg{color:#eee;}
.series-chapterlist li:hover{background:#366ad3e6;}
.ch-title{font-weight:normal;}
.ch-title span{font-weight:800;color:#366ad3}
.ch-title svg{width:20px;height:20px;vertical-align:middle;}
.flexch-infoz a:visited,.flexch > a:visited svg{color:red;}
.fit .header-background,.fit #disqus_thread,.fit footer{display:none;}
.fl-box{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;transition:all .2s ease;opacity:0;visibility:hidden;padding:5px;}
.dl-box{width:100%;max-width:500px;max-height:90%;display:flex;margin:0 auto -50%;background-color:white;border-radius:8px;transition:inherit;z-index:3;overflow:hidden;position:relative;box-shadow:0 10px 8px -8px rgb(0 0 0 / 12%);padding:10px;}
#allert .Text{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;transition:all .2s ease;opacity:0;visibility:hidden;padding:5px;}
#allert .widget-content{width:100%;max-width:500px;max-height:90%;margin:0 auto -50%;background-color:white;border-radius:8px;transition:inherit;z-index:3;position:relative;box-shadow:0 10px 8px -8px rgb(0 0 0 / 12%);}
.dark-mode .dl-box{background-color:#222}
#dl-module:checked ~ .fl-box{opacity:1;visibility:visible;background:rgba(0,0,0,.8);}
#dl-module:checked ~ .fl-box .dl-box{margin:0 auto;}
.mdl-close{z-index:1;padding:0;transform:rotate(45deg);}
.close{background:#366ad3;border-radius:99rem;color:white;}
.fl-close{position:absolute;right:-.6rem;top:.1rem;min-width:3rem;z-index:1;padding:0;height:3rem;transform:rotate(45deg);}
.dl-box table{width:100%;}
.dl-box tbody{text-align:center;}
.dl-box td:first-child, .dl-box th:first-child{text-align:left;}
.dl-box td, .dl-box th{padding:.5rem;}
.dl-box .num{color:#366ad3;font-weight:700;}
.dl-box .btn{font-size:.75rem;font-weight:700;padding:0 1.5rem;}
.btn{cursor:pointer;padding:.5rem 1.5rem;display:inline-block;vertical-align:top;text-align:center;line-height:2rem;width:auto;background-color:#366ad3;color:var(--text);min-width:3rem;border:0;border-radius:5rem;}
#buttonDisqs {padding: .375rem 2.625rem;line-height: 1.5;background: #366ad3;border-radius:3px;color: white;cursor: pointer;}
#scInput{width:100%;color:#366ad3;font-family:inherit;padding:7px 10px;border:1px solid #366ad370;border-radius:3px;background-color:#366ad317;}
#myUL{display:flex;flex-wrap:wrap;gap:10px;line-height:1.5;max-height:300px;overflow-y:scroll;overflow-x:hidden;padding-right:5px;scrollbar-width:thin;}
#myUL li{display:flex;padding:5px 10px;border:1px solid #366ad336;font-size:14px;border-radius:5px;flex:1 1 0;justify-content:space-between;min-width:20%;background:#366ad31c;transition:.2s;flex-direction: column;}
#myUL span{display:block;}
@media (max-width: 550px){#myUL li {min-width: 50%}}
span.chapterdate{font-size:12px;color:#888;}
#myUL li:hover{background:#366ad3;}
#myUL li:hover a{color:white;}
#myUL time {color: #888;font-size: 13px;}
#sidebar .LinkList ul{padding-left:15px;display:grid;grid-template-columns:repeat(3,auto);gap:10px;margin:0;font-size:14px;}
.image{width:100%;height:280px;background-position:center;}
.radio{display:none;}
.images,#homepage-slider{position:relative;}
.images-inner{overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;scroll-behavior:smooth;}
.images-inner{align-content:center;display:grid;grid-template-columns:repeat(10, 100%);grid-gap:1em;}
.labels{position:absolute;right:15px;bottom:10px;}
.fake-radio{float:right;z-index:4;position:relative;}
#slide1:checked ~ div .fake-radio .radio-btn:nth-child(1),#slide2:checked ~ div .fake-radio .radio-btn:nth-child(2),#slide3:checked ~ div .fake-radio .radio-btn:nth-child(3){background:#366ad3;}
.radio-btn{width:9px;height:9px;border-radius:5px;background:gray;display:inline-block !important;margin:0 1px;cursor:pointer;}
.bg::after{content:'';position:absolute;left:0;top:0;width:50%;height:100%;background:linear-gradient(to right,#000 0%,rgba(0,0,0,0) 100%);z-index:1;}
.slideinfo{max-width:1270px;margin:0 auto;position:relative;z-index:2;color:white;display:flex;height:100%;align-items:flex-end;padding:15px;}
.infolimit h3{font-size:23px;font-weight:normal;color:white;}
.infolimit{max-width:700px;padding-bottom:20px;}
.text{font-size:13px;}
.quality{display:inline-block;padding:2px 7px;background:#ffffff;color:#333;vertical-align:top;font-weight:700;font-size:11px;border-radius:2px;margin-right:10px;text-transform:uppercase;}
.gallery{padding:0;display:grid;grid-template-columns:repeat(10, 100vw);grid-template-rows:1fr;overflow:auto;height:280px;scroll-snap-type:both mandatory;margin:0;scrollbar-width:none;scroll-behavior:smooth;}
.swiper-pagination{position:absolute;right:20px;bottom:10px;z-index:20;display:flex;}
.swiper-pagination a{background:white;width:10px;height:10px;border-radius:99rem;padding:6px;margin:7px;}
@media (max-width:1024px){.gallery{height:180px;}
.infolimit p,.swiper-pagination a{display:none;}
}
.gallery::-webkit-scrollbar{display:none;}
.active{scroll-snap-type:unset;}
.gallery li{scroll-snap-align:center;display:inline-block;background-position:center;background-size:cover;position:relative;}
#Label3{max-width:1100px;margin:0 auto;}
#Label3 .cloud-label-widget-content{position:relative;padding:0 10px 0 10px;margin-top:-25px;z-index:4;overflow:hidden;box-shadow:0 2px 3px rgba(0,0,0,.1);}
#Label3 .cloud-label-widget-content .label-name{line-height:50px;color:white;text-transform:uppercase;padding:0 20px;display:inline-block;}
@media (max-width:1024px){#Label3 .cloud-label-widget-content{text-align:center;}
}
.label-more::after{content:attr(data-text);}
.label-more::after{flex-shrink:0;font-size:14px;margin-left:4px;color:white;}
.labelInput ~ .labelAll{transition:.3s ease-in-out;max-height:0;overflow:hidden;}
.labelInput:checked ~ .labelAll{max-height:100vh;margin-bottom:10px;}
.genres-list{float:left;width:100%;}
.genres-list a{width:150px;color:#fff;font-size:15px;cursor:pointer;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;}
.mySlides{display:none}
img{vertical-align:middle;}
.hotx .iconify{width:20px;height:20px;color:white;}
.colored .iconify{width:18px;height:18px;color:#222d34;}
.hotx{position:absolute;bottom:5px;right:5px;z-index:1;width:25px;text-align:center;background:#f44336;border-radius:99rem;height:25px;}
.colored{position:absolute;z-index:1;bottom:5px;left:5px;background:#ebcf04;color:rgba(0,0,0,.7);font-weight:700;font-size:10px;padding:2px 5px;border-radius:3px;text-transform:uppercase;display:flex;align-items:center;}
.m-GwWBFmbcL svg{width:16px;height:16px;color:#366ad3;}
.dropdown{position:relative;}
.check-box {user-select: none;pointer-events: none;}
.dropMenu ~ ul{border-radius:6px;box-shadow:0 4px 4px rgba(0,0,0,.38);left:-5px;opacity:0;pointer-events:none;position:absolute;top:52px;user-select:none;padding:5px 0;min-width:240px;}
.p-y7x15-a a:hover{background:rgba(0,0,0,.32);color:white;transition:color .5s;}
.dropMenu a{padding:7px 15px;}
.dropMenu:checked ~ ul{animation:v-4fbac4e1 .25s;opacity:1;pointer-events:auto;user-select:auto;z-index:100;}
.dropdown ul::before{width:0;height:0;content:"";z-index:2;transform:scale(1.01);border-bottom:.6rem solid currentColor;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:100%;color:var(--v171);left:23%;position:absolute;}
@keyframes v-4fbac4e1{0%{opacity:0;transform:translateY(-15px) }
60%{opacity:1 }
to{transform:none }
}
.row{display:flex;justify-content:space-between;align-items:center;}
.entry{position:relative;transition:.15s;}
.entry .cover{display:none;max-width:0;min-width:0;padding:0;width:0;}
.entry > div{flex:2;padding:8px 10px;text-align:center;}
.entry .titles{flex:5;padding-left:15px;text-align:left;display:flex;align-items:center;}
.entry .titles{order:-1;}
.entry .titles a{transition:0s;margin-right:auto;}
.entry:hover .cover{display:block;}
.entry .cover .image{background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:3px;height:40px;width:40px;}
.entry:hover .cover .image{border-radius:3px;display:block;padding:0;position:absolute;top:-60px;width:140px;z-index:111;}
.entry:hover{background:#366ad3;color:white;}
.entry:hover a{color:white}
.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba;position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem;width:100%}
.pop-area::-webkit-scrollbar{display:none}
.pop-area{display:flex!important;width:100%;height:100%;position:fixed;top:0;left:0;background:rgb(0 0 0 / 51%);visibility:hidden;opacity:0;transition:all 0.25s ease-in-out;z-index:999999;overflow-y:scroll}
.pop-area.open{opacity:1;visibility:visible}
.pop-html{background:#fff;padding-bottom:10px;display:block;margin:auto auto;width:calc(100% - 20px);max-width:500px;visibility:hidden;opacity:0;overflow:hidden;transition:all 0.5s ease-in-out;transform:scale(.5);border-radius:7px;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}
.pop-area.open .pop-html{opacity:1;transform:scale(1);visibility:visible}
.head-pop{width:-webkit-fill-available;padding:12px 30px;overflow:hidden;background:#366ad3}
.close-btn{float:right;cursor:pointer;fill:#7e7e7e}
.body-content{padding:10px}
.text-center{display:grid;text-align:center;grid-gap:15px}
.text-center svg{margin:0 auto}
.btn.btn-outline-info{width:fit-content;margin:0 auto;text-decoration:none}
.table{width:100%;border:1px solid #366ad3;border-radius:7px;margin:5px 0;padding:5px}
.table img{border-radius:4px;width:auto}
.table a{text-decoration:none}
.img-left{width:1px}
.span-spc{margin-top:3px;white-space:unset;color:#888;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
.item-left{vertical-align:-webkit-baseline-middle;padding-right:10px}
.btn-remove{cursor:pointer}
.show-bookmark{color:#fff;background-color:#007bff;position:relative;top:-20px;right:10px;font-size:50%;padding:.15em .3em;display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:50%;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}
.hartomy-bookmark-btn,.btn-outline-info{position:relative;display:inline-block;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;width:100%;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:rgb(var(--pure-material-onprimary-rgb,255,255,255));box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);font-family:var(--pure-material-font,"Roboto","Segoe UI",BlinkMacSystemFont,system-ui,-apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:none;cursor:pointer;transition:box-shadow 0.2s;margin-bottom:15px;}
.hartomy-bookmark-btn::-moz-focus-inner{border:none}
.hartomy-bookmark-btn svg{vertical-align:middle}
.buka-tutup{color:white;}
.dark-mode .body-content,.dark-mode .pop-html{background:#222;}
.dark-mode .table{border:1px solid #333;}
.myGrid .bookItem,.bookItem>a{position:relative;overflow:hidden}
.bookItem>.data>h2,.subItem li .chpName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.myGrid{display:grid;grid-template-columns:repeat(3,1fr)}
.myGrid .bookItem>a{float:left;height:141px;margin-right:10px;border-radius:3px}
.snippet-thumbnail {aspect-ratio: 3/4;}
.bookItem .snippet-thumbnail img{width:90px;height:auto;object-fit:cover;border-radius:3px;}
.myGridv2 .bookItem .snippet-thumbnail img {width:100%}
.bookItem>.data{overflow:hidden;line-height:21px;}
.bookItem>.data>h2{font-size:.98em;font-weight:500}
.myGrid .bookItem>.data>h2{margin:0;}
.myGridv2 .bookItem>.data>h2{margin:8px 0;}
.bookItem a{color:#333;text-decoration:none}
.bookItem>.data>.subItem{margin:10px 0 0;padding-left:15px}
.myGrid .bookItem {padding: 15px 10px;}
.bookItem:last-child {border-bottom: none}
.subItem li{margin-bottom:5px;font-size:13px}
.myGrid .subItem li .chpName{float:left;max-width:80px}
.myGrid .subItem li .chpDate{float:right;color:#999;font-size:12px}
.snippet-thumbnail{overflow:hidden;position:relative;}
.myGridv2{display:grid;grid-template-columns:repeat(auto-fill,minmax(141px,1fr));gap:20px;padding:15px;}
.myGridv2 .bb-1pxsf{border-bottom:none;}
.myGridv2 .new-tag{display:none;}
.myGridv2 .bookItem > .data > .subItem{padding-left:0;list-style:none;margin:0;}
.myGridv2 .char{display:flex;align-items:center;justify-content:space-between;}
.myGridv2 .chpName{padding:0 7px;background:#366ad32e;border-radius:10px;}
@media screen and (max-width:1080px){.myGrid{grid-template-columns:repeat(3,1fr)}
}
@media screen and (max-width:500px){.myGrid{grid-template-columns:repeat(1,1fr)}
}
.po{bottom:4px;right:4px;background:gray;padding:0 6px;font-size:13px;border-radius:4px;color:white;}
.manga {background:#ff0038;}
.manhua {background:#007fff;}
.manhwa {background:#006b3c;}
.myGridv2 .bookItem > a{position:unset;}
.dark-mode .bookItem a{color:#ccc}
.nav-a a,.nav-a label{color:rgba(255,255,255,.6);font-weight:500;}
.subItem li .chpName a:visited,#myUL a:visited{color:#366ad3}
.nav-a a:hover,.nav-a label:hover{color:#fff;}
.nav-a a::after,.nav-a label::after{content:'';display:block;width:0;height:2px;z-index:1;position:relative;background:white;transition:0.3s;}
.nav-a a:hover::after,.nav-a label:hover::after{width:100%;transition:0.3s;}
.dark-mode #sidebar ul.genre::before,.dark-mode #sidebar ul.genre::after{background:#333}
#notification{background-color:#366ad3;color:white;}
#notification .widget-content{padding:7px;}
.tab{overflow:hidden;background-color:#f1f1f1;}
.dark-mode .tab{background-color:#333}
.tab li{background-color:inherit;float:left;border:none;outline:none;cursor:pointer;padding:4px;transition:0.3s;font-size:14px;width:20%}
.dark-mode .tab li{color:#ccc}
.tab li:hover{background-color:#ddd;}
.dark-mode .tab li:hover{background-color:#366ad34a;}
.tab li.active{background-color:#366ad3;color:white;}
@media only screen and (max-width:590px){.tab li:nth-child(n+4){display:none;}
.tab li{width:33.3%}
}
#recommendations .widget{display:none;}
#recommendations .widget{padding:10px 0;}
.jp{background-image:url(https://blogger.googleusercontent.com/img/a/AVvXsEgy78vVijPJfAhiDZibEiink5MdFFe99hZw8-rVzqfgJXqeTclaiQCcjxEN-37ZZSqllxyfOkQATOqQW6-RDHw15lj5v7jJCfmfCtkbKqeiRWpl_7hqU6EbwIDNiG9xQkMr3WegbTmCjmoV3KeVsuz5_wSLCg_XPSHvfhdFh3_gPO6w6qAJuWblIL4rWQ=s50);}
.cn{background-image:url(https://blogger.googleusercontent.com/img/a/AVvXsEh7o3WESCpE9G2NSiDpLhD6_N9WYQBJ74JJHavvaQVGBwgIV6D4zL8l4sguDSqkFqhzsOfBq0y1NmE3tEF9A6Y_4BwqBD6DTI9BIZ-UL58sQyEMyDPRGoW9Y-iSmr4t3BxpOgMkxJDEBfMRGdHAucprfhrPC8Pc4ZtC-xY3zuabK7nY39w6seW4GOv7Hw=s50);}
.kr{background-image:url(https://blogger.googleusercontent.com/img/a/AVvXsEi18s6Wr5BOAC7-G2x7GLPX7aEOIoqLCbiU3YAslN0a7J8Jz2OMe0OhGHMgM9g3WeM9rQHP3Qz-u4ooyiOwyRTGznCktu_EJfTMqj_y2GVYwThGNKTLAKs_o_1RjLL3yEUNlQiazeCXruPpY0nS2xudxDeV_VJIYosrC9pwwzDTehjVtJ5F9eb8zy9WpQ=s50);}
#chapterSelect{background:#333;border:1px solid #333;font-family:inherit;display:block;color:#9b9b9b;padding:3px 10px;border-radius:20px;font-size:13px;max-width: 150px;}
.nextPrev a{padding:3px 15px;border-radius:20px;color:#fff;font-size:13px;background:#366ad3;}
.nextPrev svg{width:18px;height:18px;}
#ecNext a{padding-right:8px;}
#ecPrev a{padding-left:8px;}
.progress-custom{display:flex;align-items:center;background:;}
.progress{display:flex;height:1rem;overflow:hidden;font-size:0.75rem;background-color:;border-radius:0.25rem;height:1rem;font-size:0.6em;flex:1;position:relative;}
.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;transition:width 0.6s ease;overflow:hidden;background:linear-gradient(to right, #366ad3, #366ad3);padding-right:calc(100% - var(--width));width:100%;height:100%;-webkit-clip-path:inset(0 calc(100% - var(--width)) 0 0);clip-path:inset(0 calc(100% - var(--width)) 0 0);}
.progress-custom .progress-value{font-size:0.8em;padding:0 0.5em;}
div#ec_Select { visibility: hidden;user-select: none;pointer-events: none;width: 0;}
/* Random Post Multi Tab Dagruel */
.series-gen ul.nav-tabs{display:flex;list-style:none;margin:0;padding:6px;overflow:hidden;}
.series-gen ul.nav-tabs li{flex:1;cursor:pointer;text-align: center;}
.customAF.scroll{display:none;position:relative;padding:5px 10px;}
.customAF.scroll.active{display:block;}
.customAF.scroll .scrollButton{display:inline-block;position:absolute;top:calc(50% - 63px);z-index:3;background:#303030;transition:.3s;padding:30px 10px;outline:0;border:none;cursor:pointer;opacity:0;}
.customAF.scroll:hover .scrollButton{opacity:.9;}
.customAF.scroll .scrollButton:hover{background:#3b3b3b;opacity:1;}
.scrollButton.left{left:10px;}
.scrollButton.right{right:10px;}
.scrollButton svg{width:24px;height:24px;vertical-align:middle;}
.scrollButton svg path{fill:#fff;}
.customAF .inner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;padding:5px 5px 0;width:calc(100% - 10px);}
.customAF .inner.scrolling{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(142px,1fr));overflow-x:hidden;scroll-behavior:smooth;padding:0;width:100%;}
.customAF .inner .customAgata{float:left;width:calc(20% - 10px);padding:0 5px;margin-bottom:10px;}
.customAF .inner.scrolling .customAgata{float:none;width:auto!important;padding:0;margin:0;}
.customAgata .images{position:relative;}
.customAF .inner .customAgata .images figure{position:relative;margin:0;padding-top:142%;border-radius:3px;overflow:hidden;}
.customAgata .images figure:after,.customAgata .images figure:before{content:'';}
.customAgata .images figure img,.customAgata .images figure:after,.customAgata .images figure:before{position:absolute;left:0;right:0;bottom:0;top:0;}
.customAgata .images figure:before{margin:auto;width:3rem;height:3rem;line-height:3rem;text-align:center;font-size:1.5rem;z-index:2;transform:scale(0);background-repeat:no-repeat;background-position:center;background-size:50px;background-image:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"%3E%3Cpath fill="white" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"%2F%3E%3C%2Fsvg%3E');transition:transform .2s ease-out;}
.customAgata:hover .images figure:before{opacity:1;transform:scale(1);}
.customAgata .images figure img{object-fit:cover;}
.customAgata .images figure img,.customAgata .images figure:after{width:100%;height:100%;}
.customAgata .images figure:after{border-radius:3px;background-color:#263238;opacity:0;transition:opacity .2s ease-out;}
.customAgata:hover .images figure:after{opacity:.5;}
.customAgata .entry-title{font-size:.95em;margin:8px 0;margin-bottom:8px;margin-bottom:5px;font-weight:500;line-height:19px;text-align:left;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
@media screen and (min-width:1120px){.customAF.scroll .scrollButton {display: none;}}
@media screen and (max-width:1120px){.customAF .inner .customAgata{width:calc(25% - 10px);}}
@media screen and (max-width:768px){.customAF .inner .customAgata{width:calc(33.333333% - 10px);}}
@media screen and (max-width:544px){.customAF .inner .customAgata{width:calc(50% - 10px);}}
.customAF .inner.scrolling::-webkit-scrollbar{display:none;}
.scrollButton.left{border-radius:0 0.25rem 0.25rem 0;}
.scrollButton.right{border-radius:0.25rem 0 0 0.25rem;}
.series-gen .title svg{vertical-align:middle;margin-left:10px;transition:.5s;}
.head svg {transition: .5s}
.head:hover svg{transform:rotate(180deg);transition:.5s;}
@media screen and (min-width:1279px){.gta-ms{grid-template-columns:1fr minmax(200px,330px);gap:1.3rem;}}
/* Search Filter */
.BlogSearch input[type=checkbox]:not(.simple,.hidden){position:relative;-webkit-appearance:none;width:12px;height:18px;border:1px solid #DDD;border-radius:5px;-webkit-transition:.4s;transition:.15s;vertical-align:-25%;display:inline-block;cursor:pointer;outline:0;margin: 0;}
.dark-mode .BlogSearch input[type=checkbox]:not(.simple,.hidden){border-color:#666}
input[type=checkbox]:not(.simple,.hidden):after{content: url('');position:absolute;top:0;left:0;bottom:3px;transition:.15s;}
.BlogSearch input[type=checkbox]:not(.simple):checked{background:#366ad3;}
.BlogSearch input[type=checkbox]:not(.simple):checked:after{transition:.15s;}
.BlogSearch input[type=checkbox]:not(.simple).nocolor:checked{background-color:var(--primary);}
.filters button[type="submit"]{color:#fff;transition:all .15s;width:100%;border:1px solid var(--primary-color);background:var(--primary-color);border-radius:.25rem;}
.filters button{font-size:13px;font-weight:400;padding: 3px 6px;}
.filters button[type="submit"]:hover{filter:brightness(90%);}
.filters .searchf{padding:0 15px;margin-left:0;margin-right:0;margin-bottom:8px;}
.filters input:focus,.filters input:hover{color:#d5d5d5;border-color:#404040;}
.filters input{padding:0 8px;border:1px solid #363636;transition:all .15s;width:100%;background:0 0;color:#666;height:30px;border-radius:.25rem;}
.filters{counter-reset:checked;}
.filters input:checked{counter-increment:checked;}
.filters .dropdown-menu li input:checked ~ label {color:#366ad3;}
.filters .dropdown-menu li label{color:#666;line-height:23px;padding-left:2px;background:0 0!important;border-radius:2px;cursor: pointer;}
.dropdown-menu {scrollbar-width: thin;}
.count:after{content:counter(checked);}
.filters svg{height:15px;}
.filter{position:relative;}
.dropdown-toggle{width:100%;border:1px solid #efefef;outline:0;line-height:25px;border-radius:.25rem;background:#efefef;font-size:.85em;color:#666;display:block;}
.dark-mode .dropdown-toggle{border:1px solid #262626;background:#262626;color:#ccc;}
.dropdown-toggle .value{color:var(--primary-color);}
.dropdown-menu{position:absolute;top:100%;right:0;z-index:1000;float:left;width:100%;margin:.125rem 0 0;font-size:.94rem;color:#aaa;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;opacity:0;user-select:none;pointer-events:none;}
.filters .dropdown-menu{background:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);padding:10px;margin-top:1px;font-size:.9em;overflow: hidden;}
.c4:hover {overflow-y: scroll;}
.dark-mode .filters .dropdown-menu{background:#212121;box-shadow:0 6px 12px rgba(0,0,0,.175);}
.filters .dropdown-menu.c4{width:500px;}
.filters .opt{display:grid;grid-template-columns:1fr 1fr;padding:15px;gap:8px;}
.filters .dropdown-toggle{transition:all .15s;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;text-align:center;cursor:pointer;color:#2f2f2f;}
@media screen and (min-width:1280px){.filters .dropdown-menu.lg{max-height:240px;}}
@media screen and (max-width:576px){.filters .dropdown-menu.lg{width:300px;}}
@media only screen and (max-width: 900px){.dropdown-menu{right: 0;left: 0;max-width: unset}}
.hidden{display:none;}
#Genre:checked ~ ul,#Status:checked ~ ul,#Type:checked ~ ul,#Lang:checked ~ ul,#Country:checked ~ ul,#Quality:checked ~ ul{opacity:1;user-select:auto;pointer-events:auto;}
.opt > div:nth-child(2n) .dropdown-menu{left:auto;right:0;}
.filters .dropdown-toggle:hover{background:#d0d0d0;border-color:#d0d0d0;}
.dark-mode .filters .dropdown-toggle:hover{background:#2d2d2d;border-color:#2d2d2d;}
.dark-mode .filters .dropdown-toggle {color:#666}
.chk:checked ~ [for]{background:var(--primary-color);color:white;}
.chk:checked ~ .dropdown-toggle .value{color:white;}
.dropdown-menu{display:grid;gap:5px;}
.c4{grid-template-columns:repeat(auto-fill,minmax(100px,1fr));}
#sidebar .widget {overflow: unset;}
#close,.mystyle #submit {
display: none;
}
.mystyle #close {
display: flex;
}
.mystyle {
position: absolute;
left: 5px;
right: 5px;
border-radius: 5px;
width: auto;
background: #17151b;
padding: 4px;
margin-right: 0;
display:flex !important;
}
/* Star Rating Css by Wolv Themes */
.starRating .p{background:#fefefe; padding-left:5px;width:160px; border:1px solid #eceff1;border-radius:10px;
position: relative; top:20px;margin-top:-45px;text-transform: uppercase;}     .darkMode .starRating .p{background:#232323;}
/* Product Rating */
.rating-produk i.icon-star-angka{font-weight:400;font-size:12px;margin-left:5px;vertical-align:1px}
.rating-produk{padding:0;width:55%;float:left;box-sizing:border-box;margin-top:10px}
b.widget-rating{display:block;margin-bottom:10px}
i.icon-star,.icon-star{font-weight:400;font-style:normal;display:inline-block}
i.icon-star:before,.icon-star:before{content:&#39;&#39;;width:17px;height:17px;display:inline-block;margin:-2px;transition:all .3s ease;background:url(&quot;data:image/svg+xml,%3Csvg viewBox=&#39;0 0 24 24&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39;%3E%3Cpath d=&#39;M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z&#39; fill=&#39;%23ffc53e&#39;/%3E%3C/svg%3E&quot;) no-repeat}
i.icon-star.silver:before,i.icon-star.silver:before{content:&#39;&#39;;width:17px;height:17px;display:inline-block;margin:-2px;transition:all .3s ease;background:url(&quot;data:image/svg+xml,%3Csvg viewBox=&#39;0 0 24 24&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39;%3E%3Cpath d=&#39;M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z&#39; fill=&#39;%23a9acad&#39;/%3E%3C/svg%3E&quot;) no-repeat}
.menu-item{display:flex;place-content:center;color:white;background-color:rgba(0,0,0,.4);padding:4px 10px;border-radius:5px;}
.shwx{position:absolute;top:53px;left:0;width:100%;background:#222;z-index:3;height:100%;display:block!important;}
.shwx ul{margin:20px;}
#PageList1.shwx li{border-bottom:none;}
/* Post Comment */
#comments {grid-area: a4;}
#showComments, #disqus_thread{margin-top:30px;text-align:center;}
#showComments:target, #showComments + #comments{display:none} #showComments:target + #comments{display:block}
.show-comment a, .comment-add .comment-reply{display:block;padding:18px 20px;border:1px solid #505050;border-radius:5px;font-size:13px;color:#505050;text-align:center}
.comment-add .comment-reply.hidden{display:none}
.show-comment a:hover, .comment-add .comment-reply:hover{border-color:#989b9f;color:#989b9f}
.comments{margin-top:30px}
.comments .comment-disable{text-align:center}
.comments ol, .comments ul{list-style:none;margin:0;padding:0}
.comments li{position:relative;padding:15px 20px;border-radius:3px;background-color:rgba(255,255,255,.7);box-shadow:0 4px 12px 0 rgba(9,32,76,.05)}
.comments li{margin-bottom:15px}
.comments li a{color:inherit}
.comments li .avatar-image-container{display:flex;align-items:center;position:absolute;width:40px;height:40px;border-radius:50%;overflow:hidden;background:#ebeced url("data:image/svg+xml,") center / 18px no-repeat;transition:all .2s ease-out;-webkit-transition:all .2s ease-out}
.comments li .avatar-image-container img{margin:auto;width:40px}
.comments li .comment-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;height:40px;margin:0 0 20px 50px;padding:3px 0}
.comments li .comment-header .datetime{width:100%;font-size:11px;color:#989b9f}
.comments li .comment-header .datetime a{color:inherit}
.comments li .comment-header .user{flex:0 0 auto;display:flex;align-items:flex-start;font-size:13px;font-weight:700;font-family:'Nunito Sans', sans-serif;color:#161617}
.comments li .comment-header .user span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px}
.comments li .comment-header .user svg{width:16px;height:16px;fill:#519bd6;margin:0 0 0 5px}
.comments li .comment-header .user .blog-author{display: block;background-color: #e4e6eb;margin-left: 5px;border-radius: 4px;font-size: 11px;padding-left: 4px;padding-right: 4px;font-weight: 600;color: #65676b;}
.comments li .comment-actions, .comments li .comment-replies .comment-reply{margin:10px 0 0 auto;font-size:13px}
.comments li .comment-replies + .comment-actions{display:none}
.comments li .comment-replies{margin:10px 0 0 auto}
.comments li .comment-replies .thread-toggle,
.comments li .comment-replies .comment-reply a, .comments li .comment-actions a{display:inline-flex;align-items:center;font-size:13px;}
.comments li .comment-replies .thread-toggle svg, .comments li .comment-replies .comment-reply svg, .comments li .comment-actions svg{width:14px;height:14px;margin-right:5px;stroke:#505050}
.comments li .comment-replies .thread-show:checked + .comment-thread .thread-toggle svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}
.comments li .comment-replies .thread-show:checked + .comment-thread .thread-chrome,
.comments li .comment-replies .thread-show:checked + .comment-thread + .comment-reply{display:none}
.comments li .comment-replies .thread-chrome{margin-top:20px}
.comments li .comment-replies .comment-reply{width:calc(100% - 55px);display:flex;align-items:center;}
.comments li .comment-replybox-single{margin-top:20px}
.comments li li{display:flex;align-items:flex-start;flex-wrap:wrap;padding:0;background-color:transparent;box-shadow:none}
.comments li li:not(:last-child){margin-bottom:10px}
.comments li li .avatar-image-container{width:32px;height:32px}
.comments li li .comment-block{width:calc(100% - 40px);margin-left:auto;padding:0 15px 15px;background-color:#f7f9f8;border-radius:15px}
.comments li li .comment-header{height:initial;margin:0 0 10px;padding:0}
.comments li li .comment-header .datetime{width:initial}
.dark-mode .comments li {background: #222;}
.dark-mode .comments li .comment-header .user {color: white;}
/* Comment Sorting*/
.cmAl:checked ~ div .s::before{content:attr(data-new);}
.s::before{content:attr(data-text);margin:0 6px;opacity:.7;font-size:90%;}
.s::after{content:'\296E';line-height:18px;font-size:17px;}
.cmAl:checked ~ div .s::before{content:attr(data-new);}
.comments-content > ol{display:flex;flex-direction:column;}
.cmAl:checked + * + div > ol{flex-direction:column-reverse;}
.s{cursor:pointer;}
/* Chapter List */
#post-list{
display: grid;
gap: 5px;
width: 100%;
overflow: auto;
max-height: 300px;
}
#post-list a:visited{color:gray}
#post-list a{
margin: 0 2px 5px;
font-weight: 500;
padding: 10px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
background: #efefef;
border-color: #efefef;
}
#post-list a span:last-child{
font-size: 11px;
font-style: italic;
color: gray;
float: right;
}
#post-list a span:first-child{
font-size: 13px;
float: left;
}
.dark-mode #post-list a{
background-color: #333;
border: 1px solid #222
}
/* Slider */
#slider{position:relative;}
#left-button,#right-button{padding:15px 0;}
#left-button{position:absolute;top:50%;left:0;transform:translate(0,-50%);background:#366ad3b5;border-radius:0 8px 8px 0;cursor:pointer;z-index: 2;}
#right-button{position:absolute;top:50%;right:0;transform:translate(0,-50%);background:#366ad3b5;border-radius:8px 0 0 8px;cursor:pointer;z-index: 2;}
#right-button svg,#left-button svg{stroke:white;width:36px;height:36px;position:relative;top:3px;}
#right-button,#left-button{display:none;}
#slider:hover #right-button,#slider:hover #left-button{display:block;}
.item{min-width:100%;height:280px;scroll-snap-align:start;overflow:hidden;background-size:cover;background-position:center;}
#slides{display:flex;overflow:hidden;scroll-behavior:smooth;scroll-snap-type:x mandatory;}
.mainslider{position:relative;overflow:hidden}
.mainslider::before{position:absolute;top:0;left:0;z-index:2;display:block;width:100%;height:100%;background:rgb(0 0 0 / 18%);content:"";}
.mainslider .limit{position:relative;background:#222;overflow:hidden;height:280px;}
.mainslider .limit::before{position:absolute;bottom:0;display:block;width:100%;height:25%;content:"";background-color:rgba(255,255,255,0);background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),to(#1e2129));background-image:-webkit-linear-gradient(top,rgb(255 255 255 / 0%),#1e2129);background-image:-moz-linear-gradient(top,rgba(255,255,255,0),#1e2129);background-image:-ms-linear-gradient(top,rgba(255,255,255,0),#1e2129);background-image:-o-linear-gradient(top,rgba(255,255,255,0),#1e2129);background-image:linear-gradient(top,rgba(255,255,255,0),#1e2129);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='rgba(255,255,255,0)',endColorStr='#1e2129');z-index:3;}
.mainslider .limit .sliderinfo{position:absolute;bottom:10%;z-index:2;width:100%;font-family:'Roboto',sans-serif;}
.mainslider .limit .sliderinfo .sliderinfolimit{max-width:1200px;margin:0 auto;padding:0 15px;}
.mainslider .limit .bigbanner{background-position:50% 35%;background-repeat:no-repeat;background-size:cover;min-height:280px;}
.mainslider .limit .sliderinfo .sliderinfolimit span.name{color:#FFF;font-weight:300;font-size:23px;margin-bottom:10px;display:block;max-width:700px;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.mainslider .limit .sliderinfo .sliderinfolimit .meta{margin-bottom:8px;box-shadow:none;}
.mainslider .limit .sliderinfo .sliderinfolimit .desc{color:#ddd;max-width:520px;overflow:hidden;line-height:19px;font-size:13px;font-weight:300;}
.bookmarked,.menu-item:hover {filter: hue-rotate(233deg);}
.black-bg{padding:10px;background:rgba(0,0,0,0.7);border-radius:8px;max-width:700px;color:#366ad3;}
#nPL{display:flex;justify-content:space-between;margin-bottom:20px;}
#nPL,#nPL2{padding:5px;direction: ltr;}
#nPL2{margin-top:10px;margin-bottom:15px}
.nPL_select{outline:0;background:#333;border:1px solid #333;font-family:inherit;display:block;color:#9b9b9b;padding:6px 10px;border-radius:20px;font-size:13px;width:100%}
@media only screen and (max-width:900px){
#nPL2,#nPL{display:grid;grid-template-columns:1fr}.
nPL_select{margin-bottom:5px}
.inner_nPL a{width:100%;text-align:center}
}@media only screen and (min-width:900px){
.inner_nPL a{width:123px;text-align:center}
#nPL2,#nPL{display:grid;grid-template-columns:1fr 0fr}
.nPL_select{max-width:150px}
}
.inner_nPL a span{font-size:16px}
.inner_nPL a:last-child{margin-right:3px}
.inner_nPL a:first-child{order:1}
.inner_nPL,.inner_nPL li{list-style-type:none;margin:0;padding:0;}
.inner_nPL{display:flex;align-items:center;margin-top:5px}
.inner_nPL li{flex:1;text-align:center;}
.inner_nPL li a{display:block;color:#fff;padding:5px;text-decoration:none;background-color:#00008b;border-radius:5px;}
.inner_nPL a{background-color:#366ad3;}
.inner_nPL a{display:block;padding:2px 15px;border-radius:20px;color:#FFF;font-size:13px;line-height:25px;}
.inner_nPL li a:before,.inner_nPL li.next a:after{content:'';display:inline-block;min-width:20px;min-height:20px;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24'xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'fill='%23fff'/%3E%3C/svg%3E");background-position:center;background-repeat:no-repeat;vertical-align:middle}
.inner_nPL li.prev a:before{background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24'xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'fill='%23fff'/%3E%3C/svg%3E")}
.inner_nPL li.next a:before{content:none}
.inner_nPL li.next a:after{background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24'xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'fill='%23fff'/%3E%3C/svg%3E")}
.inner_nPL li span{vertical-align:middle}
.inner_nPL .dlx {background: #d50f00;}
.chpName a .new-tag{color:green;margin-left:5px;font-size:10px;background-color:green;color:white;border-radius:3px;padding:0 3px;}
.chpName a:visited .new-tag{color:white;background-color:white;}
.dark-mode .chpName a:visited .new-tag{color:#222222;background-color:#222222;}
.char:hover .new-tag{color:#366ad31c;background-color:#366ad31c;}
/* Scroll To Top */
#scTop{display:none;position:fixed;bottom:20px;right:25px;z-index:99;font-size:18px;border:none;outline:none;background-color:#366ad3;color:white;cursor:pointer;padding:5px;border-radius:3px;width: 33px;height: 33px;}
#scTop:hover{background-color:#555;}
/* Reading History */
.widget-history ul{list-style:none;padding:0;margin:0;}
.widget-history li{padding:0;border-bottom:1px solid  rgb(236,236,236);}
.widget-history a{padding:7px 15px;display:block;line-height:20px;transition:.2s linear;font-size:13px;}
.widget-history li:hover a{color:white;}
.widget-history li:hover{background-color:#366ad3;transition:.2s linear;}
.dark-mode .widget-history li{border-bottom-color:#333;}
/* Social Footer */
.socialbutton a .fab,.socialbutton a .fas{line-height:28px;}
.socialbutton a{display:inline-block;margin:0 2px;font-size:15px;color:rgba(255,255,255,.7);background:#2e2e2e;border-radius:5px;width:30px;border:1px solid #4b4b4b;}
.socialbutton a.scfb:hover{background:#1877f2!important;border-color:#1877f2!important;color:#FFF!important;}
.socialbutton a.scig:hover{background:linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)!important;color:#FFF!important;border:0;}
.socialbutton a.scdc:hover{background-color:#7289da;border:0;}
/* Social Footer */
#character ul{display:grid;gap:10px;list-style:none;padding-left:0;}
#character img{width:45px;height:45px;object-fit:cover;border-radius:50%;}
#character li{display:grid;grid-template-columns:50px auto;gap:10px;align-items:center;}
#character span{color:#999;font-size:.8rem;}
/* Slider */
.ct-wrapper {
padding: 0;
position: relative;
width: auto;
margin: 0;
overflow: hidden
}
.owl_carouselle.owl-carousel.owl-loaded {
margin-bottom: 0
}
.slider-item {
position: relative;
height: 100%
}
.slider-item:before {
display: block;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: #2d3436;
opacity: .4;
z-index: 1
}
a.slider-image {
height: 100%;
filter: blur(0px)
}
.post-descript {
position: absolute;
left: 5%;
top: 5%;
z-index: 99;
padding: 25px;
text-align: left;
transition: all .3s;
width: 70%;
overflow: hidden
}
.slider-wrapp .post-inner {
padding: 0;
margin: auto
}
.slider-item h2.post-title {
max-width: 350px;
font-size: 24px;
margin: 0;
max-height: none;
overflow: hidden;
line-height: normal;
white-space: nowrap;
text-overflow: ellipsis
}
.slider-item h2.post-title a {
color: #fff;
transition: all .3s
}
.slider-item h2.post-title a:hover {
color: #aaa
}
.slider-item .post-date {
display: inline-block;
color: #aaa;
font-size: 10px;
margin: 10px auto 0;
text-transform: uppercase
}
.slider-item .post-tag a {
display: inline-block;
background: #f39c12;
color: #fff;
padding: 3px 10px;
font-size: 10px;
text-transform: uppercase;
letter-spacing: .5px;
margin: 0 auto 10px;
border-radius: 3px;
transition: all .3s
}
.slider-item .post-tag a:hover {
background: #000;
color: #fff
}
.covert {
position: absolute;
top: 14%;
right: 5%;
bottom: 0;
height: 200px;
width: 140px;
z-index: 5;
overflow:hidden
}
.covert a {
filter: none!important;
border-radius: 3px
}
.owl-carousel,.owl-carousel .owl-item {
-webkit-tap-highlight-color: transparent;
position: relative
}
.owl-carousel {
width: 100%;
z-index: 1
}
.owl-carousel .owl-stage {
position: relative;
-ms-touch-action: pan-Y;
-moz-backface-visibility: hidden
}
.owl-carousel .owl-stage:after {
content: &quot;
display: block;
clear: both;
visibility: hidden;
line-height: 0;
height: 0
}
.owl-carousel .owl-stage-outer {
position: relative;
-webkit-transform: translate3d(0,0,0)
}
.owl-carousel .owl-item,.owl-carousel .owl-wrapper {
-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-ms-backface-visibility: hidden;
-webkit-transform: translate3d(0,0,0);
-moz-transform: translate3d(0,0,0);
-ms-transform: translate3d(0,0,0)
}
.owl-carousel .owl-item {
min-height: 1px;
float: left;
-webkit-backface-visibility: hidden;
-webkit-touch-callout: none
}
.owl-carousel .owl-item img {
display: block;
width: 100%
}
.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled {
display: none
}
.no-js .owl-carousel,.owl-carousel.owl-loaded {
display: block
}
.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev {
cursor: pointer;
cursor: hand;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none
}
.owl-carousel.owl-loading {
opacity: 0;
display: block
}
.owl-carousel.owl-hidden {
opacity: 0
}
.owl-carousel.owl-refresh .owl-item {
visibility: hidden
}
.owl-carousel.owl-drag .owl-item {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none
}
.owl-carousel.owl-grab {
cursor: move;
cursor: grab
}
.owl-carousel.owl-rtl {
direction: rtl
}
.owl-carousel.owl-rtl .owl-item {
float: right
}
.owl-carousel .animated {
animation-duration: 1s;
animation-fill-mode: both
}
.owl-carousel .owl-animated-in {
z-index: 0
}
.owl-carousel .owl-animated-out {
z-index: 1
}
.owl-carousel .fadeOut {
animation-name: fadeOut
}
.owl-height {
transition: height .5s ease-in-out
}
.owl-carousel .owl-item .owl-lazy {
opacity: 0;
transition: opacity .4s ease
}
.owl-carousel .owl-item img.owl-lazy {
transform-style: preserve-3d
}
.owl-carousel .owl-video-wrapper {
position: relative;
height: 100%;
background: #000
}
.owl-carousel .owl-video-play-icon {
position: absolute;
height: 80px;
width: 80px;
left: 50%;
top: 50%;
margin-left: -40px;
margin-top: -40px;
background: url(https://4.bp.blogspot.com/-9jaG9YO21Qs/W9rimdnu-mI/AAAAAAAACyQ/Tcv3-DtVm9kOlk73vTnBG6x_1a60wchuwCLcBGAs/s1600/play-icon.png) no-repeat;
cursor: pointer;
z-index: 1;
-webkit-backface-visibility: hidden;
transition: transform .1s ease
}
.owl-carousel .owl-video-play-icon:hover {
-ms-transform: scale(1.3,1.3);
transform: scale(1.3,1.3)
}
.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn {
display: none
}
.owl-carousel .owl-video-tn {
opacity: 0;
height: 100%;
background-position: center center;
background-repeat: no-repeat;
background-size: contain;
transition: opacity .4s ease
}
.owl-carousel .owl-video-frame {
position: relative;
z-index: 1;
height: 100%;
width: 100%
}
.owl-theme .owl-dots,.owl-theme .owl-nav {
text-align: center;
-webkit-tap-highlight-color: transparent
}
.owl-theme .owl-nav {
margin-top: 10px
}
.owl-theme .owl-nav [class*=owl-] {
color: #FFF;
font-size: 14px;
margin: 5px;
padding: 4px 7px;
background: #D6D6D6;
display: inline-block;
cursor: pointer;
border-radius: 3px
}
.owl-theme .owl-nav [class*=owl-]:hover {
background: #869791;
color: #FFF;
text-decoration: none
}
.owl-theme .owl-nav .disabled {
opacity: .5;
cursor: default
}
.owl-theme .owl-nav.disabled+.owl-dots {
margin-top: 10px
}
.owl-theme .owl-dots .owl-dot {
display: inline-block;
zoom:1}
.owl-theme .owl-dots .owl-dot span {
width: 10px;
height: 10px;
margin: 5px 7px;
background: #D6D6D6;
display: block;
-webkit-backface-visibility: visible;
transition: opacity .2s ease;
border-radius: 30px
}
.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:hover span {
background: #869791
}
.owl-dots {
position: absolute;
top: 255px;
right: 0;
left: 0;
margin: auto;
overflow: hidden;
text-align: center
}
.owl-dots button {
display: inline-block;
margin: 0 3px;
border-radius: 10px;
padding: 6px;
outline: none;
border: none;
background: rgba(255,255,255,.24);
box-shadow: 0 2px 2px rgb(0 0 0 / 60%),inset 0 1px 1px rgb(0 0 0 / 52%)
}
.owl-dots button.owl-dot.active {
background-color: #f39c12
}
.owl-carousel .owl-item {
height: 290px;
box-shadow: 0 20px 10px -15px rgba(0,0,0,.1);
overflow: hidden
}
.owl-prev {
left: 20px;
transform: translate(-50px,0)
}
.owl-next {
right: 20px;
transform: translate(50px,0)
}
.owl-prev,.owl-next {
color: #fff;
font-size: 36px;
height: 65px;
line-height: 65px;
padding: 0 14px;
position: absolute;
top: 100px;
visibility: hidden;
opacity: 0;
transition: all .3s
}
.owl-nav button.owl-prev,.owl-nav button.owl-next {
background: none;
border: 0
}
.owl-carousel:hover .owl-prev,.owl-carousel:hover .owl-next {
opacity: 1;
visibility: visible;
transform: translate(0,0)
}
.post-sinop {
display: block;
margin-top: 12px;
color: #ddd
}
.post-sinop strong {
text-transform: uppercase
}
.post-sinop b {
display: none
}
.post-sinop p {
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
margin: 5px 0;
font-size: 14px
}
.post-title {
display: flex;
display: -ms-flex;
display: -webkit-flex
}
h2.post-titlenya {
font-size: 1.4em;
text-transform: uppercase;
line-height: 26px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-weight: 500;
margin-top: 10px;
max-width: 85%
}
h2.post-titlenya a {
color: #fff
}
.right-title {
order: 2;
width: 100%
}
.post-meta {
margin-right: 5px;
order: 1
}
.post-tr {
display: inline-block;
height: 48px;
margin: -5px 0 0 -5px
}
.site-ret {
font-size: 48px;
color: #f3d872;
position: relative
}
.site-ret .fa-star:before {
font-family: &quot;
font-weight: 600
}
.site-ret .fa span {
font-size: 15px;
position: absolute;
left: 0;
top: 26px;
color: #333;
font-weight: 1000;
letter-spacing: -1px;
display: block;
width: 100%;
text-align: center;
font-family: 'Lexend';
}
.post-genre {
margin-top: 12px;
margin-left: -3px
}
.genre-slide {
display: inline-block;
max-width: 75%;
overflow: hidden;
text-overflow: ellipsis;
color: #ddd;
white-space: nowrap
}
.stats-poss span {
color: #ddd
}
.genre-slide a:after {
content: &quot
}
.genre-slide a[href*='/search/label/Action'],.genre-slide a[href*='/search/label/Adventure'],.genre-slide a[href*='/search/label/Comedy'],.genre-slide a[href*='/search/label/Dementia'],.genre-slide a[href*='/search/label/Demons'],.genre-slide a[href*='/search/label/Drama'],.genre-slide a[href*='/search/label/Ecchi'],.genre-slide a[href*='/search/label/Fantasi'],.genre-slide a[href*='/search/label/Game'],.genre-slide a[href*='/search/label/Harem'],.genre-slide a[href*='/search/label/Historical'],.genre-slide a[href*='/search/label/Horor'],.genre-slide a[href*='/search/label/Josei'],.genre-slide a[href*='/search/label/Magic'],.genre-slide a[href*='/search/label/Martial Arts'],.genre-slide a[href*='/search/label/Mecha'],.genre-slide a[href*='/search/label/Military'],.genre-slide a[href*='/search/label/Music'],.genre-slide a[href*='/search/label/Mysteri'],.genre-slide a[href*='/search/label/Parody'],.genre-slide a[href*='/search/label/Police'],.genre-slide a[href*='/search/label/Psychological'],.genre-slide a[href*='/search/label/Romance'],.genre-slide a[href*='/search/label/School'],.genre-slide a[href*='/search/label/Sci-Fi'],.genre-slide a[href*='/search/label/Seinen'],.genre-slide a[href*='/search/label/Shoujo'],.genre-slide a[href*='/search/label/Shounen'],.genre-slide a[href*='/search/label/Slice of Life'],.genre-slide a[href*='/search/label/Space'],.genre-slide a[href*='/search/label/Sport'],.genre-slide a[href*='/search/label/Super Power'],.genre-slide a[href*='/search/label/Supernatural'],.genre-slide a[href*='/search/label/Thriller'],.genre-slide a[href*='/search/label/Vampire'] {
display: inline-block!important
}
.genre-slide .label {
color: white;
display: none
}
@keyframes fadeOut {
0% {
opacity: 1
}
100% {
opacity: 0
}
}
@media screen and (max-width: 768px) {
.feature-item {
width:50%;
margin: 0 auto 15px
}
}
@media screen and (max-width: 640px) {
.post-descript {
padding:15px 10px;
left: 3%;
right: 3%
}
.slider-wrapp .post-inner {
padding: 0 10px
}
.slider-item h2.post-title {
font-size: 16px;
max-width: 50%
}
.feature-item {
display: inline-block;
float: none;
width: 100%;
margin: 0 auto 15px
}
.covert {
height: 130px;
width: 92px;
top: 7%;
right: 3%
}
}
@media screen and (max-width: 430px) {
.covert {
height:100px;
width: 71px
}
}
.thumb.overlay:before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 1;
background-color: rgba(0,0,0,.7);
background-image: url(https://1.bp.blogspot.com/-eQ7EqK07jKo/YLJGRM_fnfI/AAAAAAAAEvU/_D-ctbfUt3cUo5dOpBfTKOw0eE4p90evwCNcBGAsYHQ/s2-rw/pattern.png)!important
}
.thumb.overlay {
display: block;
position: absolute;
width: 100%
}
.thumb.overlay {
height: 100%;
top: 0;
left: 0;
bottom: 0
}
.site-ret span span {
font-family: Signika Negative
}
.type-poss {
font-size: 13px;
color: white;
text-transform: uppercase;
background: #e09e04;
padding: 1px 5px;
border-radius: 3px
}
.post-titlenya a {
color: white;
font-size: 21px
}
.label-slider {
text-align: center;
background: rgba(255,255,255,.3);
padding: 4px 12px;
border: none;
border-radius: 5px;
font-size: 12px;
margin-left: 5px;
font-weight: 600;
}
.label-slider:hover {
background: gray
}
.post-tag span {
font-size: 13px
}
.thumb.overlay a{
filter:blur(20px);
}
.statusdth::before {
content: "TIẾN HÀNH";
position: absolute;
top: 16px;
left: -23px;
background: #f7b500;
}
.statusht::before {
content: "HOÀN THÀNH";
position: absolute;
top: 20px;
left: -24px;
background: #15b33d;
}
.statusdrop::before {
content: "DROP";
position: absolute;
top: 18px;
left: -43px;
background: red;
width: 100%;
text-align: center;
}
.statusdth::before,.statusht::before,.statusdrop::before{
transform: rotate(-45deg);
color: white;
padding: 2px 24px;
box-shadow: 0 2px 2px rgba(0,0,0,0.5);
font-size: 9px;
font-weight: 500;
}
@media screen and (max-width: 768px) {
.statusdth::before,.statusht::before,.statusdrop::before{font-size: 6px!important;}
.statusdth::before {
top: 15px!important;
left: -23px!important;
}
.statusht::before {
top: 17px!important;
left: -23px!important;
}
.statusdrop::before {
top: 18px!important;
left: -46px!important;
}
}
@media screen and (max-width: 640px) {
.statusdrop::before {
top: 18px!important;
left: -23px!important;
}
}
@media screen and (max-width: 430px) {
.statusdrop::before {
top: 13px!important;
left: -17px!important;
}
}
.owl-dots{display:none}
.getchapter div.chapterlist a{
background: #366ad3;
color: white;
text-align: center;
padding: 11px 12px;
font-size: 13px;
border-radius: 5px;
width: 100%;
font-weight: 600;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 150px;
display: block;
}
.getchapter .infoSeriesS{margin-left: 10px}
.getchapter div a.infoSeries{
background: white;
color: black;
text-align: center;
padding: 11px 9px;
font-size: 13px;
border-radius: 5px;
width: 100%;
display: block;
font-weight: 600;
}
.chapterandinfo{display: flex;margin-top: 12px;position:fixed}
/* loading slider */
.loaderssr {
width: 48px;
height: 48px;
border: 5px solid #366ad3;
border-bottom-color: transparent;
border-radius: 50%;
display: inline-block;
box-sizing: border-box;
animation: rotation 1s linear infinite;
}
@keyframes rotation {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}
.ssrload{text-align:center;padding:118.5px 0px 118.5px 0px;background:white}
.dark-mode .ssrload{background:#222}
/*** Show Series Posts Version 1.3.5 By Vũ Trần ***/
/* Setting */
.Hot-tranvu::before{content: "HOT";background: orangered}
.New-tranvu::before{content: "NEW";background: limegreen}
.manga-tranvu::before{content: "Manga";background-color:red}
.manhwa-tranvu::before{content: "Manhwa";background-color:#f90}
.manhua-tranvu::before{content: "Manhua";background-color:#44db1a}
.Ln-tranvu::before{content: "Light novel";background-color:#8000db}
.Wn-tranvu::before{content: "Web novel";background-color:#0075cf}
.in-progress-tranvu::before{content: "TIẾN HÀNH";top: 17px;left: -24px;background: #f7b500}
.completed-tranvu::before{content: "HOÀN THÀNH";top: 19px;left: -27px;background: #15b33d}
.drop-tranvu::before{content: "DROP";top: 19px;left: -26px;background: red;width: 100px;text-align: center}
/* END */
#getlabel {display:none}
.Hot-tranvu::before,.New-tranvu::before{
color: white;
font-size: 10px;
padding: 5px;
border-radius: 100%;
position: absolute;
right: 5px;
top: 3px;
font-weight: 600;
}
.manga-tranvu::before,.manhwa-tranvu::before,.manhua-tranvu::before,.Ln-tranvu::before,.Wn-tranvu::before{
position: absolute;
bottom: 5px;
right: 5px;
color: #fff;
border-radius: 3px;
font-size: 11px;
padding: 1.5px 7px;
}
.in-progress-tranvu::before,.completed-tranvu::before,.drop-tranvu::before{
position: absolute;
transform: rotate(-45deg);
color: white;
padding: 2px 24px;
box-shadow: 0 2px 2px rgba(0,0,0,0.5);
font-size: 8.5px;
font-weight: 500;
}
#mainnnv {
display: grid;
grid-template-columns: repeat(auto-fill,minmax(151px,1fr));
gap: 13px;
padding: 13px;
}
.bookDetails h3{
margin:10px 0px 10px 0px;
overflow: hidden;
position: relative;
}
.titleSeries {
font-size:15px;
display:-webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
color: #333;
text-decoration: none;
font-weight:600;
overflow:hidden;
}
.bookCover {
overflow:hidden;
position: relative;
aspect-ratio: 3/4;
}
.bookCover img{
width:100%;
height:auto;
object-fit:cover;
border-radius:3px;
}
ul.Chapter-list{
padding-left: 0;
list-style: none;
margin: 0;
}
ul.Chapter-list li a{
display: -webkit-inline-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
background: #366ad32e;
padding: 1px 7px;
border-radius: 10px;
font-size: 12px;
font-weight:600;
color:#366ad3;
max-width:55%
}
ul.Chapter-list li a:visited{
color:gray
}
ul.Chapter-list li span{
float:right;
font-size:65%;
font-style:italic;
color:gray
}
.pagination-vu {
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
border-top: 1px solid #f1f1f1;
}
.pagination-vu ul {
display: inline-block;
list-style-type: none;
padding: 0;
margin: 0;
}
.pagination-vu li {
display: inline-block;
margin: 0 5px;
}
.pagination-vu li a {
display:-webkit-inline-box;
color: #333;
text-decoration: none;
padding: 8px 13px 8px 13px;
border: 1px solid #ccc;
border-radius: 3px;
transition: background-color 0.3s ease, transform 0.3s ease;
transform: translate3d(0, 0, 0);
margin-top:10px
}
.pagination-vu li a:hover {
background-color: #f5f5f5;
transform: translateY(-2px);
}
.pagination-vu li.active-vu span {
background-color: #366ad3;
color: #fff;
padding: 8px 13px 9px 13px;
border: 1px solid #366ad3;
border-radius: 3px;
}
.pagination-vu li.prev-vu,
.pagination-vu li.next-vu {
font-weight: bold;
}
.pagination-vu li.prev-vu a span,
.pagination-vu li.next-vu a span {
position: relative;
font-family: monospace;
}
.lzozazdziznzg{text-align:center}
.loader {
width: 48px;
height: 48px;
border: 5px solid #366ad3;
border-bottom-color: transparent;
border-radius: 50%;
display: inline-block;
box-sizing: border-box;
animation: rotation 1s linear infinite;
margin-top:17%;
margin-bottom:17%;
}
@keyframes rotation {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}
.loaders {
width: 48px;
height: 48px;
display: inline-block;
position: relative;
border: 3px solid;
border-color:#366ad3 #0000 #366ad3 #0000;
border-radius: 50%;
box-sizing: border-box;
animation: 1s rotate linear infinite;
display:flex;
margin-left:auto;
margin-right:auto;
}
.loaders:before , .loaders:after{
content: '';
top: 0;
left: 0;
position: absolute;
border: 10px solid transparent;
border-bottom-color:#366ad3;
transform: translate(-10px, 19px) rotate(-35deg);
}
.loaders:after {
border-color: #366ad3 #0000 #0000 #0000 ;
transform: translate(32px, 3px) rotate(-35deg);
}
@keyframes rotate {
100%{    transform: rotate(360deg)}
}
@media screen and (max-width: 824px){
#mainnnv {
grid-template-columns: repeat(auto-fill,minmax(141px,1fr))!important;
}
ul.Chapter-list li a {
max-width:53%
}
}
.dark-mode .titleSeries {color:white}
.dark-mode .pagination-vu li a{color:white;background:#333;border:1px solid #333}
.dark-mode .pagination-vu{border-top:1px solid #333}
/*** Show Series Posts Version 1.3.5 By Vũ Trần - END ***/
/* Multi Tab */
.m-10{margin:10px;}
#sidebar .active{background-color:#366ad3;color:white}
#popular .PopularPosts {display: none}
#popular .PopularPosts.current {display: block}
.font-tab-popular {font-size: 12px;display: grid;align-content: center;padding: 2px 0}
/* Rating */
@font-face {font-family: "Font Awesome 5 Free";font-style: normal;font-weight: 900;font-display: block;src: url(https://cdn.jsdelivr.net/gh/MSKTeam/MSKMangaZ-Code@9f9f0b899dc1cadb7784f78d41c22e445dc4e268/fa-solid-900.woff2);}.fa,.far,.fas{font-family:"Font Awesome 5 Free"}.fa,.fas{font-weight:900}
.rating{width: 100%;}.rating-prc {display: flex;justify-content: space-between}.rating-prc .rtp{overflow:hidden;display:inline-block}.rating-prc .rtp .rtb{position:relative;overflow:hidden;color:#fad72a;height:15px;line-height:1;width:85px;font-size:15px;margin:0 auto}.fw .rating-prc .rtp .rtb {font-size:13px}.rating-prc .rtp .rtb:before{content:"\f005\f005\f005\f005\f005";font-family:"Font Awesome 5 Free";position:absolute;top:0;left:0;height:15px}.rating-prc .rtp .rtb span{overflow:hidden;top:0;left:0;position:absolute;padding-top:15px}.rating-prc .rtp .rtb span:before{content:"\f005\f005\f005\f005\f005";font-family:"Font Awesome 5 Free";font-weight:900;top:0;position:absolute;left:0}.rating-prc .num{line-height:normal;font-size:13px;color:#999}.fa-star:before{content:"\f005"}
/* Next/Prev Slider */
.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa{font-family:"Font Awesome 5 Free";font-weight:900}.fa.fa-angle-left:before,.fa.fa-angle-right:before{-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}
/* loaderchapter */
.loaderchapter {
width: 48px;
height: 48px;
border: 5px solid #FFF;
border-bottom-color: transparent;
border-radius: 50%;
display: inline-block;
box-sizing: border-box;
animation: rotation 1s linear infinite;
}
@keyframes rotation {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}
/* Canvas */
.canvas-wrapper {margin: 0 auto}
.canvas-wrapper canvas {width: 100%;pointer-events: none!important}
canvas{image-rendering: optimizeQuality;image-rendering: -moz-crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: optimize-contrast;-ms-interpolation-mode: nearest-neighbor}
/* fixed */
.nPLFix.fixed {
transition: transform 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
position: fixed;
top: 0;
left: 0;
width: 50%;
border-radius: 100px;
padding-left: 2px;
padding-right: 2px;
margin-top: 5px;
background-color: #16151d;
}
.nPLFix.fixed .nPL-show .inner_nPL a{width: 110px}
.nPLFix.fixed .nPL_select{max-width: 150px!important}
.nPLFix.fixed #nPL{grid-template-columns: 1fr 0fr!important}
.nPLFix.fixed .nPL-show{margin-bottom:0px!important}
.nPLFix.fixed .inner_nPL{margin-top:0px!important}
@media screen and (min-width:900px){
.nPLFix.fixed{transform: translateX(50%)}
}
@media screen and (max-width:900px){
.nPLFix.fixed{width: 95%!important;transform: translateX(2%)}
.nPLFix.fixed .nPL-show .inner_nPL a.prevPLPro span:last-child,.nPLFix.fixed .nPL-show .inner_nPL a.nextnPLPro span:first-child{display:none}
.nPLFix.fixed .nPL-show .inner_nPL a{width: 100%}
.nPLFix.fixed .nPL-show .inner_nPL a span{font-size: 20px;padding: 10px}
}
/* Novel */
.novel-label {
border: 1px solid #dadbdd;
margin-bottom: 20px;
border-radius: 5px;
}
.name-novel{
background-color: #f4f5f6;
padding: 10px;
font-size: 13px;
color: black;
border-bottom: 1px solid #dadbdd;
padding-left: 15px;
}
.option-novel{
padding: 10px;
display: flex;
gap: 10px;
}
.option-novel img{
height: 170px!important;
width: 115px!important;
border-radius:3px;
}
.chapter-novel{
width:100%;
max-height: 230px;
overflow: auto;
overflow-x: hidden;
}
.chapter-novel a{
background: #f4f5f6;
padding: 4px 7px;
border-radius: 5px;
margin-right: 8px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 5px;
border: 1px solid #dadbdd;
}
.chapter-novel a span:first-child{
padding: 5px 7px;
font-size: 12px;
}
.chapter-novel a span:last-child{
font-style: italic;
padding: 6px 15px;
font-size:11px;
color: gray;
}
@media screen and (max-width:888px){
.option-novel{display:block!important}
.option-novel img{margin-bottom:10px;margin-left: auto;margin-right: auto;display:grid}
.name-novel{text-align:center;padding-left: 45px;padding-right: 45px}
}
.option-novel .separator{display:block!important}
.option-novel .separator a{padding:0!important}
.chapter-novel a:visited span:first-child {color: gray}
.dark-mode .chapter-novel a{background-color: #333;border: 1px solid #222;}
.dark-mode .name-novel{background-color: #333;border-bottom: 1px solid #333;color:white}
.dark-mode .novel-label{border: 1px solid #333}
.chapter-novel a:hover span:first-child{color:#366ad3}
/* <> Tuỳ chỉnh <> */
.inner_nPL a span{font-size:13px}
.custom-search-vutran{border-bottom-left-radius:15px!important;border-top-left-radius:15px!important;width:200px}
.custom-search-vutran-2{border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}
#Query-input input::placeholder{color:white;font-weight:500;font-family:'Lexend'}
.cw-ipt{color:white!important}
#LinkList1{margin-bottom:20px}
.md-auto.aspect-ratio23 img{height:100%}
.aspect-ratio23{aspect-ratio:2/3.01}
.md-auto.aspect-ratio23{background:white;border-radius:3px;overflow: hidden;}
.dark-mode .md-auto.aspect-ratio23{background:#222}
#myhero::before{content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 1;
background-color: rgba(0,0,0,.7);
background-image: url(https://1.bp.blogspot.com/-eQ7EqK07jKo/YLJGRM_fnfI/AAAAAAAAEvU/_D-ctbfUt3cUo5dOpBfTKOw0eE4p90evwCNcBGAsYHQ/s2-rw/pattern.png)!important;
}
.hero-background{filter: blur(20px)}
.grid.gtc-235fr.max-w.mra.mla.mtn170.relative.gg-15{z-index:2}
.mtn170{margin-top:-170px}
img[data-src]:not(.lazyloaded){opacity:0;transform:scale(0.9)}img[src]{opacity:1;transition:opacity .3s,transform .3s}img[src]:hover{transform:scale(1.1)}
@media only screen and (max-width: 1024px){.mobilecss{margin-left:auto;margin-right:auto;width:97%!important}.md-auto.aspect-ratio23{width:120px}}
#popular article:last-child{border-bottom:none}
.widthfull{width:100%}
.check-box img{max-width:93%;height:auto;margin:0 auto}
.check-box a{padding:0!important}
@media screen and (max-width:1024px){.check-box img{max-width:100%}}
@media screen and (min-width:1024px){.m-d-none-bookmark svg{display:none}.r30-mobile{border-radius:30px}}
.textcenter{text-align:center}
.menu-item.svg14.flex.aic.m-d-none-bookmark svg{color:white}