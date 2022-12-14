export const fakeData = {
  users: [
    {
      id: 1,
      name: "Galen Slixby",
      email: "staff@gmail.com",
      is_staff: true,
      password: "admin",
    },
    {
      id: 2,
      name: "Halsey Redmore",
      email: "hredmore1@imgur.com",
      is_staff: false,
      password: "admin",
    },
    {
      id: 3,
      name: "Marjory Sicely",
      email: "msicely2@who.int",
      is_staff: false,
      password: "admin",
    },
    {
      id: 4,
      name: "Cyrill Risby",
      email: "crisby3@wordpress.com",
      is_staff: false,
      password: "admin",
    },
    {
      id: 5,
      name: "Maggy Hurran",
      email: "mhurran4@yahoo.co.jp",
      is_staff: false,
      password: "admin",
    },
    {
      id: 6,
      name: "Silvain Halstead",
      email: "shalstead5@shinystat.com",
      is_staff: false,
      password: "admin",
    },
    {
      id: 7,
      name: "Breena Gallemore",
      email: "bgallemore6@boston.com",
      is_staff: false,
      password: "admin",
    },
    {
      id: 8,
      name: "Kathryne Liger",
      email: "kliger7@vinaora.com",
      is_staff: false,
      password: "admin",
    },
    {
      id: 9,
      name: "Franz Scotfurth",
      email: "fscotfurth8@dailymotion.com",
      is_staff: false,
      password: "admin",
    },
    {
      id: 10,
      name: "Jillene Bellany",
      email: "jbellany9@kickstarter.com",
      is_staff: false,
      password: "admin",
    },
  ],
  products: [
    {
      id: 1,
      name: "Dell XPS 13 9380",
      brand: "Dell",
    },
    {
      id: 2,
      name: "Apple 13 inch MacBook Air",
      brand: "Apple",
    },
    {
      id: 3,
      name: "Lenovo IdeaPad 3",
      brand: "Lenovo",
    },
    {
      id: 4,
      name: "Acer Spin 3 Convertible Laptop",
      brand: "Acer",
    },
    {
      id: 5,
      name: "CHUWI HeroBook Pro 14.1 inch",
      brand: "CHUWI",
    },
    {
      id: 6,
      name: "Lenovo Ideapad L340",
      brand: "Lenovo",
    },
    {
      id: 7,
      name: "HP 2020 Newest 17.3 Inch",
      brand: "HP",
    },
    {
      id: 8,
      name: "ASUS ROG Zephyrus Duo",
      brand: "ASUS",
    },
    {
      id: 9,
      name: "Acer Aspire 5 Slim Laptop",
      brand: "Acer",
    },
    {
      id: 10,
      name: "Alienware New M15",
      brand: "Alienware",
    },
  ],
  claims: [
    {
      id: 1,
      product: {
        id: 1,
        name: "Dell XPS 13 9380",
        brand: "Dell",
      },
      customer: {
        id: 2,
        name: "Halsey Redmore",
        email: "hredmore1@imgur.com",
      },
      product_sn: "DXPS1300001",
      status: 0,
    },
    {
      id: 2,
      product: {
        id: 2,
        name: "Apple 13 inch MacBook Air",
        brand: "Apple",
      },
      customer: {
        id: 2,
        name: "Cyrill Risby",
        email: "crisby3@wordpress.com",
      },
      product_sn: "AMA1302022",
      status: 1,
    },
    {
      id: 3,
      product: {
        id: 3,
        name: "Lenovo IdeaPad 3",
        brand: "Lenovo",
      },
      customer: {
        id: 3,
        name: "Marjory Sicely",
        email: "msicely2@who.int",
        is_staff: false,
      },
      product_sn: "AMA1302022",
      status: 2,
    },
    {
      id: 4,
      product: {
        id: 4,
        name: "Acer Spin 3 Convertible Laptop",
        brand: "Acer",
      },
      customer: {
        id: 4,
        name: "Cyrill Risby",
        email: "crisby3@wordpress.com",
        is_staff: false,
      },
      product_sn: "AMA1302022",
      status: 0,
    },
    {
      id: 5,
      product: {
        id: 5,
        name: "Acer Spin 3 Convertible Laptop",
        brand: "Acer",
      },
      customer: {
        id: 5,
        name: "CHUWI HeroBook Pro 14.1 inch",
        brand: "CHUWI",
      },
      product_sn: "AMA1302022",
      status: 0,
    },
  ],
};
