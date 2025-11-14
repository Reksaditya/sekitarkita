interface menu {
  image: string,
  name: string,
  price: number
}

interface documentation {
  image: string,
  desc: string
}

export interface products {
  id: number,
  name: string,
  desc: string,
  image: string, 
  operation: string,
  status: string,
  map?: string,
  stars: number,
  contact?: string,
  contactLink?: string,
  instagram?: string,
  insatgramLink?: string,
  menu?: menu[]
  doc?: documentation[]

}

const productData:products[] = [
  {
    id: 1,
    name: "Angkringan Terserah",
    desc: "",
    image: "/public/terserah.png",
    operation: "24 Jam",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.290464925151!2d107.63023797524725!3d-6.975016368300215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ae22c0f675%3A0x9f9e04069ef99df4!2sTerserah!5e0!3m2!1sid!2sid!4v1763049045503!5m2!1sid!2sid",
    stars: 4,
    contact: "087765078240",
    contactLink: "https://wa.me/6287765078240",
    instagram: "@terserah.tel.u",
    insatgramLink: "https://www.instagram.com/terserah.tel.u/",
    menu: [
      {
        image: "/public/menu/ayamgeprek.jpg",
        name: "Nasi Ayam Geprek",
        price: 17000
      },
      {
        image: "/public/menu/ayambakar.jpg",
        name: "Nasi Ayam Bakar",
        price: 15000
      },
      {
        image: "/public/menu/ikannila.jpg",
        name: "Nasi Ikan Nila Goreng",
        price: 17000
      },
      {
        image: "/public/menu/ikanlele.jpg",
        name: "Nasi Ikan Lele Goreng",
        price: 17000
      },
      {
        image: "/public/menu/soto.jpg",
        name: "Nasi Soto Kediri",
        price: 15000
      },
      {
        image: "/public/menu/mietektek.jpg",
        name: "Mie Tek-Tek",
        price: 16000
      },
      {
        image: "/public/menu/dimsum.jpg",
        name: "Dimsum",
        price: 17000
      },
      {
        image: "/public/menu/rotimaryam.jpg",
        name: "Roti Maryam",
        price: 8000
      },
    ],
    doc: [
      {
        image: "/public/doc/terserah1.jpg",
        desc: "Foto Lokasi Angkringan Terserah 1"
      },
      {
        image: "/public/doc/terserah2.jpg",
        desc: "Foto Lokasi Angkringan Terserah 2"
      },
      {
        image: "/public/doc/terserah3.jpg",
        desc: "Foto Lokasi Angkringan Terserah 3"
      },
      {
        image: "/public/doc/terserah4.jpg",
        desc: "Foto Lokasi Angkringan Terserah 4"
      },
    ]
  },
  {
    id: 2,
    name: "Pipin Donut",
    desc: "",
    image: "/public/pipin.png",
    operation: "07.00 - 22.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2713176572374!2d107.6325931680414!3d-6.977280266177458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e900600f881f%3A0x2bc8f451ff170d53!2sPIPIN%20DONUTS%20SUKABIRUS!5e0!3m2!1sid!2sid!4v1763051192564!5m2!1sid!2sid",
    stars: 5,
    contact: "081297053599",
    contactLink: "https://wa.me/6281297053599",
    instagram: "@pipindonuts",
    insatgramLink: "https://www.instagram.com/pipindonuts/"
    
  },
  {
    id: 3,
    name: "D'Celup Chicken Crispy",
    desc: "",
    image: "/public/dcelup.png",
    operation: "09.00 - 23.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.51954383577433!2d107.63322837479932!3d-6.972386299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTgnMjAuNiJTIDEwN8KwMzgnMDAuNyJF!5e0!3m2!1sid!2sid!4v1763051059326!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 4,
    name: "Warung Roti & Makanan Adhyaksa",
    desc: "",
    image: "/public/adhyaksa.png",
    operation: "10.00 - 02.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.3366433457431!2d107.63443969818807!3d-6.9675570670161395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e963d118bf0b%3A0x3215f8c661084660!2sWarung%20Nasi%20Kuning%20Adhyaksa!5e0!3m2!1sid!2sid!4v1763050713454!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 5,
    name: "Dapoer Kucika",
    desc: "",
    image: "/public/kucika.png",
    operation: "09.00 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.290464925151!2d107.63023797524725!3d-6.975016368300215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ae22c0f675%3A0x9f9e04069ef99df4!2sTerserah!5e0!3m2!1sid!2sid!4v1763049045503!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 6,
    name: "Roti Kukus Thailand",
    desc: "",
    image: "/public/rotithailand.png",
    operation: "06.00 - 10.00 -- 15.30 - 22.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.52010820110297!2d107.62894659291574!3d-6.971317991852266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9002d5a6f4b%3A0x2245ff865645eb6f!2sStreet%20Food!5e0!3m2!1sid!2sid!4v1763051738891!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 7,
    name: "Rumah Ayu Laundry",
    desc: "",
    image: "/public/ayulaundry.png",
    operation: "07.00 - 23.00",
    status: "Open",
    map: "https://maps.app.goo.gl/EcB5tyd8c5ZaSRS46",
    stars: 5,
  },
  {
    id: 8,
    name: "Aneka Jus Godang Roso",
    desc: "",
    image: "/public/jus.png",
    operation: "06.30 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.290464925151!2d107.63023797524725!3d-6.975016368300215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ae22c0f675%3A0x9f9e04069ef99df4!2sTerserah!5e0!3m2!1sid!2sid!4v1763049045503!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 9,
    name: "Ketoprak Mas No",
    desc: "",
    image: "/public/ketoprak.png",
    operation: "06.30 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.290464925151!2d107.63023797524725!3d-6.975016368300215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ae22c0f675%3A0x9f9e04069ef99df4!2sTerserah!5e0!3m2!1sid!2sid!4v1763049045503!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 10,
    name: "Baso Solo Gondang Roso",
    desc: "",
    image: "/public/basosolo.png",
    operation: "06.30 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.290464925151!2d107.63023797524725!3d-6.975016368300215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ae22c0f675%3A0x9f9e04069ef99df4!2sTerserah!5e0!3m2!1sid!2sid!4v1763049045503!5m2!1sid!2sid",
    stars: 5,
  },
]

const Recomendation:products[] = [
  {
    id: 1,
    name: "Angkringan Terserah",
    desc: "",
    image: "/public/terserah.png",
    operation: "24 jam",
    status: "Open",
    stars: 4,
  },
  {
    id: 2,
    name: "Pipin Donut",
    desc: "",
    image: "/public/pipin.png",
    operation: "07.00 - 22.00",
    status: "Open",
    stars: 5,
  },
  {
    id: 3,
    name: "D'Celup Chicken Crispy",
    desc: "",
    image: "/public/dcelup.png",
    operation: "09.00 - 23.00",
    status: "Open",
    stars: 5,
  },
  {
    id: 4,
    name: "Warung Roti & Makanan Adhyaksa",
    desc: "",
    image: "/public/adhyaksa.png",
    operation: "10.00 - 02.00",
    status: "Open",
    stars: 5,
  }
]   

export { productData, Recomendation }