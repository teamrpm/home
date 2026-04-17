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
      role: "Team Captain",
      nationality: "Portuguese",
      series: "Gran turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251482805983647/4ea40e61f16a4768e737e10a3d69f351_body.png",       // Replace with real photo
      flag: "🇵🇹"
    },
    {
      name: "Pedro Ferreira",
      number: "95",
      role: "Endurance Specialist",
      nationality: "Portugal",
      series: "Gran turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252360164819932/3a03aaec6c2e6f065d1353ae7e741088_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Miguel Rodrigues",
      number: "200",
      role: "Fundador",
      nationality: "Portugal",
      series: "Gran Turismo 7 · WRC",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251832737817256/bf14d93d01132ebf0af1857df51cf19e_body.png",
      flag: "🇵🇹"
    },
    {
      name: "André Pinto",
      number: "14",
      role: "Co-fundador",
      nationality: "Portugal",
      series: "Gran Turismo 7 · WRC",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251719594519766/fe10eded7b5df1037737741c1ddad8b6_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Bruno da Costa",
      number: "31",
      role: "Co-Fundador",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252274147228158/8d92aea1cbe2e7fad505480ce1599ab8_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Daniel Marques",
      number: "1",
      role: "",
      nationality: "Portugal",
      series: "Gran Turismo 7 · F1 25",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252229996328790/2247d3bf41d0d571dd1d2a49989328e6_body.png",
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
