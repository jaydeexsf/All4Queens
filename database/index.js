const sercviceData = [
    {
      "name": "Classic Manicure",
      "category": "nails",
      "imgPath": "/images/classic-manicure.jpg",
      "description": "A traditional manicure with nail shaping, cuticle care, and polish.",
      "price": 25.00
    },
    {
      "name": "Gel Nails",
      "category": "nails",
      "imgPath": "/images/gel-nails.jpg",
      "description": "Long-lasting gel polish that gives a shiny and durable finish.",
      "price": 40.00
    },
    {
      "name": "French Manicure",
      "category": "nail",
      "imgPath": "/images/french-manicure.jpg",
      "description": "Elegant and timeless French manicure with a natural look.",
      "price": 30.00
    },
    {
      "name": "Acrylic Nails",
      "category": "nails",
      "imgPath": "/images/acrylic-nails.jpg",
      "description": "Durable acrylic nails that are perfect for extending and shaping.",
      "price": 50.00
    },
    {
      "name": "Shellac Manicure",
      "category": "nails",
      "imgPath": "/images/shellac-manicure.jpg",
      "description": "Hybrid polish that lasts up to two weeks with a high-gloss finish.",
      "price": 35.00
    },
    {
      "name": "Nail Art Design",
      "category": "nails",
      "imgPath": "/images/nail-art.jpg",
      "description": "Creative and unique nail art designs customized to your preference.",
      "price": 20.00
    },
    {
      "name": "Spa Pedicure",
      "category": "nails",
      "imgPath": "/images/spa-pedicure.jpg",
      "description": "A relaxing pedicure with exfoliation, massage, and polish.",
      "price": 40.00
    },
    {
      "name": "Dip Powder Nails",
      "category": "nails",
      "imgPath": "/images/dip-powder.jpg",
      "description": "Durable and vibrant nails using a dipping powder technique.",
      "price": 45.00
    },
    {
      "name": "Cuticle Treatment",
      "category": "nails",
      "imgPath": "/images/cuticle-treatment.jpg",
      "description": "Nourishing treatment to keep cuticles healthy and neat.",
      "price": 15.00
    },
    {
      "name": "Pedicure with Gel Polish",
      "category": "nails",
      "imgPath": "/images/pedicure-gel.jpg",
      "description": "Pedicure with long-lasting gel polish for a polished look.",
      "price": 50.00
    },
    {
      "name": "Classic Lashes",
      "category": "lashes",
      "imgPath": "/images/classic-lashes.jpg",
      "description": "Natural-looking eyelash extensions for a subtle enhancement.",
      "price": 70.00
    },
    {
      "name": "Volume Lashes",
      "category": "lashes",
      "imgPath": "/images/volume-lashes.jpg",
      "description": "Dramatic and full eyelash extensions for a voluminous effect.",
      "price": 90.00
    },
    {
      "name": "Hybrid Lashes",
      "category": "lashes",
      "imgPath": "/images/hybrid-lashes.jpg",
      "description": "Combination of classic and volume lashes for a textured look.",
      "price": 85.00
    },
    {
      "name": "Lash Lift",
      "category": "lashes",
      "imgPath": "/images/lash-lift.jpg",
      "description": "A treatment to curl and lift your natural lashes for a refreshed look.",
      "price": 60.00
    },
    {
      "name": "Lash Tinting",
      "category": "lashes",
      "imgPath": "/images/lash-tinting.jpg",
      "description": "Tinting treatment to darken your natural lashes for a fuller look.",
      "price": 25.00
    },
    {
      "name": "Volume Refill",
      "category": "lashes",
      "imgPath": "/images/volume-refill.jpg",
      "description": "Touch-up service to maintain the fullness of volume lashes.",
      "price": 50.00
    },
    {
      "name": "Classic Refill",
      "category": "lashes",
      "imgPath": "/images/classic-refill.jpg",
      "description": "Touch-up service for classic lash extensions to keep them looking fresh.",
      "price": 40.00
    },
    {
      "name": "Lash Extension Removal",
      "category": "lashes",
      "imgPath": "/images/lash-extension-removal.jpg",
      "description": "Safe removal of eyelash extensions without damaging natural lashes.",
      "price": 30.00
    },
    {
      "name": "Brow and Lash Combo",
      "category": "lashes",
      "imgPath": "/images/brow-lash-combo.jpg",
      "description": "Combo service for both brow tinting and lash extensions.",
      "price": 90.00
    },
    {
      "name": "Box Braids",
      "category": "braids",
      "imgPath": "/images/box-braids.jpg",
      "description": "Stylish and protective box braids that can be worn in various lengths.",
      "price": 150.00
    },
    {
      "name": "Cornrows",
      "category": "braids",
      "imgPath": "/images/cornrows.jpg",
      "description": "Neat and classic cornrows for a low-maintenance style.",
      "price": 120.00
    },
    {
      "name": "Faux Locs",
      "category": "braids",
      "imgPath": "/images/faux-locs.jpg",
      "description": "Trendy faux locs for a stylish and temporary loc look.",
      "price": 180.00
    },
    {
      "name": "Feed-In Braids",
      "category": "braids",
      "imgPath": "/images/feed-in-braids.jpg",
      "description": "Elegant feed-in braids for a natural and seamless braided style.",
      "price": 140.00
    },
    {
      "name": "Ghana Braids",
      "category": "braids",
      "imgPath": "/images/ghana-braids.jpg",
      "description": "Stylish Ghana braids with intricate designs and patterns.",
      "price": 160.00
    },
    {
      "name": "Classic Braids",
      "category": "braids",
      "imgPath": "/images/classic-braids.jpg",
      "description": "Traditional braids suitable for various occasions and styles.",
      "price": 100.00
    },
    {
      "name": "Braid Touch-Up",
      "category": "braids",
      "imgPath": "/images/braid-touch-up.jpg",
      "description": "Maintenance service to refresh and neaten your existing braids.",
      "price": 50.00
    },
    {
      "name": "Braid Removal",
      "category": "braids",
      "imgPath": "/images/braid-removal.jpg",
      "description": "Safe removal of braids with care for your natural hair.",
      "price": 60.00
    },
    {
      "name": "Braided Updo",
      "category": "braids",
      "imgPath": "/images/braided-updo.jpg",
      "description": "Elegant braided updo for special occasions and events.",
      "price": 90.00
    },
    {
      "name": "Braid Conditioning Treatment",
      "category": "braids",
      "imgPath": "/images/braid-conditioning.jpg",
      "description": "Nourishing treatment to maintain the health of braided hair.",
      "price": 30.00
    }
  ]
  
  export default sercviceData;