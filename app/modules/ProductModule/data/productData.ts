interface products {
  id: number,
  name: string,
  desc: string,
  image: string, 
  operation: string,
  status: string
}

const productData:products[] = [
  {
    id: 1,
    name: "Angkringan Terserah",
    desc: "",
    image: "/public/terserah.png",
    operation: "24 Jam",
    status: "Open"
  },
  {
    id: 2,
    name: "Pipin Donut",
    desc: "",
    image: "/public/pipin.png",
    operation: "07.00 - 22.00",
    status: "Open"
  },
  {
    id: 3,
    name: "D'Celup Chicken Crispy",
    desc: "",
    image: "/public/dcelup.png",
    operation: "09.00 - 23.00",
    status: "Open"
  },
  {
    id: 4,
    name: "Warung Roti & Makanan Adhyaksa",
    desc: "",
    image: "/public/adhyaksa.png",
    operation: "10.00 - 02.00",
    status: "Open"
  },
  {
    id: 5,
    name: "Dapoer Kucika",
    desc: "",
    image: "/public/kucika.png",
    operation: "09.00 - 21.00",
    status: "Open"
  },
  {
    id: 6,
    name: "Roti Kukus Thailand",
    desc: "",
    image: "/public/rotithailand.png",
    operation: "06.00 - 10.00 -- 15.30 - 22.00",
    status: "Open"
  },
  {
    id: 7,
    name: "Rumah Ayu Laundry",
    desc: "",
    image: "/public/ayulaundry.png",
    operation: "07.00 - 23.00",
    status: "Open"
  },
  {
    id: 8,
    name: "Aneka Jus Godang Roso",
    desc: "",
    image: "/public/jus.png",
    operation: "06.30 - 21.00",
    status: "Open"
  },
  {
    id: 9,
    name: "Ketoprak Mas No",
    desc: "",
    image: "/public/ketoprak.png",
    operation: "06.30 - 21.00",
    status: "Open"
  },
  {
    id: 10,
    name: "Baso Solo Gondang Roso",
    desc: "",
    image: "/public/basosolo.png",
    operation: "06.30 - 21.00",
    status: "Open"
  },
]

const Recomendation:products[] = [
  {
    id: 1,
    name: "Angkringan Terserah",
    desc: "",
    image: "/public/terserah.png",
    operation: "",
    status: ""
  },
  {
    id: 2,
    name: "Pipin Donut",
    desc: "",
    image: "/public/pipin.png",
    operation: "",
    status: ""
  },
  {
    id: 3,
    name: "D'Celup Chicken Crispy",
    desc: "",
    image: "/public/dcelup.png",
    operation: "",
    status: ""
  },
  {
    id: 4,
    name: "Warung Roti & Makanan Adhyaksa",
    desc: "",
    image: "/public/adhyaksa.png",
    operation: "",
    status: ""
  }
]

export { productData, Recomendation }