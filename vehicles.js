const vehicles = [
  {
    "slug": "porsche-panamera",
    "name": "Porsche Panamera",
    "type": "sport",
    "label": "PERFORMANCE",
    "price": "$128,500",
    "year": "2024",
    "power": "353 PS",
    "transmission": "8-speed PDK",
    "drive": "All-wheel drive",
    "description": "An unmistakable grand touring silhouette with a refined performance character",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Panamera%204%20%282024%29%20%2853623960658%29%20%28cropped%29.jpg?width=1400",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Panamera%204%20%282024%29%20%2853623960658%29%20%28cropped%29.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Panamera%204%20%282024%29%20%2853622872537%29.jpg?width=1400"
    ],
    "sources": [
      "https://commons.wikimedia.org/wiki/File:Porsche_Panamera_4_%282024%29_%2853623960658%29_%28cropped%29.jpg",
      "https://commons.wikimedia.org/wiki/File:Porsche_Panamera_4_%282024%29_%2853622872537%29.jpg"
    ],
    "authors": "Charles from Port Chester, New York",
    "license": "CC BY 2.0"
  },
  {
    "slug": "mercedes-s-class",
    "name": "Mercedes-Benz S-Class",
    "type": "luxury",
    "label": "LUXURY SEDAN",
    "price": "$119,900",
    "year": "W223",
    "power": "Configuration varies",
    "transmission": "Automatic",
    "drive": "Luxury sedan",
    "description": "An elegant flagship sedan with a focus on comfort, technology and presence",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes%20s-class%20w223%20black%20%281%29.jpg?width=1400",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes%20s-class%20w223%20black%20%281%29.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/MERCEDES-BENZ%20S-CLASS%20%28W223%29%20China%20%2818%29.jpg?width=1400"
    ],
    "sources": [
      "https://commons.wikimedia.org/wiki/File:Mercedes_s-class_w223_black_%281%29.jpg",
      "https://commons.wikimedia.org/wiki/File:MERCEDES-BENZ_S-CLASS_%28W223%29_China_%2818%29.jpg"
    ],
    "authors": "Damian B Oh / Dinkun Chen",
    "license": "CC BY-SA 4.0"
  },
  {
    "slug": "range-rover-sport",
    "name": "Range Rover Sport",
    "type": "suv",
    "label": "LUXURY SUV",
    "price": "$96,800",
    "year": "L461",
    "power": "Configuration varies",
    "transmission": "Automatic",
    "drive": "All-wheel drive",
    "description": "Confident SUV proportions and a contemporary premium interior concept",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Range%20Rover%20Sport%20SV%20Edition%20One%20L461%20Carbon%20Bronze%20Matte%20%281%29.jpg?width=1400",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Range%20Rover%20Sport%20SV%20Edition%20One%20L461%20Carbon%20Bronze%20Matte%20%281%29.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Range%20Rover%20Sport%20SV%20Edition%20One%20L461%20Carbon%20Bronze%20Matte%20%2811%29.jpg?width=1400"
    ],
    "sources": [
      "https://commons.wikimedia.org/wiki/File:Range_Rover_Sport_SV_Edition_One_L461_Carbon_Bronze_Matte_%281%29.jpg",
      "https://commons.wikimedia.org/wiki/File:Range_Rover_Sport_SV_Edition_One_L461_Carbon_Bronze_Matte_%2811%29.jpg"
    ],
    "authors": "Damian B Oh",
    "license": "See Wikimedia Commons file pages"
  },
  {
    "slug": "ferrari-488-gtb",
    "name": "Ferrari 488 GTB",
    "type": "sport",
    "label": "SUPERCAR",
    "price": "$249,000",
    "year": "488 GTB",
    "power": "661 HP",
    "transmission": "7-speed dual-clutch",
    "drive": "Rear-wheel drive",
    "description": "A sculpted Italian supercar designed around exceptional driving dynamics",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20488%20GTB.jpg?width=1400",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20488%20GTB.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20488%20GTB%20%2855208502387%29.jpg?width=1400"
    ],
    "sources": [
      "https://commons.wikimedia.org/wiki/File:Ferrari_488_GTB.jpg",
      "https://commons.wikimedia.org/wiki/File:Ferrari_488_GTB_%2855208502387%29.jpg"
    ],
    "authors": "emperornie / Alexandre Prevot",
    "license": "CC BY-SA (see source)"
  },
  {
    "slug": "bentley-continental-gt",
    "name": "Bentley Continental GT",
    "type": "luxury",
    "label": "GRAND TOURER",
    "price": "$235,000",
    "year": "Continental GT",
    "power": "Configuration varies",
    "transmission": "Automatic",
    "drive": "Grand tourer",
    "description": "Distinctive British grand touring design with carefully considered details",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bentley%20Continental%20GT%208.jpg?width=1400",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bentley%20Continental%20GT%208.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bentley%20Continental%20GT%2013.jpg?width=1400"
    ],
    "sources": [
      "https://commons.wikimedia.org/wiki/File:Bentley_Continental_GT_8.jpg",
      "https://commons.wikimedia.org/wiki/File:Bentley_Continental_GT_13.jpg"
    ],
    "authors": "Calreyn88 / Calreyn88",
    "license": "CC BY-SA 4.0"
  },
  {
    "slug": "lamborghini-urus",
    "name": "Lamborghini Urus",
    "type": "suv",
    "label": "PERFORMANCE SUV",
    "price": "$239,500",
    "year": "Urus",
    "power": "Configuration varies",
    "transmission": "Automatic",
    "drive": "All-wheel drive",
    "description": "A bold interpretation of the performance SUV with an unmistakable silhouette",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Urus%20%2899247%29.jpg?width=1400",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Urus%20%2899247%29.jpg?width=1400",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Urus%20IMG%200003.jpg?width=1400"
    ],
    "sources": [
      "https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_%2899247%29.jpg",
      "https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_IMG_0003.jpg"
    ],
    "authors": "Calreyn88 / Alexander Migl",
    "license": "CC BY-SA 4.0"
  }
];
