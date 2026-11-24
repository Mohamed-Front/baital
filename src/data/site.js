const base = 'https://static.wixstatic.com/media/'
// Hotlinked from the original site. Download them into src/assets for production.
const w = (id, s = 1000) => `${base}${id}/v1/fit/w_${s},h_${s},q_85/${id}`

export const company = {
  name: 'Bait Al Salam',
  phone: '+971 55 128 5659',
  landline: '+971 6 527 5006',
  email: 'enquiry@baitalsalam.com',
  address: 'Industrial Area 15, Sharjah',
  whatsapp: '971551285659',
}
export const wa = (text = '') => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`

export const img = {
  logo: `${base}e42fb4_6f0c25044d534b6b95bfb0833ddc4537~mv2.png`,
  hero: w('ea26fd_e142fd7bcd8c46219312b22e8a91bb3c~mv2_d_4000_2447_s_4_2.jpeg', 1600),
  side: w('ea26fd_724a836736c64fc38c4fd21fa32ba9a9~mv2_d_4997_4480_s_4_2.jpg'),
  about: w('ea26fd_0e8eb61209a542fda3b36451a15530fc~mv2_d_6720_4480_s_4_2.jpg'),
  p1: w('ea26fd_7ac0210547a349bc990a4b1945ef51d8~mv2_d_4480_5532_s_4_2.jpg'),
  p2: w('ea26fd_1497c97ffe6a4e9fbd8d0516ae129818~mv2_d_6701_4480_s_4_2.jpg'),
  p3: w('ea26fd_1d9f582634f04f7e88081129e98d9e6a~mv2_d_5159_4480_s_4_2.jpg'),
  p4: w('ea26fd_6173fa4ccf7f4b65a32b446808474886~mv2_d_4033_4480_s_4_2.jpg'),
  p5: w('ea26fd_c5e8d35c458f4302a3bb1046ce510670~mv2_d_5100_3387_s_4_2.jpg'),
  g1: w('e42fb4_0561428a65ca41cba58b9ea7c04d0885~mv2.jpeg'),
  g2: w('e42fb4_c45c4cdbcd844108ac9c8eb8f1780e36~mv2.jpeg'),
  g3: w('e42fb4_e533a10c948e46af800521561aabe45a~mv2.jpeg'),
}

export const products = [
  { name: 'Decorative Laminated Sheets', img: img.p1 },
  { name: 'PVC Edge Banding', img: img.p2 },
  { name: 'PVC Vinyl Flooring', img: img.p3 },
  { name: 'Tiles and Skirting', img: img.p4 },
  { name: 'MDF & Plywood', img: img.p5 },
  { name: 'Acrylic Solid Surface', img: img.side },
]
export const gallery = [img.p1, img.g1, img.p2, img.p4, img.g2, img.p3, img.g3, img.p5, img.about, img.side]

export const tagline = 'Top-quality laminated sheets at unbeatable prices. Premium materials, exceptional service, and reliable delivery. Located in Sharjah & Dubai and distributed throughout the UAE.'
export const aboutText = 'We are committed to providing our customers with the highest quality laminated sheets at competitive prices. We pride ourselves on our exceptional customer service and our ability to deliver products on time and on budget.'
export const why = [
  { t: 'Quality Products', d: 'The highest quality laminated sheets, made from premium materials.' },
  { t: 'Competitive Pricing', d: 'Top-quality sheets at prices that stay competitive.' },
  { t: 'Reliable Service', d: 'Exceptional customer service, delivered on time and on budget.' },
]
