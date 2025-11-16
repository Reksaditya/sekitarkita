interface menu {
  image: string,
  name: string,
  price: number,
  price2?: number
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
  instagramLink?: string,
  menu?: menu[]
  doc?: documentation[]

}

const productData:products[] = [
  {
    id: 1,
    name: "Angkringan Terserah",
    desc: "",
    image: "/terserah.png",
    operation: "24 Jam",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.290464925151!2d107.63023797524725!3d-6.975016368300215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ae22c0f675%3A0x9f9e04069ef99df4!2sTerserah!5e0!3m2!1sid!2sid!4v1763049045503!5m2!1sid!2sid",
    stars: 4,
    contact: "087765078240",
    contactLink: "https://wa.me/6287765078240",
    instagram: "@terserah.tel.u",
    instagramLink: "https://www.instagram.com/terserah.tel.u/",
    menu: [
      {
        image: "/menu/ayamgeprek.jpg",
        name: "Nasi Ayam Geprek",
        price: 17000
      },
      {
        image: "/menu/ayambakar.jpg",
        name: "Nasi Ayam Bakar",
        price: 15000
      },
      {
        image: "/menu/ikannila.jpg",
        name: "Nasi Ikan Nila Goreng",
        price: 17000
      },
      {
        image: "/menu/ikanlele.jpg",
        name: "Nasi Ikan Lele Goreng",
        price: 17000
      },
      {
        image: "/menu/soto.jpg",
        name: "Nasi Soto Kediri",
        price: 15000
      },
      {
        image: "/menu/mietektek.jpg",
        name: "Mie Tek-Tek",
        price: 16000
      },
      {
        image: "/menu/dimsum.jpg",
        name: "Dimsum",
        price: 17000
      },
      {
        image: "/menu/rotimaryam.jpg",
        name: "Roti Maryam",
        price: 8000
      },
    ],
    doc: [
      {
        image: "/doc/terserah1.jpg",
        desc: "Foto Lokasi Angkringan Terserah 1"
      },
      {
        image: "/doc/terserah2.jpg",
        desc: "Foto Lokasi Angkringan Terserah 2"
      },
      {
        image: "/doc/terserah3.jpg",
        desc: "Foto Lokasi Angkringan Terserah 3"
      },
      {
        image: "/doc/terserah5.jpg",
        desc: "Foto Lokasi Angkringan Terserah 4"
      },
      {
        image: "/doc/terserah4.jpg",
        desc: "Foto Lokasi Angkringan Terserah 5"
      },
    ]
  },
  {
    id: 2,
    name: "Pipin Donut",
    desc: "",
    image: "/pipin.png",
    operation: "07.00 - 22.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2713176572374!2d107.6325931680414!3d-6.977280266177458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e900600f881f%3A0x2bc8f451ff170d53!2sPIPIN%20DONUTS%20SUKABIRUS!5e0!3m2!1sid!2sid!4v1763051192564!5m2!1sid!2sid",
    stars: 5,
    contact: "081297053599",
    contactLink: "https://wa.me/6281297053599",
    instagram: "@pipindonuts",
    instagramLink: "https://www.instagram.com/pipindonuts/",
    menu: [
      {
        image: "/menu/palmsugar.jpg",
        name: "Palm Sugar Donut",
        price: 5000
      },
      {
        image: "/menu/dancow.jpg",
        name: "Dancow Donut",
        price: 5000
      },
      {
        image: "/menu/milo.jpg",
        name: "Chocolate Milo Donut",
        price: 5000
      },
      {
        image: "/menu/cheesy.jpg",
        name: "Milky Cheese Donut",
        price: 5000
      },
      {
        image: "/menu/tiramisu.jpg",
        name: "Tiramisu Chocolate Donut",
        price: 5000
      },
      {
        image: "/menu/strawberry.jpg",
        name: "Strawberry Rainbow Donut",
        price: 5000
      },
      {
        image: "/menu/milky.jpg",
        name: "Milky Rainbow Donut",
        price: 5000
      },
      {
        image: "/menu/almond.jpg",
        name: "Milky Almond Donut",
        price: 5000
      },
      {
        image: "/menu/cappucino.jpg",
        name: "Cappucino Donut",
        price: 5000
      },
      {
        image: "/menu/redvelvet.jpg",
        name: "Red Velvet Donut",
        price: 5000
      },
      {
        image: "/menu/taro.jpg",
        name: "Taro Sprinkles Donut",
        price: 5000
      },
      {
        image: "/menu/matcha.jpg",
        name: "Matcha Donut",
        price: 5000
      },
      {
        image: "/menu/avocado.jpg",
        name: "Avocado Chocolate Donut",
        price: 5000
      },
      {
        image: "/menu/avocadomeses.jpg",
        name: "Avocado Meses Donut",
        price: 5000
      },
      {
        image: "/menu/cocopandan.jpg",
        name: "Cocopandan Donut",
        price: 5000
      },
    ],
    doc: [
      {
        image: "/doc/pipin1.png",
        desc: "Foto Lokasi Pipin Donut 1"
      },
      {
        image: "/doc/pipin2.png",
        desc: "Foto Lokasi Pipin Donut 2"
      },
      {
        image: "/doc/pipin3.png",
        desc: "Foto Lokasi Pipin Donut 3"
      }
    ]
  },
  {
    id: 3,
    name: "D'Celup Chicken Crispy",
    desc: "",
    image: "/dcelup.png",
    operation: "09.00 - 23.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.51954383577433!2d107.63322837479932!3d-6.972386299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTgnMjAuNiJTIDEwN8KwMzgnMDAuNyJF!5e0!3m2!1sid!2sid!4v1763051059326!5m2!1sid!2sid",
    stars: 5,
    contact: "085175100960",
    contactLink: "https://wa.me/6285175100960",
    instagram: "@dcelupchickencrispy_stttelkom",
    instagramLink: "https://www.instagram.com/dcelupchickencrispy_stttelkom/",
    menu: [
      {
        image: "/menu/ayamoriginal.jpg",
        name: "Ayam Original (Tanpa Nasi)",
        price: 8000
      },
      {
        image: "/menu/geprekdcelup.jpg",
        name: "Ayam Geprek (Tanpa Nasi)",
        price: 10000
      },
      {
        image: "/menu/chilioil.jpg",
        name: "Ayam Chili Oil (Tanpa Nasi)",
        price: 10000
      },
      {
        image: "/menu/sausdcelup.jpg",
        name: "Ayam Saus D'Celup (Tanpa Nasi)",
        price: 12000
      },
      {
        image: "/menu/ayamoriginal.jpg",
        name: "Paket Ayam Original",
        price: 12000
      },
      {
        image: "/menu/geprekdcelup.jpg",
        name: "Paket Ayam Geprek",
        price: 14000
      },
      {
        image: "/menu/chilioil.jpg",
        name: "Paket Ayam Chili Oil",
        price: 14000
      },
      {
        image: "/menu/sausdcelup.jpg",
        name: "Paket Ayam Saus D'Celup",
        price: 16000
      },
    ],
    doc: [
      {
        image: "/doc/dcelup1.jpg",
        desc: "Foto Lokasi D'Celup Chicken Crispy 1"
      },
      {
        image: "/doc/dcelup2.jpg",
        desc: "Foto Lokasi D'Celup Chicken Crispy 2"
      },
      {
        image: "/doc/dcelup3.jpg",
        desc: "Foto Lokasi D'Celup Chicken Crispy 3"
      },
      {
        image: "/doc/dcelup4.jpg",
        desc: "Foto Lokasi D'Celup Chicken Crispy 4"
      }
    ]
  },
  {
    id: 4,
    name: "Warung Roti & Makanan Adhyaksa",
    desc: "",
    image: "/adhyaksa.png",
    operation: "10.00 - 02.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.3366433457431!2d107.63443969818807!3d-6.9675570670161395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e963d118bf0b%3A0x3215f8c661084660!2sWarung%20Nasi%20Kuning%20Adhyaksa!5e0!3m2!1sid!2sid!4v1763050713454!5m2!1sid!2sid",
    stars: 5,
    contact: "088901687578",
    contactLink: "https://wa.me/6288901687578",
    menu: [
      {
        image: "/menu/coklatsusu.jpg",
        name: "Roti Bakar Coklat Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: "/menu/strawberrysusu.jpg",
        name: "Roti Bakar Strawberry Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: "/menu/kacangsusu.jpg",
        name: "Roti Bakar Kacang Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: " /menu/blueberrysusu.jpg",
        name: "Roti Bakar Blueberry Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: " /menu/vanillasusu.jpg",
        name: "Roti Bakar Vanilla Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: " /menu/nanassusu.jpg",
        name: "Roti Bakar Nanas Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: " /menu/oreosusu.jpg",
        name: "Roti Bakar Oreo Susu",
        price: 5000,
        price2: 15000
      },
      {
        image: "/menu/strawberrycoklat.jpg",
        name: "Roti Bakar Semua Rasa + Coklat",
        price: 6000,
        price2: 17000
      },
    ],
    doc: [
      {
        image: "/doc/adhyaksa1.png",
        desc: "Foto Lokasi Warung Roti & Makanan Adhyaksa 1"
      },
      {
        image: "/doc/adhyaksa2.png",
        desc: "Foto Lokasi Warung Roti & Makanan Adhyaksa 2"
      },
      {
        image: "/doc/adhyaksa3.png",
        desc: "Foto Lokasi Warung Roti & Makanan Adhyaksa 3"
      },
      {
        image: "/doc/adhyaksa4.png",
        desc: "Foto Lokasi Warung Roti & Makanan Adhyaksa 4"
      },
      {
        image: "/doc/adhyaksa5.png",
        desc: "Foto Lokasi Warung Roti & Makanan Adhyaksa 5"
      }
    ]
  },
  {
    id: 5,
    name: "Dapoer Kucika",
    desc: "",
    image: "/kucika.png",
    operation: "09.00 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0755403389729!2d107.6324835695803!3d-6.973633068380469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adfe252db7%3A0x44f819052f720b00!2sJl.%20Telekomunikasi%20No.66%2C%20Sukapura%2C%20Kec.%20Dayeuhkolot%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040257!5e0!3m2!1sid!2sid!4v1763150617319!5m2!1sid!2sid",
    stars: 5,
    contact: "0882001319755",
    contactLink: "https://wa.me/62882001319755",
    menu: [
      {
        image: "/menu/mieayam.jpg",
        name: "Mie Ayam",
        price: 10000
      },
      {
        image: "/menu/mieyamin.jpg",
        name: "Mie Yamin",
        price: 10000
      },
      {
        image: "/menu/mieayam.jpg",
        name: "Mie Ayam/Yamin Double ",
        price: 15000
      },
      {
        image: "/menu/cekerayam.jpg",
        name: "Ceker Ayam (2 pcs)",
        price: 5000
      },
      {
        image: "/menu/baso.jpg",
        name: "Baso (2 pcs)",
        price: 5000
      },
      {
        image: "/menu/pangsit.jpg",
        name: "Pangsit Chili Oil",
        price: 10000
      },
    ],
    doc: [
      {
        image: "/doc/kucika1.png",
        desc: "Foto Lokasi Dapoer Kucika 1"
      },
      {
        image: "/doc/kucika2.png",
        desc: "Foto Lokasi Dapoer Kucika 2" 
      }
    ]
  },
  {
    id: 6,
    name: "Roti Kukus Thailand",
    desc: "",
    image: "/rotithailand.png",
    operation: "06.00 - 10.00 -- 15.30 - 22.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.52010820110297!2d107.62894659291574!3d-6.971317991852266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9002d5a6f4b%3A0x2245ff865645eb6f!2sStreet%20Food!5e0!3m2!1sid!2sid!4v1763051738891!5m2!1sid!2sid",
    stars: 5,
    menu: [
      
    ],
    doc: [
      {
        image: "/doc/kadet1.jpg",
        desc: "Foto Lokasi Roti Kukus Thailand 1"
      },
      {
        image: "/doc/kadet2.jpg",
        desc: "Foto Lokasi Roti Kukus Thailand 2"
      }
    ]
  },
  {
    id: 7,
    name: "Rumah Ayu Laundry",
    desc: "",
    image: "/ayulaundry.png",
    operation: "07.00 - 23.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.52015031582775!2d107.63350413824718!3d-6.971238264789519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b28067e595%3A0x685b089f34c91415!2sJl.%20Mangga%20Dua%20No.73%2C%20Sukapura%2C%20Kec.%20Dayeuhkolot%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040267!5e0!3m2!1sid!2sid!4v1763152737305!5m2!1sid!2sid",
    stars: 5,
    contact: "082121425152",
    contactLink: "https://wa.me/6282121425152",
    menu: [
      {
        image: "/menu/cucibersih.jpg",
        name: "Laundry Kiloan",
        price: 7000
      }
    ],
    doc: [
      {
        image: "/doc/ayulaundry.png",
        desc: "Foto Lokasi Rumah Ayu Laundry 1"
      },
      {
        image: "/doc/ayulaundry2.png",
        desc: "Foto Lokasi Rumah Ayu Laundry 2"
      },
      {
        image: "/doc/ayulaundry3.png",
        desc: "Foto Lokasi Rumah Ayu Laundry 3"
      },
      {
        image: "/doc/ayulaundry4.jpg",
        desc: "Foto Lokasi Rumah Ayu Laundry 4"
      }
    ]   
  },
  {
    id: 8,
    name: "Aneka Jus Godang Roso",
    desc: "",
    image: "/jus.png",
    operation: "06.30 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.7265404034565!2d107.631604350008!3d-6.971640765569201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b276a51d37%3A0xeb53144adb977dac!2sGondang%20Roso!5e0!3m2!1sid!2sid!4v1763259439407!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 9,
    name: "Ketoprak Mas No",
    desc: "",
    image: "/ketoprak.png",
    operation: "06.30 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.7265404034565!2d107.631604350008!3d-6.971640765569201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b276a51d37%3A0xeb53144adb977dac!2sGondang%20Roso!5e0!3m2!1sid!2sid!4v1763259439407!5m2!1sid!2sid",
    stars: 5,
  },
  {
    id: 10,
    name: "Baso Solo Gondang Roso",
    desc: "",
    image: "/basosolo.png",
    operation: "06.30 - 21.00",
    status: "Open",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.7265404034565!2d107.631604350008!3d-6.971640765569201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b276a51d37%3A0xeb53144adb977dac!2sGondang%20Roso!5e0!3m2!1sid!2sid!4v1763259439407!5m2!1sid!2sid",
    stars: 5,
  },
]

const Recomendation:products[] = [
  {
    id: 1,
    name: "Angkringan Terserah",
    desc: "",
    image: "/terserah.png",
    operation: "24 jam",
    status: "Open",
    stars: 4,
  },
  {
    id: 2,
    name: "Pipin Donut",
    desc: "",
    image: "/pipin.png",
    operation: "07.00 - 22.00",
    status: "Open",
    stars: 5,
  },
  {
    id: 3,
    name: "D'Celup Chicken Crispy",
    desc: "",
    image: "/dcelup.png",
    operation: "09.00 - 23.00",
    status: "Open",
    stars: 5,
  },
  {
    id: 4,
    name: "Warung Roti & Makanan Adhyaksa",
    desc: "",
    image: "/adhyaksa.png",
    operation: "10.00 - 02.00",
    status: "Open",
    stars: 5,
  }
]   

export { productData, Recomendation }