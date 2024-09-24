export interface JewelryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  material: string;
  category: string;
}

export const jewelryData: JewelryItem[] = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    description: "A classic 1-carat diamond solitaire ring set in 18k white gold.",
    price: 3999.99,
    image: "https://picsum.photos/id/1/300/300",
    material: "18k White Gold, Diamond",
    category: "Rings"
  },
  {
    id: "2",
    name: "Pearl Necklace",
    description: "Elegant 18-inch freshwater pearl necklace with a 14k gold clasp.",
    price: 599.99,
    image: "https://picsum.photos/id/2/300/300",
    material: "14k Gold, Freshwater Pearls",
    category: "Necklaces"
  },
  {
    id: "3",
    name: "Sapphire Stud Earrings",
    description: "Beautiful 1-carat each blue sapphire stud earrings in 14k white gold.",
    price: 1299.99,
    image: "https://picsum.photos/id/3/300/300",
    material: "14k White Gold, Sapphire",
    category: "Earrings"
  },
  {
    id: "4",
    name: "Gold Tennis Bracelet",
    description: "Stunning 7-inch diamond tennis bracelet set in 14k yellow gold.",
    price: 2499.99,
    image: "https://picsum.photos/id/4/300/300",
    material: "14k Yellow Gold, Diamonds",
    category: "Bracelets"
  },
  {
    id: "5",
    name: "Emerald Pendant",
    description: "Exquisite 1.5-carat emerald pendant with diamond halo in 18k white gold.",
    price: 1799.99,
    image: "https://picsum.photos/id/5/300/300",
    material: "18k White Gold, Emerald, Diamonds",
    category: "Pendants"
  }
];