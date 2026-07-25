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
      role: "Valente_131",
      nationality: "Portuguese",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/valente_131.png",       // Replace with real photo
      flag: "🇵🇹"
    },
    {
      name: "Pedro Ferreira",
      number: "95",
      role: "Pe_Fi_Ma_Fe",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/pe_fi_ma_fe.png",
      flag: "🇵🇹"
    },
    {
      name: "Miguel Rodrigues",
      number: "02/200",
      role: "M_Rodrigues_02",
      nationality: "Portugal",
      series: "Gran Turismo 7 · WRC",
      image: "images/pilotos-rpm/M_Rodrigues_02.png",
      flag: "🇵🇹"
    },
    {
      name: "André Pinto",
      number: "830",
      role: "ADPinto1983",
      nationality: "Portugal",
      series: "Gran Turismo 7 · WRC",
      image: "images/pilotos-rpm/ADPinto1983.png",
      flag: "🇵🇹"
    },
    {
      name: "Bruno da Costa",
      number: "31",
      role: "BrunyDaCosta",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/BrunyDaCosta.png",
      flag: "🇵🇹"
    },
    {
      name: "Daniel Marques",
      number: "3/5/65",
      role: "DanMarques_1",
      nationality: "Portugal",
      series: "Gran Turismo 7 · F1 25",
      image: "images/pilotos-rpm/DanMarques_1.png",
      flag: "🇵🇹"
    },
     {
      name: "Joao Pedro",
      number: "23/238",
      role: "jPedroFM",
      nationality: "Portugal",
      series: "Gran Turismo 7 · WRC",
      image: "images/pilotos-rpm/JPedroFM.png",
      flag: "🇵🇹"
    },
    {
      name: "Ruben Ferreira",
      number: "888",
      role: "Implacavel_3",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/Implacavel_3.png",
      flag: "🇵🇹"
    },
    {
      name: "José Vedes",
      number: "32",
      role: "RPM_Kryptonite_",
      nationality: "Portugal",
      series: "Gran  Turismo 7",
      image: "images/pilotos-rpm/RPM_Kryptonite_.png",
      flag: "🇵🇹"
    },
    {
      name: "Carlos Goncalves",
      number: "57",
      role: "SpeedyTuga75",
      nationality: "Portugal",
      series: "Gran  Turismo 7",
      image: "images/pilotos-rpm/SpeedyTuga75.png",
      flag: "🇵🇹"
    },
    {
      name: "Gil Ferreira",
      number: "86",
      role: "Ango_Chiggy",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/ango_chiggy.png",
      flag: "🇵🇹"
    },
    {
      name: "Fernando Oliveira",
      number: "000",
      role: "Keijo_PTAO",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/keijo_PTAO.png",
      flag: "🇵🇹"
    },
    {
      name: "Helder Ferreira",
      number: "77",
      role: "Faneka4154",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/Faneka4154.png",
      flag: "🇵🇹"
    },
    {
      name: "Eduardo Vilas-Boas",
      number: "000",
      role: "cloudtuga",
      nationality: "Portugal",
      series: "Gran Turismo 7 · F1 25",
      image: "images/pilotos-rpm/cloudtuga.png",
      flag: "🇵🇹"
    },
    {
      name: "Alexandre Sousa",
      number: "000",
      role: "reaper-alexandre",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/reaper-alexandre.png",
      flag: "🇵🇹"
    },
    {
      name: "Ismael Cartucho",
      number: "19",
      role: "IsmaelCartucho-m",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/pilotos-rpm/Ismael-Cartucho.png",
      flag: "🇵🇹"
    },
  ],

  /* ─────────────────────────────────────────────
     LEAGUES
     Fields: name, platform, description, logo, url
     ───────────────────────────────────────────── */
  leagues: [
    {
      name: "EPIC Virtual  Racing",
      platform: "GT7",
      description: "O campeonato mais prestigiado de Gran Turismo 7 em Portugal que já conta com 13 edições.",
      logo: "images/leagues (2).png",
      url: "https://epiceventos.pt/virtual/"
    },
    {
      name: "Campeonato Portugal GT",
      platform: "GT7",
      description: "Um dos mais recentes campeonatos de Gran Turismo 7 com 5 divisões e 140 pilotos.",
      logo: "images/leagues (1).png",
      url: "https://www.facebook.com/p/CPGT-Campeonato-Portugal-de-GT7-61563295261372/"
    },
    {
      name: "Liga BPF",
      platform: "GT7",
      description: "A maior liga de GT7 em Portugal com campeonatos que variam entre 140 e 200 pilotos.",
      logo: "images/leagues.png",
      url: "https://www.bpftr.com/eventos"
    },
    {
      name: "Evolution Series",
      platform: "GT7",
      description: "Uma comunidade de campeonatos temáticos especializados em provas de endurance por equipas.",
      logo: "images/leagues (4).png",
      url: "https://www.youtube.com/@evolutionchampionshipserie7726"
    },
     {
      name: "Campeonato Portugal GT",
      platform: "GT7",
      description: "Um dos mais recentes campeonatos de Gran Turismo 7 com 5 divisões e 140 pilotos.",
      logo: "images/leagues (1).png",
      url: "https://www.facebook.com/p/CPGT-Campeonato-Portugal-de-GT7-61563295261372/"
    },
    {
      name: "Liga BPF",
      platform: "GT7",
      description: "A maior liga de GT7 em Portugal com campeonatos que variam entre 140 e 200 pilotos.",
      logo: "images/leagues.png",
      url: "https://www.bpftr.com/eventos"
    },
    {
      name: "Evolution Series",
      platform: "GT7",
      description: "Uma comunidade de campeonatos temáticos especializados em provas de endurance por equipas.",
      logo: "images/leagues (4).png",
      url: "https://www.youtube.com/@evolutionchampionshipserie7726"
    }   
  ],

  /* ─────────────────────────────────────────────
     GALLERY
     Fields: image, caption, category (optional)
     ───────────────────────────────────────────── */
  gallery: [
    { image: "images/galeria-rpm/fc035d41-bd28-4204-b3f5-754f8f8b5e97.jfif", caption: "Spa 24 Hours — Into Eau Rouge", category: "Endurance" },
    { image: "images/galeria-rpm/cf8b9cc5-928d-42fe-9b19-844b453124a8.jfif", caption: "Night Battle at Monza", category: "Sprint" },
    { image: "images/galeria-rpm/c6c88844-8f56-4dc5-8b1e-9ec6d98d567b.jfif", caption: "Team Lineup — Season 2025", category: "Team" },
    { image: "images/galeria-rpm/aecbb1cf-6e0a-4589-8b14-81b6d0266eda.jfif", caption: "Podium Finish — Nürburgring", category: "Endurance" },
    { image: "images/galeria-rpm/991cee83-1007-4edb-9ea9-d95c507fb292.jfif", caption: "Pit Stop Strategy", category: "Endurance" },
    { image: "images/galeria-rpm/39f64631-d8a8-4047-a3f6-dda0b00e4596.jfif", caption: "Sunset at Bathurst", category: "Sprint" },
    { image: "images/galeria-rpm/32bd9817-d372-40b7-a9a4-74df0d81e0b2.jfif", caption: "Close Racing — Brands Hatch", category: "Sprint" },
    { image: "images/galeria-rpm/1b3dba5c-24ec-4ed0-9f9f-03b24a49b266.jfif", caption: "Season Celebration", category: "Team" }
  ],

  /* ─────────────────────────────────────────────
     SPONSORS
     Fields: name, logo, url, tier ("gold" | "silver" | "bronze")
     ───────────────────────────────────────────── */
  sponsors: [
    {
      name: "RealPolimento",
      logo: "images/realpolimento_logotipo-removebg-preview.png",
      url: "https://www.realpolimento.pt/",
      tier: "gold"
    },
    {
      name: "Cultifusao",
      logo: "images/Sponsors-removebg-preview.png",
      url: "https://www.cultifusao.pt/",
      tier: "gold"
    },
    {
      name: "Steelnor",
      logo: "images/STEELNOR%20PRETO.png",
      url: "www.steelnor.pt/",
      tier: "gold"
    },
    {
      name: "jogoDigital",
      logo: "https://www.jogodigital.com/wp-content/uploads/2023/09/jogodigital-logo.svg#3207",
      url: "https://www.jogodigital.com/",
      tier: "silver"
    },
    {
      name: "SimXPro",
      logo: "https://simxpro.com/cdn/shop/files/logo_png.png?v=1758741848&width=120",
      url: "https://simxpro.com/rpm",
      tier: "bronze"
    },
    {
      name: "Simufy",
      logo: "https://simufy.com/cdn/shop/files/Logo_Simufy_edabc560-fe73-4946-ad32-ba72663e1ae3_250x.png?v=1749559810",
      url: "https://simufy.com/?ref=rpm",
      tier: "bronze"
    }
  ]

};
