/* =====================================================================
   GARAGE-DATA.JS — EDIT THIS FILE TO MANAGE YOUR GARAGE CARS
   =====================================================================
   
   HOW TO EDIT:
   • Each car is one object in the GARAGE_DATA array below.
   • To ADD a car: copy any existing { ... } block, paste it, change values.
   • To REMOVE a car: delete the entire { ... } block (including the comma).
   
   FIELDS:
   • id          — unique identifier (use lowercase, no spaces, e.g., "porsche-911-gt3")
   • name        — display name shown under the thumbnail
   • manufacturer— car manufacturer (used in the Manufacturer text filter)
   • group       — one of: "Gr.1", "Gr.2", "Gr.3", "Gr.4", "Gr.B", "Road Car"
   • competition — one of: "EPIC", "CPGT", "BPF", "Toyota WWW", "Other"
   • thumbnail   — path to 250×275px thumbnail in images/garage/thumbnails/
   • fullsize    — path to 1280×720px (16:9) image in images/garage/fullsize/
   
   IMAGE FOLDERS:
   • Thumbnails go in: images/garage/thumbnails/  (≈250×275 px)
   • Full-size go in:  images/garage/fullsize/    (1280×720 px, 16:9)
   
   ===================================================================== */

const GARAGE_DATA = [
  // ─── EXAMPLE CARS (replace with your real data) ───
  {
    id: "alfa-romeo-155-gt4",
    name: "155 2.5 V6 TI '93",
    manufacturer: "Alfa Romeo",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422614354456186/0dd94374e8440ead3d53c9d7049c55e9_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422614354456186/0dd94374e8440ead3d53c9d7049c55e9_thumb_l_x2.jpg"
  },
  {
    id: "bmw-m4-gt3",
    name: "BMW M4 GT3",
    manufacturer: "Nissan",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422400697517041/727e61bc078aacc391d1dfa36a85e1b4_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422400697517041/727e61bc078aacc391d1dfa36a85e1b4_thumb_l_x2.jpg"
  },
  {
    id: "ferrari-296-gt3",
    name: "Ferrari 296 GT3",
    manufacturer: "Ferrari",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421938913727825/4b6f032bf6d1d6f5592d9fd71946afbc_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421938913727825/4b6f032bf6d1d6f5592d9fd71946afbc_thumb_l_x2.jpg"
  },
  {
    id: "toyota-gr010",
    name: "Toyota GR010 Hybrid",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422323588234221/195c62fa83d5308760f51425e32d6620_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422323588234221/195c62fa83d5308760f51425e32d6620_thumb_l_x2.jpg"
  },
  {
    id: "porsche-963",
    name: "Porsche 963 LMDh",
    manufacturer: "Aston Martin",
    group: "Gr.3",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422823998160903/e5fd42473ad2302142504121c371d4fd_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422823998160903/e5fd42473ad2302142504121c371d4fd_thumb_l_x2.jpg"
  },
  {
    id: "lamborghini-huracan-gt3",
    name: "Lamborghini Huracán GT3 EVO2",
    manufacturer: "Jaguar",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/e91d59029ae0fe1c7330eb00eaaa35e4_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/7f06b0efa621b129be8d7d13a6df3b20_thumb_l_x2.jpg"
  },
  {
    id: "mclaren-720s-gt3",
    name: "McLaren 720S GT3 EVO",
    manufacturer: "McLaren",
    group: "Gr.3",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/7f06b0efa621b129be8d7d13a6df3b20_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/7f06b0efa621b129be8d7d13a6df3b20_thumb_l_x2.jpg"
  },
  {
    id: "aston-martin-vantage-gt3",
    name: "Aston Martin Vantage GT3",
    manufacturer: "Aston Martin",
    group: "Gr.3",
    competition: "EPIC",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422102282455399/5b04e0ab70b47c010e2974eb5eff6f2c_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422102282455399/5b04e0ab70b47c010e2974eb5eff6f2c_thumb_l_x2.jpg"
  },
  {
    id: "mercedes-amg-gt3",
    name: "Mercedes-AMG GT3 EVO",
    manufacturer: "Mercedes",
    group: "Gr.3",
    competition: "CPGT",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421844789858475/ba0429f1d661ee6d539458fff8c19f5d_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421844789858475/ba0429f1d661ee6d539458fff8c19f5d_thumb_l_x2.jpg"
  },
  {
    id: "audi-r8-gt4",
    name: "Audi R8 LMS GT4",
    manufacturer: "Audi",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422227668869179/de34bc5989971f284c4533985941b9cf_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422227668869179/de34bc5989971f284c4533985941b9cf_thumb_l_x2.jpg"
  },
  {
    id: "toyota-gr86",
    name: "Toyota GR86",
    manufacturer: "Toyota",
    group: "Gr.4",
    competition: "Toyota WWW",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422089991814679/ff602b01c4e00005d2da16c70f8bf392_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422089991814679/ff602b01c4e00005d2da16c70f8bf392_thumb_l_x2.jpg"
  },
  {
    id: "lancia-037",
    name: "Lancia 037 Rally",
    manufacturer: "Lancia",
    group: "Gr.B",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422697344311297/55402c6d764477705920228a0d9e1b41_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422697344311297/55402c6d764477705920228a0d9e1b41_thumb_l_x2.jpg"
  },
  {
    id: "audi-sport-quattro",
    name: "Audi Sport Quattro S1",
    manufacturer: "Audi",
    group: "Gr.B",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422186378742202/70e3da162411e7e7d217ec7a4927928a_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422186378742202/70e3da162411e7e7d217ec7a4927928a_thumb_l_x2.jpg"
  },
  {
    id: "nissan-gt-r-nismo",
    name: "Nissan GT-R NISMO",
    manufacturer: "Nissan",
    group: "Road Car",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421929529981999/4fbcfac45268a29a9bfa1221cbe8c616_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421929529981999/4fbcfac45268a29a9bfa1221cbe8c616_thumb_l_x2.jpg"
  },
  {
    id: "porsche-911-turbo-s",
    name: "Porsche 911 Turbo S",
    manufacturer: "Porsche",
    group: "Road Car",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422576021804149/53a224c9a3cd2ddf898934b3e50e071d_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422576021804149/53a224c9a3cd2ddf898934b3e50e071d_thumb_l_x2.jpg"
  },
  {
    id: "ferrari-488-gt3",
    name: "Ferrari 488 GT3 EVO",
    manufacturer: "Ferrari",
    group: "Gr.3",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422275751240970/4b72aee2de674ad39446d78a37258c1b_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422275751240970/4b72aee2de674ad39446d78a37258c1b_thumb_l_x2.jpg"
  },
  {
    id: "toyota-supra-a90",
    name: "Toyota GR Supra",
    manufacturer: "Toyota",
    group: "Gr.2",
    competition: "Toyota WWW",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422607608256898/c5d807bf90a3745cc3ec31cbea1feadd_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422607608256898/c5d807bf90a3745cc3ec31cbea1feadd_thumb_l_x2.jpg"
  },
  {
    id: "cadillac-v-series-r",
    name: "Cadillac V-Series.R LMDh",
    manufacturer: "Cadillac",
    group: "Gr.1",
    competition: "EPIC",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422501554994651/20668a8878bb997a541ca133680f2d81_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422501554994651/20668a8878bb997a541ca133680f2d81_thumb_l_x2.jpg"
  },
  {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421840596611338/3c077df615a612575890ecaaa4610f9a_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421840596611338/3c077df615a612575890ecaaa4610f9a_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422417033003480/c6830b1552cd2aa7a774b9ea02de846e_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422417033003480/c6830b1552cd2aa7a774b9ea02de846e_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422283113503956/f541bb0cce4a0017828e406a597cde31_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422283113503956/f541bb0cce4a0017828e406a597cde31_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421804457039704/5e14c96e39c65fbda4cd3ed28f8d18b3_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421804457039704/5e14c96e39c65fbda4cd3ed28f8d18b3_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421850171504453/27eb23edcb4548101a6f00efb5419910_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421850171504453/27eb23edcb4548101a6f00efb5419910_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422399947356103/6a4a5dc3acd172c7f9a1164664c8f9a2_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422399947356103/6a4a5dc3acd172c7f9a1164664c8f9a2_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422678986407419/918435a151780ac2e4ece2969508d56f_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422678986407419/918435a151780ac2e4ece2969508d56f_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422329715948407/36a5c98a30a7e9deae1d907341b6a067_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422329715948407/36a5c98a30a7e9deae1d907341b6a067_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422369605418289/27dd2443faba28ba7e8c99562b86d5ee_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422369605418289/27dd2443faba28ba7e8c99562b86d5ee_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422831866783893/c6dba061b9135f8aee3021d8dd55426e_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422831866783893/c6dba061b9135f8aee3021d8dd55426e_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422643027256527/14cc94ff500f8ca161efb7be4754e70b_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422643027256527/14cc94ff500f8ca161efb7be4754e70b_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422454831902153/63b50a97d776c8010b5331d74b34c0a0_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422454831902153/63b50a97d776c8010b5331d74b34c0a0_thumb_l_x2.jpg"
  },
   {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422366411657785/cfedbbfc65f42db142b64261af01bb0b_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422366411657785/cfedbbfc65f42db142b64261af01bb0b_thumb_l_x2.jpg"
  },
  {
    id: "ford-gt-lm",
    name: "Ford GT LM GTE",
    manufacturer: "Ford",
    group: "Gr.2",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421785535347419/5cce639f1422f68e324f5ecbb41d99d1_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421785535347419/5cce639f1422f68e324f5ecbb41d99d1_thumb_l_x2.jpg"
  }
];
