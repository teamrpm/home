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
    id: "porsche-911-gt3-r",
    name: "Porsche 911 GT3 R",
    manufacturer: "Porsche",
    group: "Gr.3",
    competition: "EPIC",
    thumbnail: "images/garage/thumbnails/porsche-911-gt3-r.jpg",
    fullsize: "images/garage/fullsize/porsche-911-gt3-r.jpg"
  },
  {
    id: "bmw-m4-gt3",
    name: "BMW M4 GT3",
    manufacturer: "BMW",
    group: "Gr.3",
    competition: "CPGT",
    thumbnail: "images/garage/thumbnails/bmw-m4-gt3.jpg",
    fullsize: "images/garage/fullsize/bmw-m4-gt3.jpg"
  },
  {
    id: "ferrari-296-gt3",
    name: "Ferrari 296 GT3",
    manufacturer: "Ferrari",
    group: "Gr.3",
    competition: "EPIC",
    thumbnail: "images/garage/thumbnails/ferrari-296-gt3.jpg",
    fullsize: "images/garage/fullsize/ferrari-296-gt3.jpg"
  },
  {
    id: "toyota-gr010",
    name: "Toyota GR010 Hybrid",
    manufacturer: "Toyota",
    group: "Gr.1",
    competition: "Toyota WWW",
    thumbnail: "images/garage/thumbnails/toyota-gr010.jpg",
    fullsize: "images/garage/fullsize/toyota-gr010.jpg"
  },
  {
    id: "porsche-963",
    name: "Porsche 963 LMDh",
    manufacturer: "Porsche",
    group: "Gr.1",
    competition: "EPIC",
    thumbnail: "images/garage/thumbnails/porsche-963.jpg",
    fullsize: "images/garage/fullsize/porsche-963.jpg"
  },
  {
    id: "lamborghini-huracan-gt3",
    name: "Lamborghini Huracán GT3 EVO2",
    manufacturer: "Lamborghini",
    group: "Gr.3",
    competition: "CPGT",
    thumbnail: "images/garage/thumbnails/lamborghini-huracan-gt3.jpg",
    fullsize: "images/garage/fullsize/lamborghini-huracan-gt3.jpg"
  },
  {
    id: "mclaren-720s-gt3",
    name: "McLaren 720S GT3 EVO",
    manufacturer: "McLaren",
    group: "Gr.3",
    competition: "BPF",
    thumbnail: "images/garage/thumbnails/mclaren-720s-gt3.jpg",
    fullsize: "images/garage/fullsize/mclaren-720s-gt3.jpg"
  },
  {
    id: "aston-martin-vantage-gt3",
    name: "Aston Martin Vantage GT3",
    manufacturer: "Aston Martin",
    group: "Gr.3",
    competition: "EPIC",
    thumbnail: "images/garage/thumbnails/aston-martin-vantage-gt3.jpg",
    fullsize: "images/garage/fullsize/aston-martin-vantage-gt3.jpg"
  },
  {
    id: "mercedes-amg-gt3",
    name: "Mercedes-AMG GT3 EVO",
    manufacturer: "Mercedes",
    group: "Gr.3",
    competition: "CPGT",
    thumbnail: "images/garage/thumbnails/mercedes-amg-gt3.jpg",
    fullsize: "images/garage/fullsize/mercedes-amg-gt3.jpg"
  },
  {
    id: "audi-r8-gt4",
    name: "Audi R8 LMS GT4",
    manufacturer: "Audi",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "images/garage/thumbnails/audi-r8-gt4.jpg",
    fullsize: "images/garage/fullsize/audi-r8-gt4.jpg"
  },
  {
    id: "toyota-gr86",
    name: "Toyota GR86",
    manufacturer: "Toyota",
    group: "Gr.4",
    competition: "Toyota WWW",
    thumbnail: "images/garage/thumbnails/toyota-gr86.jpg",
    fullsize: "images/garage/fullsize/toyota-gr86.jpg"
  },
  {
    id: "lancia-037",
    name: "Lancia 037 Rally",
    manufacturer: "Lancia",
    group: "Gr.B",
    competition: "Other",
    thumbnail: "images/garage/thumbnails/lancia-037.jpg",
    fullsize: "images/garage/fullsize/lancia-037.jpg"
  },
  {
    id: "audi-sport-quattro",
    name: "Audi Sport Quattro S1",
    manufacturer: "Audi",
    group: "Gr.B",
    competition: "Other",
    thumbnail: "images/garage/thumbnails/audi-sport-quattro.jpg",
    fullsize: "images/garage/fullsize/audi-sport-quattro.jpg"
  },
  {
    id: "nissan-gt-r-nismo",
    name: "Nissan GT-R NISMO",
    manufacturer: "Nissan",
    group: "Road Car",
    competition: "Other",
    thumbnail: "images/garage/thumbnails/nissan-gt-r-nismo.jpg",
    fullsize: "images/garage/fullsize/nissan-gt-r-nismo.jpg"
  },
  {
    id: "porsche-911-turbo-s",
    name: "Porsche 911 Turbo S",
    manufacturer: "Porsche",
    group: "Road Car",
    competition: "Other",
    thumbnail: "images/garage/thumbnails/porsche-911-turbo-s.jpg",
    fullsize: "images/garage/fullsize/porsche-911-turbo-s.jpg"
  },
  {
    id: "ferrari-488-gt3",
    name: "Ferrari 488 GT3 EVO",
    manufacturer: "Ferrari",
    group: "Gr.3",
    competition: "BPF",
    thumbnail: "images/garage/thumbnails/ferrari-488-gt3.jpg",
    fullsize: "images/garage/fullsize/ferrari-488-gt3.jpg"
  },
  {
    id: "toyota-supra-a90",
    name: "Toyota GR Supra",
    manufacturer: "Toyota",
    group: "Gr.2",
    competition: "Toyota WWW",
    thumbnail: "images/garage/thumbnails/toyota-supra-a90.jpg",
    fullsize: "images/garage/fullsize/toyota-supra-a90.jpg"
  },
  {
    id: "cadillac-v-series-r",
    name: "Cadillac V-Series.R LMDh",
    manufacturer: "Cadillac",
    group: "Gr.1",
    competition: "EPIC",
    thumbnail: "images/garage/thumbnails/cadillac-v-series-r.jpg",
    fullsize: "images/garage/fullsize/cadillac-v-series-r.jpg"
  },
  {
    id: "bmw-m2-cs",
    name: "BMW M2 CS Racing",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "BPF",
    thumbnail: "images/garage/thumbnails/bmw-m2-cs.jpg",
    fullsize: "images/garage/fullsize/bmw-m2-cs.jpg"
  },
  {
    id: "ford-gt-lm",
    name: "Ford GT LM GTE",
    manufacturer: "Ford",
    group: "Gr.2",
    competition: "Other",
    thumbnail: "images/garage/thumbnails/ford-gt-lm.jpg",
    fullsize: "images/garage/fullsize/ford-gt-lm.jpg"
  }
];
