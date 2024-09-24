export interface JewelryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  material: string;
  category: string;
  details?: string;
}

export const jewelryData: JewelryItem[] = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    description: "A classic 1-carat diamond solitaire ring set in 18k white gold.",
    price: 3999.99,
    image: "https://picsum.photos/id/1/300/300",
    material: "18k White Gold, Diamond",
    category: "Rings",
    details: "This timeless piece features a brilliant-cut 1-carat diamond, certified for its exceptional clarity and color. The 18k white gold band provides a sleek, modern look that complements the diamond's sparkle."
  },
  {
    id: "2",
    name: "Pearl Necklace",
    description: "Elegant 18-inch freshwater pearl necklace with a 14k gold clasp.",
    price: 599.99,
    image: "https://picsum.photos/id/2/300/300",
    material: "14k Gold, Freshwater Pearls",
    category: "Necklaces",
    details: "This stunning necklace features 7-8mm freshwater pearls, hand-selected for their luster and uniformity. The 14k gold clasp adds a touch of luxury to this classic piece."
  },
  {
    id: "3",
    name: "Sapphire Stud Earrings",
    description: "Beautiful 1-carat each blue sapphire stud earrings in 14k white gold.",
    price: 1299.99,
    image: "https://picsum.photos/id/3/300/300",
    material: "14k White Gold, Sapphire",
    category: "Earrings",
    details: "These exquisite earrings showcase two round-cut blue sapphires, each weighing 1 carat. The 14k white gold settings enhance the deep blue hue of the sapphires, creating a stunning contrast."
  },
  {
    id: "4",
    name: "Gold Tennis Bracelet",
    description: "Stunning 7-inch diamond tennis bracelet set in 14k yellow gold.",
    price: 2499.99,
    image: "https://picsum.photos/id/4/300/300",
    material: "14k Yellow Gold, Diamonds",
    category: "Bracelets",
    details: "This classic tennis bracelet features 2 carats of round brilliant-cut diamonds set in 14k yellow gold. The bracelet measures 7 inches in length and is secured with a box clasp and safety latch."
  },
  {
    id: "5",
    name: "Emerald Pendant",
    description: "Exquisite 1.5-carat emerald pendant with diamond halo in 18k white gold.",
    price: 1799.99,
    image: "https://picsum.photos/id/5/300/300",
    material: "18k White Gold, Emerald, Diamonds",
    category: "Pendants",
    details: "This stunning pendant showcases a 1.5-carat emerald-cut emerald surrounded by a halo of brilliant-cut diamonds. The 18k white gold setting enhances the vibrant green of the emerald, creating a truly eye-catching piece."
  }
];