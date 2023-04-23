/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import { tw } from 'twind';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

const articles = [
  {
    key: `1`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/f5eb4771-8854-4321-bbf8-676da41c6ed8_pqkqsy.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/f5eb4771-8854-4321-bbf8-676da41c6ed8_pqkqsy.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `2`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/c359486b-f812-4abc-9fd0-73a0647ad68b_tmfccq.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/c359486b-f812-4abc-9fd0-73a0647ad68b_tmfccq.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `3`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/ed18ef8e-00b8-4431-9c01-a4854f8823a3_h3nwqz.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/ed18ef8e-00b8-4431-9c01-a4854f8823a3_h3nwqz.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `4`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/c2a93236-4ac5-4e33-a218-736889ce50b1_kepqxo.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/c2a93236-4ac5-4e33-a218-736889ce50b1_kepqxo.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `5`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/d6e41076-674a-4a87-9eb3-e2a86127c8af_rmpxpz.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/d6e41076-674a-4a87-9eb3-e2a86127c8af_rmpxpz.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `6`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/920273f7-dac9-4327-ac2f-5f479de39c9d_xeqxqb.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/920273f7-dac9-4327-ac2f-5f479de39c9d_xeqxqb.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `7`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/b8a4a43b-5476-4245-a4c9-8272d3f3482c_xsucj9.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/b8a4a43b-5476-4245-a4c9-8272d3f3482c_xsucj9.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `8`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/3976e336-6fb9-450e-bec2-ee18dbe026f9_alt2sw.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/3976e336-6fb9-450e-bec2-ee18dbe026f9_alt2sw.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `9`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/76df96a5-8606-4864-b933-bbbea325f057_o2xb1j.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/76df96a5-8606-4864-b933-bbbea325f057_o2xb1j.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `10`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/95ae975a-f685-430a-8c72-8ca6510d4b54_aiaivx.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/95ae975a-f685-430a-8c72-8ca6510d4b54_aiaivx.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `9`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/910d9e2e-393c-485e-8b50-31ac0b6554f6_jwb38o.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/910d9e2e-393c-485e-8b50-31ac0b6554f6_jwb38o.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `11`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5381982678229822629_gcoqza.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5381982678229822629_gcoqza.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `12`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435056_qbbytk.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435056_qbbytk.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `13`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435051_v0ippb.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435051_v0ippb.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `14`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5381982678229822628_pfvbjs.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5381982678229822628_pfvbjs.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `15`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435054_nrr9ey.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435054_nrr9ey.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `16`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435055_xicvkp.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435055_xicvkp.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `17`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5384564516215435057_difnyk.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435057_difnyk.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `18`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413249_oyhjvx.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413249_oyhjvx.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `19`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413250_ht4lae.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413250_ht4lae.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `110`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435052_yhoqa8.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435052_yhoqa8.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `111`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435053_ea7yzw.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435053_ea7yzw.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `112`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413251_xza40l.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413251_xza40l.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `113`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413230_nh9qio.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413230_nh9qio.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `114`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413244_pah4ci.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413244_pah4ci.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `115`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413242_nt56sm.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413242_nt56sm.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `853`,
    height: `1280`,
  },
  {
    key: `116`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413247_sodw6t.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413247_sodw6t.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `117`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413248_koccxu.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413248_koccxu.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `118`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413243_hgdgjm.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413243_hgdgjm.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `119`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413246_d7sbpc.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413246_d7sbpc.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `120`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413238_tb5udj.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413238_tb5udj.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `121`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413241_thdqbs.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413241_thdqbs.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `853`,
    height: `1280`,
  },
  {
    key: `122`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413239_mztzdj.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413239_mztzdj.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `123`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413237_ng69mo.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413237_ng69mo.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `124`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413236_mblx9g.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413236_mblx9g.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `125`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413231_njospi.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413231_njospi.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `126`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413235_jo0w7s.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413235_jo0w7s.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `127`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413227_xruwpt.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413227_xruwpt.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `128`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413226_x7hva7.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413226_x7hva7.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `129`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413234_mkvq9s.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413234_mkvq9s.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `130`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413229_f79vi8.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413229_f79vi8.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `131`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413228_wjrjsd.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413228_wjrjsd.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `132`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413225_fje3el.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413225_fje3el.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `133`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413223_pqrtij.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413223_pqrtij.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `134`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413224_rgqrzw.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413224_rgqrzw.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `135`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413222_qjw4dk.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413222_qjw4dk.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `136`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413218_ptycng.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413218_ptycng.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `137`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413221_qrjt1z.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413221_qrjt1z.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `138`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413217_cexay2.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413217_cexay2.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `139`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413220_jjdlhx.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413220_jjdlhx.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `140`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413219_sk36se.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413219_sk36se.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `141`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5382011201107635554_avmgvm.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5382011201107635554_avmgvm.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `662`,
  },
  {
    key: `142`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413212_ldubww.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413212_ldubww.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `143`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413214_hbvfdn.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413214_hbvfdn.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `144`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413216_mxfr63.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413216_mxfr63.jpg`,
    alt: `Отделка квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `145`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413215_cjzm2t.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413215_cjzm2t.jpg`,
    alt: `Ремонт под ключ в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `146`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413213_i6xkew.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413213_i6xkew.jpg`,
    alt: `Ремонт квартиры в Краснодаре`,
    width: `1280`,
    height: `720`,
  },
];

const GalleryProjets = () => (
  <section className={tw(`lg:py-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Наши проекты</p>
        <h1 className={tw(`mt-2 pb-4 text-4xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Фото ремонта квартир в Краснодаре</h1>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full flex flex-wrap justify-around`)}>
          <Gallery>
            {articles.map((article) => (
              <div
                key={article.key}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-5 lg:mb-10
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <Item original={article.imagebig} thumbnail={article.image} width={article.width} height={article.height}>
                  {({ ref, open }) => <img ref={ref as React.RefObject<HTMLImageElement>} alt={article.alt} onClick={open} src={article.image} className={tw(`h-full w-full object-cover overflow-hidden rounded`)} />}
                </Item>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryProjets;
