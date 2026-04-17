/* =====================================================================
   DATA.JS — EDIT THIS FILE TO MANAGE DRIVERS, SPONSORS, LEAGUES & GALLERY
   =====================================================================
   
   HOW TO EDIT:
   • Each section below is a simple JavaScript array of objects.
   • To ADD an item: copy an existing object, paste it, and change the values.
   • To REMOVE an item: delete the entire { ... } block (including the comma).
   • Image paths are relative to the site root (e.g., "images/drivers/alex.jpg").
   • If you don't have an image yet, leave the path as "" and a placeholder will show.
   
   ===================================================================== */

const SITE_DATA = {

  /* ─────────────────────────────────────────────
     DRIVERS
     Fields: name, number, role, nationality, series, image, flag
     ───────────────────────────────────────────── */
  drivers: [
    {
      name: "Diogo Valente",
      number: "131",
      role: "Team Captain · GT3 Lead",
      nationality: "Portuguese",
      series: "Gran turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251482805983647/4ea40e61f16a4768e737e10a3d69f351_body.png",       // Replace with real photo
      flag: "🇵🇹"
    },
    {
      name: "Lucas Fernandes",
      number: "22",
      role: "Endurance Specialist",
      nationality: "Brazil",
      series: "ACC · Le Mans Virtual",
      image: "images/drivers/lucas.jpg",
      flag: "🇧🇷"
    },
    {
      name: "Tom Williams",
      number: "88",
      role: "Sprint Driver",
      nationality: "United Kingdom",
      series: "iRacing · F1 Esports",
      image: "images/drivers/tom.jpg",
      flag: "🇬🇧"
    },
    {
      name: "Yuki Tanaka",
      number: "14",
      role: "GT4 / Prototype",
      nationality: "Japan",
      series: "ACC · rFactor2",
      image: "images/drivers/yuki.jpg",
      flag: "🇯🇵"
    },
    {
      name: "Marco Rossi",
      number: "33",
      role: "GT3 Driver",
      nationality: "Italy",
      series: "ACC · Assetto Corsa",
      image: "images/drivers/marco.jpg",
      flag: "🇮🇹"
    },
    {
      name: "Diogo Silva",
      number: "01",
      role: "Team Founder · Driver",
      nationality: "Portugal",
      series: "ACC · iRacing · Le Mans Virtual",
      image: "images/drivers/diogo.jpg",
      flag: "🇵🇹"
    }
  ],

  /* ─────────────────────────────────────────────
     LEAGUES
     Fields: name, platform, description, logo, url
     ───────────────────────────────────────────── */
  leagues: [
    {
      name: "SimGrid",
      platform: "ACC",
      description: "Competing in SimGrid's top-tier ACC championships including endurance and sprint series.",
      logo: "images/leagues/simgrid.png",
      url: "https://www.thesimgrid.com"
    },
    {
      name: "Low Fuel Motorsport",
      platform: "ACC",
      description: "Daily ranked racing and seasonal championships in the LFM ecosystem.",
      logo: "images/leagues/lfm.png",
      url: "https://lowfuelmotorsport.com"
    },
    {
      name: "iRacing Official",
      platform: "iRacing",
      description: "Competing in iRacing's official multi-class and GT series at the highest splits.",
      logo: "images/leagues/iracing.png",
      url: "https://www.iracing.com"
    },
    {
      name: "Pitskill.io",
      platform: "ACC",
      description: "Ranked matchmaking and league events through the Pitskill platform.",
      logo: "images/leagues/pitskill.png",
      url: "https://pitskill.io"
    }
  ],

  /* ─────────────────────────────────────────────
     GALLERY
     Fields: image, caption, category (optional)
     ───────────────────────────────────────────── */
  gallery: [
    { image: "images/gallery/race01.jpg", caption: "Spa 24 Hours — Into Eau Rouge", category: "Endurance" },
    { image: "images/gallery/race02.jpg", caption: "Night Battle at Monza", category: "Sprint" },
    { image: "images/gallery/race03.jpg", caption: "Team Lineup — Season 2025", category: "Team" },
    { image: "images/gallery/race04.jpg", caption: "Podium Finish — Nürburgring", category: "Endurance" },
    { image: "images/gallery/race05.jpg", caption: "Pit Stop Strategy", category: "Endurance" },
    { image: "images/gallery/race06.jpg", caption: "Sunset at Bathurst", category: "Sprint" },
    { image: "images/gallery/race07.jpg", caption: "Close Racing — Brands Hatch", category: "Sprint" },
    { image: "images/gallery/race08.jpg", caption: "Season Celebration", category: "Team" }
  ],

  /* ─────────────────────────────────────────────
     SPONSORS
     Fields: name, logo, url, tier ("gold" | "silver" | "bronze")
     ───────────────────────────────────────────── */
  sponsors: [
    {
      name: "SimTech Pro",
      logo: "images/sponsors/simtech.png",
      url: "https://example.com",
      tier: "gold"
    },
    {
      name: "RaceWear Co.",
      logo: "images/sponsors/racewear.png",
      url: "https://example.com",
      tier: "gold"
    },
    {
      name: "VelocityFX",
      logo: "images/sponsors/velocityfx.png",
      url: "https://example.com",
      tier: "silver"
    },
    {
      name: "GridLine Setups",
      logo: "images/sponsors/gridline.png",
      url: "https://example.com",
      tier: "silver"
    },
    {
      name: "Apex Audio",
      logo: "images/sponsors/apexaudio.png",
      url: "https://example.com",
      tier: "bronze"
    },
    {
      name: "DriftKing Energy",
      logo: "images/sponsors/driftking.png",
      url: "https://example.com",
      tier: "bronze"
    }
  ]

};
