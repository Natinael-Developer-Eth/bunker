import espressoImg from "@/assets/espresso.jpg";

export type MenuItem = {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  description?: string;
  descriptionAr?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffee",
    name: "Coffee",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        nameAr: "إسبريسو",
        price: 15,
        description: "A concentrated form of coffee served in small, strong shots and characterized by its layer of creamy foam known as crema.",
        image: espressoImg
      },
      {
        id: "americano",
        name: "Americano",
        nameAr: "أمريكانو",
        price: 15,
        description: "A drink for those who enjoy the flavor of espresso but prefer a lighter cup; it's espresso diluted with hot water."
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        nameAr: "كابتشينو",
        price: 22,
        description: "A classic Italian coffee drink with equal parts espresso, steamed milk, and rich, velvety foam."
      },
      {
        id: "coffee-latte",
        name: "Coffee Latte",
        price: 22,
        description: "A smooth and creamy coffee beverage made with espresso and steamed milk, topped with a light layer of foam."
      },
      {
        id: "flat-white",
        name: "Flat White",
        price: 22,
        description: "A velvety coffee with a higher ratio of coffee to milk, creating a stronger espresso flavor."
      },
      {
        id: "spanish-piccolo",
        name: "Spanish Piccolo",
        price: 20,
        description: "A small but mighty drink featuring a ristretto shot topped with warm, silky milk."
      },
      {
        id: "spanish-cortado",
        name: "Spanish Cortado",
        price: 23,
        description: "Espresso cut with a small amount of warm milk to reduce acidity while maintaining the coffee's intensity."
      },
      {
        id: "spanish-latte",
        name: "Spanish Latte",
        price: 24,
        description: "A sweeter take on the traditional latte, often made with condensed milk and a shot of espresso."
      },
      {
        id: "bunker-hot-chocolate",
        name: "Bunker Hot Chocolate",
        price: 35,
        description: "A comforting, warm beverage made with rich cocoa and milk, perfect for chocolate lovers."
      },
      {
        id: "filter-coffee-v60",
        name: "Filter Coffee V60",
        price: 28,
        description: "A pour-over brewing method that produces a clean, nuanced cup highlighting the coffee's origin notes."
      },
      {
        id: "hot-v60",
        name: "Hot V60",
        price: 28,
        description: "Hand-brewed pour-over coffee using the V60 method for a refined and aromatic experience."
      },
    ],
  },
  {
    id: "iced-coffee",
    name: "Iced",
    items: [
      {
        id: "iced-americano",
        name: "Iced Americano",
        price: 18,
        description: "Chilled espresso with cold water and ice, perfect for a refreshing coffee experience."
      },
      {
        id: "iced-spanish-latte",
        name: "Iced Spanish Latte",
        price: 25,
        description: "A cold, creamy delight made with espresso, condensed milk, and ice."
      },
      {
        id: "iced-matcha",
        name: "Iced Matcha",
        price: 33,
        description: "Premium Japanese matcha whisked with cold milk over ice for a refreshing, earthy drink."
      },
      {
        id: "iced-pistachio",
        name: "Iced Pistachio",
        price: 35,
        description: "A unique blend of pistachio flavor with espresso and cold milk, creating a nutty, creamy treat."
      },
      {
        id: "iced-v60",
        name: "Iced V60",
        price: 28,
        description: "Cold pour-over coffee brewed fresh over ice for a bright and crisp flavor profile."
      },
    ],
  },
  {
    id: "tea",
    name: "Tea",
    items: [
      {
        id: "bunker-tea-100g",
        name: "Bunker Tea (100g)",
        price: 30,
        description: "Our signature loose-leaf tea blend, carefully selected for a perfect brew every time."
      },
      {
        id: "cup-of-tea",
        name: "Cup of Tea",
        price: 6,
        description: "A freshly brewed cup of our house tea, served hot."
      },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    items: [
      {
        id: "strawberry-mocktail",
        name: "Strawberry Mocktail",
        price: 20,
        description: "A refreshing blend of fresh strawberries, citrus, and sparkling elements."
      },
      {
        id: "passion-fruit-mocktail",
        name: "Passion Fruit Mocktail",
        price: 22,
        description: "Tropical passion fruit mixed with tangy notes for a vibrant, refreshing drink."
      },
      {
        id: "blue-lagoon-mocktail",
        name: "Blue Lagoon Mocktail",
        price: 20,
        description: "A stunning blue drink with citrus flavors and a refreshing finish."
      },
    ],
  },
  {
    id: "smoothies",
    name: "Smoothies",
    items: [
      {
        id: "acai-smoothie",
        name: "Açaí Smoothie",
        price: 39,
        description: "Antioxidant-rich açaí berries blended with fruits for a nutritious, delicious treat."
      },
      {
        id: "date-blend",
        name: "Date Blend",
        price: 37,
        description: "A Middle Eastern inspired smoothie with dates, milk, and warming spices."
      },
      {
        id: "blue-wave",
        name: "Blue Wave",
        price: 37,
        description: "A beautiful blue smoothie with butterfly pea flower, fruits, and coconut."
      },
    ],
  },
  {
    id: "sweets",
    name: "Desserts",
    items: [
      {
        id: "caramel-tiramisu",
        name: "Caramel Tiramisu",
        price: 25,
        description: "A twist on the Italian classic with layers of caramel, mascarpone, and coffee-soaked ladyfingers."
      },
      {
        id: "cheese-cake",
        name: "Cheese Cake",
        price: 40,
        description: "Creamy New York style cheesecake with a buttery graham cracker crust."
      },
      {
        id: "choc-lava-cake",
        name: "Choc Lava Cake",
        price: 40,
        description: "Warm chocolate cake with a molten center that flows when you cut into it."
      },
      {
        id: "cheese-croissant",
        name: "Cheese Croissant",
        price: 15,
        description: "Flaky, buttery croissant filled with melted cheese, baked to golden perfection."
      },
      {
        id: "plain-croissant",
        name: "Plain Croissant",
        price: 15,
        description: "Classic French butter croissant with layers of flaky, golden pastry."
      },
    ],
  },
];
