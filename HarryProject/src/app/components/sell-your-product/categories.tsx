
export const categories = [
  // { id: "handmade", name: "Handmade", image: "/homepage/box.jpg", hasSubcategories: true },
  // { id: "fashion", name: "Fashion", image: "/homepage/clothing.jpeg", hasSubcategories: true },
  // { id: "home-garden", name: "Home_Garden", image: "/homepage/home-garden.jpeg", hasSubcategories: true },
  // { id: "sports", name: "Sports_Outdoors", image: "/homepage/sports.jpeg", hasSubcategories: true },
  // { id: "books", name: "Books", image: "/homepage/books.jpeg", hasSubcategories: true },
  // { id: "art", name: "Art_Collectibles", image: "/homepage/art.jpeg", hasSubcategories: false },
  // { id: "pets", name: "Pet Supplies", image: "/homepage/pet.jpeg", hasSubcategories: false },
  // { id: "food", name: "Food_Sweets", image: "homePage/heartchoclate.webp", hasSubcategories: false },

  { id: "Food", name: "Food", image: "/homePage/food.jpg", hasSubcategories: true },
  { id: "Clothing", name: "Clothing", image: "/homePage/clothing.jpeg", hasSubcategories: true },
  { id: "Accessories", name: "Accessories", image: "/homePage/accesories.jpg", hasSubcategories: true },
  { id: "Home", name: "Home Decor", image: "/homePage/homedecore1.png", hasSubcategories: true },
  { id: "Organic", name: "Organic and Natural", image: "/homePage/organic1.jpg", hasSubcategories: true },
  { id: "Kids", name: "Kids Special", image: "/homePage/babycloth.jpg", hasSubcategories: true },
  { id: "Gifts", name: "Gifts and Festive", image: "/homePage/gift2.jpg", hasSubcategories: true },
  { id: "Musical", name: "Musical Instruments", image: "/homePage/instrument.jpg", hasSubcategories: true },
  { id: "Paintings", name: "Paintings and Arts", image: "/homePage/paint.jpg", hasSubcategories: true }
]

export const subcategories: Record<string, { name: string; image: string }[]> = {
  Food: [
    { name: "Pickles", image: "/homePage/Food/brinjal.jpg" },
    { name: "Jams and Spreads", image: "/homePage/jam/2.jpg" },
    { name: "Spices and Masalas", image: "/homePage/masala/tikka.jpg" },
    { name: "Chocolates and Sweets", image: "/homePage/chocolate/1.jpg" },
  ],
  Clothing: [
    { name: "Men's Clothing", image: "/homePage/mens_cloth/2.jpg" },
    { name: "Dresses and Kurtis", image: "/homePage/kurti/1.jpg" },
    { name: "Sarees and Ethnic Wear", image: "/homePage/saree/1.jpg" },
    { name: "Woolen and Crochet Items", image: "/homePage/woolen/2.jpg" },
  ],
  Accessories: [
    { name: "Handmade Jewellry", image: "/homePage/jwellery/1.jpg" },
    { name: "Bags and Purses", image: "/homePage/bags/1.jpg" },
  ],
  Home: [
    { name: "Candles", image: "/homePage/candles/1.jpg" },
    { name: "Clay and Ceramic Items", image: "/homePage/clay/1.jpg" },
    { name: "Wall Hangings", image: "/homePage/wall_hangi/1.jpg" },
  
    { name: "Wooden Craft", image: "/homePage/wooden_craft/1.jpg" },
 
  ],
  Organic: [
    { name: "Herbal Beauty Products", image: "/homePage/harbal/1.jpg" },
    { name: "Essential Oils", image: "/homePage/organic_oil/1.jpg" },
  
    { name: "Organic Cleaning Products", image: "/homePage/cleaning/1.jpg" },
  ],
  Kids: [
    { name: "Baby Clothes", image: "/homePage/baby_cloth/1.jpg" },
    { name: "Soft and Wooden Toys", image: "/homePage/toy/1.jpg" },
    { name: "Accessories", image: "/homePage/personal_accese/1.jpg" },
  ],
  Gifts: [
    { name: "Gift Hampers", image: "/homePage/gift_hampper/1.jpg" },
    { name: "Greeting Cards", image: "/homePage/greeting/1.jpg" },
    { name: "Wedding and Festival Decor", image: "/homePage/wedding_gift/1.jpg" },
  ],
  Musical: [
    { name: "Small Tabla", image: "/homePage/tabala/1.jpg" },
    { name: "Flute", image: "/homePage/flute/3.jpg" },
  ],
  Paintings: [
    { name: "Oil Painting", image: "/homePage/oil_paint/1.jpg" },
    { name: "Acrylic Painting", image: "/homePage/acrylic/1.jpg" },
   
  
    { name: "Spray Paint", image: "/homePage/sprey/1.jpg" },
  ],
}

