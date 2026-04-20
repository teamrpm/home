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
      name: "EPIC Virtual  Racing",
      platform: "GT7",
      description: "O campeonato mais prestigiado de Gran Turismo 7 em Portugal que já conta com 13 edições.",
      logo: "images/leagues/simgrid.png",
      url: "https://epiceventos.pt/virtual/"
    },
    {
      name: "Campeonato Portugal GT",
      platform: "GT7",
      description: "Daily ranked racing and seasonal championships in the LFM ecosystem.",
      logo: "images/leagues/lfm.png",
      url: "https://discord.com/invite/PWjKcXZpFC"
    },
    {
      name: "Liga BPF",
      platform: "GT7",
      description: "Competing in iRacing's official multi-class and GT series at the highest splits.",
      logo: "images/leagues/iracing.png",
      url: "https://www.iracing.com"
    },
    {
      name: "Evolution Series",
      platform: "GT7",
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
    { image: "https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/670846558_17943927261156867_7628955382532800899_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg3NTM1NTcxNDU3NTQ3Njg3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=AE2jOJwhIO4Q7kNvwHbBTvO&_nc_oc=AdpLtY_FCJxwdgRu7TLS2UmXMaeSPAtBrm4n_oa7vDeJ1XeMCG5Iw61KpuZ41pp9mE4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=xF71NuUvV0auYhFtbdtQsw&_nc_ss=7a32e&oh=00_Af0TfnWrkBWddYUh8BKROhW3uyaSiEr4cDn2PyKhUvGGwA&oe=69E84D0C", caption: "Spa 24 Hours — Into Eau Rouge", category: "Endurance" },
    { image: "https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/670422125_17943638370156867_7603826079128033448_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzg3MzgxMjU1MjY5MDI1NzU5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=-3I0YySycgEQ7kNvwG10DPl&_nc_oc=Ado0DQbirUEU5tvHm7P5wmhem9fAH21CvBwkyeM8V4djrYq4wHmsTsjmjn4Kac8jVGQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=xF71NuUvV0auYhFtbdtQsw&_nc_ss=7a32e&oh=00_Af1h1HP0WtCvTjJB5MiV7ufiZ3xFzeD0P51YXoL_AUGw5w&oe=69E850FA", caption: "Night Battle at Monza", category: "Sprint" },
    { image: "https://scontent-lhr6-1.cdninstagram.com/v/t51.82787-15/654020339_17939840814156867_561160905914082925_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg1NDcwNjI4Njk5MDgzNDYwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=8BOt_eKZLNQQ7kNvwECtdaK&_nc_oc=AdoRp_6T4rmckUFmJ1-RavmPbFOMPZHOVsWRktxNZP5pjQcyp4fQbXKmmgtcln8YCsg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_gid=xF71NuUvV0auYhFtbdtQsw&_nc_ss=7a32e&oh=00_Af0RyttWAhlqTSxDvQhiBz2Kq6Klfbd7huAypNc4BdAyXw&oe=69E86F35", caption: "Team Lineup — Season 2025", category: "Team" },
    { image: "https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/652795048_17939618952156867_1098638455899786670_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzg1MzQ3ODk5NDY1ODU0NjgzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTJ4MTEzNC5zZHIuQzMifQ%3D%3D&_nc_ohc=mVDL5RcorXQQ7kNvwFKhxjE&_nc_oc=AdrpFpghkiW5QTXILQgLbaNLboHOU3nvSlZjuili5CLRn0yL3MI8ykzx7FLgUNlh0hw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=xF71NuUvV0auYhFtbdtQsw&_nc_ss=7a32e&oh=00_Af0_YfTfrD9pwCEhr63wKmzCiu2LZS8AsJiEdJfnN48-WQ&oe=69E86BF7", caption: "Podium Finish — Nürburgring", category: "Endurance" },
    { image: "https://scontent-lhr6-1.cdninstagram.com/v/t51.82787-15/587602155_17926464378156867_7083784816364375075_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzc3MDgyOTUyNDA2NjY5ODQ1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Jb7TTm54zDEQ7kNvwHn6939&_nc_oc=AdoazDW4KNHDYgAvdbxD6Px4YJiLupslnmno98LIUpkZPNQE8uj0Sf9-vLp5oE8WVuQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_gid=rn87ajPAofl0Xndqc89ycw&_nc_ss=7a32e&oh=00_Af0JKwn79yMaZ3BmDG8xUQNn5RFTvUpTr9gJW31_egL_Bg&oe=69E869F0", caption: "Pit Stop Strategy", category: "Endurance" },
    { image: "https://scontent-lhr6-1.cdninstagram.com/v/t51.82787-15/584106724_17926140417156867_146073399126684490_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzc2ODQ1NTc3NTc1MzQzODk2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNjR4MTM2NC5zZHIuQzMifQ%3D%3D&_nc_ohc=xSq_jRFhZ9kQ7kNvwFr5c4W&_nc_oc=AdpsG6i7aKMg6bzLBk7Tc-5dOXEpjFBBbqPEIRNJot6lDV2NhOyV91D5gLEigXxRVzU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_gid=rn87ajPAofl0Xndqc89ycw&_nc_ss=7a32e&oh=00_Af0CT-mdLZJceeGZELRgGUQZBMw-8B7zsNf3PklWfL0Bug&oe=69E85783", caption: "Sunset at Bathurst", category: "Sprint" },
    { image: "https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/582057692_17925429507156867_5672978877252207669_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc2MzM5NzA3NzQyMzIwMjE0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=lMwTFoIodBcQ7kNvwGRyToU&_nc_oc=AdrF8tvJd-i5nOtKb2d2Vi6aTkDPFlu0RE-PaGYpdPmXAi_YefNgU0VviZZs9LDmofU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=rn87ajPAofl0Xndqc89ycw&_nc_ss=7a32e&oh=00_Af1s25s845eEgr-FShAGjrSBlKZ3Esb61pmERyKSl9gfCw&oe=69E86A42", caption: "Close Racing — Brands Hatch", category: "Sprint" },
    { image: "https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/563382949_17922390750156867_6873208220449269627_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc0MTcxMTc1NDk0NzU0MDA0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EM7XJQcN5y8Q7kNvwESzvxG&_nc_oc=AdrMSi_FqKDjOnxQeb1aF8312NESO6jazDDpQEfJbBwciiPxMEckxoCtqocj3SbOQjY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=1UcqpMd2f_2DC9Rn6VfC-A&_nc_ss=7a32e&oh=00_Af2D3tufOlG3DAg9FfmjCmD1lAcSNxjH_DNFrPyTYGcP9g&oe=69E84D42", caption: "Season Celebration", category: "Team" }
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
