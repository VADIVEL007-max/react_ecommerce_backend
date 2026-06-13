const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
 await prisma.products.createMany({
  data: [
      {
        product_title: "iPhone 15",
        product_price: "79999",
        product_discountPercentage: "10",
        product_rating: "4.8",
        product_thumbnail: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
        product_brand: "Apple",
        product_tag: ["mobile", "apple"],
        product_image: [
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        ]
      },
      {
        product_title: "Samsung Galaxy S25",
        product_price: "69999",
        product_discountPercentage: "15",
        product_rating: "4.7",
        product_thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        product_brand: "Samsung",
        product_tag: ["mobile", "android"],
        product_image: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        ]
      },
      {
        product_title: "OnePlus 13",
        product_price: "59999",
        product_discountPercentage: "12",
        product_rating: "4.6",
        product_thumbnail: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        product_brand: "OnePlus",
        product_tag: ["mobile"],
        product_image: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        ]
      },
      {
        product_title: "MacBook Air M4",
        product_price: "114999",
        product_discountPercentage: "5",
        product_rating: "4.9",
        product_thumbnail: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        product_brand: "Apple",
        product_tag: ["laptop"],
        product_image: [
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
        ]
      },
      {
        product_title: "Dell XPS 15",
        product_price: "129999",
        product_discountPercentage: "10",
        product_rating: "4.8",
        product_thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        product_brand: "Dell",
        product_tag: ["laptop"],
        product_image: [
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        ]
      },
      {
        product_title: "HP Pavilion Gaming",
        product_price: "85999",
        product_discountPercentage: "14",
        product_rating: "4.4",
        product_thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        product_brand: "HP",
        product_tag: ["laptop", "gaming"],
        product_image: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        ]
      },
      {
        product_title: "Lenovo Legion 5",
        product_price: "99999",
        product_discountPercentage: "12",
        product_rating: "4.7",
        product_thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        product_brand: "Lenovo",
        product_tag: ["laptop", "gaming"],
        product_image: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        ]
      },
      {
        product_title: "ASUS ROG Strix",
        product_price: "119999",
        product_discountPercentage: "10",
        product_rating: "4.8",
        product_thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        product_brand: "ASUS",
        product_tag: ["laptop", "gaming"],
        product_image: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        ]
      },
      {
        product_title: "Sony WH-1000XM5",
        product_price: "24999",
        product_discountPercentage: "20",
        product_rating: "4.9",
        product_thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        product_brand: "Sony",
        product_tag: ["headphone"],
        product_image: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        ]
      },
      {
        product_title: "JBL Tune 770NC",
        product_price: "8999",
        product_discountPercentage: "15",
        product_rating: "4.5",
        product_thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
        product_brand: "JBL",
        product_tag: ["headphone"],
        product_image: [
          "https://images.unsplash.com/photo-1484704849700-f032a568e944"
        ]
      },
      {
        product_title: "Boat Rockerz 550",
        product_price: "2499",
        product_discountPercentage: "30",
        product_rating: "4.3",
        product_thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        product_brand: "Boat",
        product_tag: ["headphone"],
        product_image: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        ]
      },
      {
        product_title: "Nike Air Max",
        product_price: "5999",
        product_discountPercentage: "25",
        product_rating: "4.5",
        product_thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        product_brand: "Nike",
        product_tag: ["shoes"],
        product_image: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ]
      },
      {
        product_title: "Adidas Ultraboost",
        product_price: "7999",
        product_discountPercentage: "20",
        product_rating: "4.7",
        product_thumbnail: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        product_brand: "Adidas",
        product_tag: ["shoes"],
        product_image: [
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ]
      },
      {
        product_title: "Puma Running Shoes",
        product_price: "4999",
        product_discountPercentage: "18",
        product_rating: "4.4",
        product_thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        product_brand: "Puma",
        product_tag: ["shoes"],
        product_image: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ]
      },
      {
        product_title: "Fastrack Smartwatch",
        product_price: "3499",
        product_discountPercentage: "22",
        product_rating: "4.2",
        product_thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        product_brand: "Fastrack",
        product_tag: ["watch"],
        product_image: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        ]
      },
      {
        product_title: "Fire-Boltt Ninja",
        product_price: "2999",
        product_discountPercentage: "28",
        product_rating: "4.1",
        product_thumbnail: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
        product_brand: "Fire-Boltt",
        product_tag: ["watch"],
        product_image: [
          "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
        ]
      },
      {
        product_title: "Samsung Smart TV 55",
        product_price: "54999",
        product_discountPercentage: "12",
        product_rating: "4.6",
        product_thumbnail: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        product_brand: "Samsung",
        product_tag: ["tv"],
        product_image: [
          "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"
        ]
      },
      {
        product_title: "LG OLED TV 65",
        product_price: "89999",
        product_discountPercentage: "10",
        product_rating: "4.8",
        product_thumbnail: "https://images.unsplash.com/photo-1461151304267-38535e780c79",
        product_brand: "LG",
        product_tag: ["tv"],
        product_image: [
          "https://images.unsplash.com/photo-1461151304267-38535e780c79"
        ]
      },
      {
        product_title: "Realme Narzo 80",
        product_price: "18999",
        product_discountPercentage: "18",
        product_rating: "4.3",
        product_thumbnail: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        product_brand: "Realme",
        product_tag: ["mobile"],
        product_image: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505"
        ]
      },
      {
        product_title: "Acer Aspire 7",
        product_price: "65999",
        product_discountPercentage: "11",
        product_rating: "4.4",
        product_thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        product_brand: "Acer",
        product_tag: ["laptop"],
        product_image: [
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        ]
      }
    ]
  });

  console.log("Products inserted successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });