const sercviceData = [
    {
      "name": "Classic Manicure",
      "category": "nails",
      "imgPath": "./database/images/classic-manicure.jpg",
      "description": "A traditional manicure with nail shaping, cuticle care, and polish.",
      "price": 849.00,
      "newPrice": 695,
    },
    {
      "name": "Gel Nails",
      "category": "nails",
      "imgPath": "./database/images/gel-nails.jpg",
      "description": "Long-lasting gel polish that gives a shiny and durable finish.",
      "price": 40.00
    },
    {
      "name": "French Manicure",
      "category": "nail",
      "imgPath": "./database/images/french-manicure.jpg",
      "description": "Elegant and timeless French manicure with a natural look.",
      "price": 30.00
    },
    {
      "name": "Acrylic Nails",
      "category": "nails",
      "imgPath": "./database/images/acrylic-nails.jpg",
      "description": "Durable acrylic nails that are perfect for extending and shaping.",
      "price": 50.00
    },
    {
      "name": "Shellac Manicure",
      "category": "nails",
      "imgPath": "./database/images/shellac-manicure.jpg",
      "description": "Hybrid polish that lasts up to two weeks with a high-gloss finish.",
      "price": 35.00
    },
    {
      "name": "Nail Art Design",
      "category": "nails",
      "imgPath": "./database/images/nail-art.jpg",
      "description": "Creative and unique nail art designs customized to your preference.",
      "price": 20.00
    },
    {
      "name": "Spa Pedicure",
      "category": "nails",
      "imgPath": "./database/images/spa-pedicure.jpg",
      "description": "A relaxing pedicure with exfoliation, massage, and polish.",
      "price":1600.00,
      "newPrice": 300,
    },
    {
      "name": "Dip Powder Nails",
      "category": "nails",
      "imgPath": "./database/images/dip-powder.jpg",
      "description": "Durable and vibrant nails using a dipping powder technique.",
      "price": 45.00
    },
    {
      "name": "Cuticle Treatment",
      "category": "nails",
      "imgPath": "./database/images/cuticle-treatment.jpg",
      "description": "Nourishing treatment to keep cuticles healthy and neat.",
      "price": 15.00
    },
    {
      "name": "Pedicure with Gel Polish",
      "category": "nails",
      "imgPath": "./database/images/pedicure-gel.jpg",
      "description": "Pedicure with long-lasting gel polish for a polished look.",
      "price": 790.00,
      "newPrice": 499.99,
      "special": 20
    },
    {
      "name": "Classic Lashes",
      "category": "lashes",
      "imgPath": "./database/images/classic-lashes.jpg",
      "description": "Natural-looking eyelash extensions for a subtle enhancement.",
      "price": 70.00
    },
    {
      "name": "Volume Lashes",
      "category": "lashes",
      "imgPath": "./database/images/volume-lashes.jpg",
      "description": "Dramatic and full eyelash extensions for a voluminous effect.",
      "price": 90.00
    },
    {
      "name": "Hybrid Lashes",
      "category": "lashes",
      "imgPath": "./database/images/hybrid-lashes.jpg",
      "description": "Combination of classic and volume lashes for a textured look.",
      "price": 385.00,
      "newPrice": 270
    },
    {
      "name": "Lash Lift",
      "category": "lashes",
      "imgPath": "./database/images/lash-lift.jpg",
      "description": "A treatment to curl and lift your natural lashes for a refreshed look.",
      "price": 60.00
    },
    {
      "name": "Lash Tinting",
      "category": "lashes",
      "imgPath": "./database/images/lash-tinting.jpg",
      "description": "Tinting treatment to darken your natural lashes for a fuller look.",
      "price": 25.00
    },
    {
      "name": "Volume Refill",
      "category": "lashes",
      "imgPath": "./database/images/volume-refill.jpg",
      "description": "Touch-up service to maintain the fullness of volume lashes.",
      "price": 50.00
    },
    {
      "name": "Classic Refill",
      "category": "lashes",
      "imgPath": "./database/images/classic-refill.jpg",
      "description": "Touch-up service for classic lash extensions to keep them looking fresh.",
      "price": 740.00,
      "newPrice": 695
    },
    {
      "name": "Lash Extension Removal",
      "category": "lashes",
      "imgPath": "./database/images/lash-extension-removal.jpg",
      "description": "Safe removal of eyelash extensions without damaging natural lashes.",
      "price": 30.00
    },
    {
      "name": "Brow and Lash Combo",
      "category": "lashes",
      "imgPath": "./database/images/brow-lash-combo.jpg",
      "description": "Combo service for both brow tinting and lash extensions.",
      "price": 90.00
    },
    {
      "name": "Box Braids",
      "category": "braids",
      "imgPath": "./database/images/box-braids.jpg",
      "description": "Stylish and protective box braids that can be worn in various lengths.",
      "price": 150.00
    },
    {
      "name": "Cornrows",
      "category": "braids",
      "imgPath": "./database/images/cornrows.jpg",
      "description": "Neat and classic cornrows for a low-maintenance style.",
      "price": 120.00
    },
    {
      "name": "Faux Locs",
      "category": "braids",
      "imgPath": "./database/images/faux-locs.jpg",
      "description": "Trendy faux locs for a stylish and temporary loc look.",
      "price": 180.00
    },
    {
      "name": "Feed-In Braids",
      "category": "braids",
      "imgPath": "./database/images/feed-in-braids.jpg",
      "description": "Elegant feed-in braids for a natural and seamless braided style.",
      "price": 140.00
    },
    {
      "name": "Ghana Braids",
      "category": "braids",
      "imgPath": "./database/images/ghana-braids.jpg",
      "description": "Stylish Ghana braids with intricate designs and patterns.",
      "price": 160.00
    },
    {
      "name": "Classic Braids",
      "category": "braids",
      "imgPath": "./database/images/classic-braids.jpg",
      "description": "Traditional braids suitable for various occasions and styles.",
      "price": 100.00
    },
    {
      "name": "Braid Touch-Up",
      "category": "braids",
      "imgPath": "./database/images/braid-touch-up.jpg",
      "description": "Maintenance service to refresh and neaten your existing braids.",
      "price": 50.00
    },
    {
      "name": "Braid Removal",
      "category": "braids",
      "imgPath": "./database/images/braid-removal.jpg",
      "description": "Safe removal of braids with care for your natural hair.",
      "price": 350,
      "newPrice": 295
    },
    {
      "name": "Braided Updo",
      "category": "braids",
      "imgPath": "./database/images/braided-updo.jpg",
      "description": "Elegant braided updo for special occasions and events.",
      "price": 90.00
    },
    {
      "name": "Braid Conditioning Treatment",
      "category": "braids",
      "imgPath": "./database/images/braid-conditioning.jpg",
      "description": "Nourishing treatment to maintain the health of braided hair.",
      "price": 30.00
    }
  ]
  
  export default sercviceData;

