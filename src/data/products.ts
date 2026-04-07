export type ProductCategory = "Chikankari" | "Summer Wear" | "Kurti" | "Dress" | "Cord Set";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  isSoldOut?: boolean;
  badges?: string[];
  thumbnail: string;
  images: string[];
  description: string;
  fabric: string;
  details: string[];
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "rosey-dream-kurti-set",
    slug: "rosey-dream-kurti-set",
    name: "Rosey Dream Kurti Set",
    category: "Kurti",
    price: 2149,
    originalPrice: 2649,
    badges: ["Sale", "Bestseller"],
    thumbnail:
      "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=900",
    images: [
      "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/8387839/pexels-photo-8387839.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    description:
      "Soft rose cotton kurti set with subtle embroidery and a flattering A-line silhouette, perfect for brunches and evening gatherings.",
    fabric: "100% breathable cotton",
    details: ["Three-piece set with kurti, trousers and dupatta", "Hand-done thread embroidery", "Side pockets on trousers"],
    features: ["100% Cotton", "Handcrafted", "Ethically Made"]
  },
  {
    id: "abstract-corset-kurti",
    slug: "abstract-corset-kurti",
    name: "Abstract Corset Kurti",
    category: "Summer Wear",
    price: 599,
    badges: ["New"],
    thumbnail:
      "https://images.pexels.com/photos/7671262/pexels-photo-7671262.jpeg?auto=compress&cs=tinysrgb&w=900",
    images: [
      "https://images.pexels.com/photos/7671262/pexels-photo-7671262.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    description:
      "Printed corset-style kurti with structured bodice and relaxed hem, designed to pair with denims or straight pants.",
    fabric: "Cotton blend",
    details: ["Corset-style paneling", "Square neckline", "Back zip fastening"],
    features: ["Lightweight", "Everyday Wear", "Made with Love"]
  },
  {
    id: "cotton-noodle-cord-set",
    slug: "cotton-noodle-cord-set",
    name: "Cotton Noodle Cord Set",
    category: "Cord Set",
    price: 1499,
    originalPrice: 1759,
    badges: ["Sale"],
    thumbnail:
      "https://images.pexels.com/photos/7671304/pexels-photo-7671304.jpeg?auto=compress&cs=tinysrgb&w=900",
    images: [
      "https://images.pexels.com/photos/7671304/pexels-photo-7671304.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    description:
      "Two-piece coord set with noodle-strap top and straight pants, ideal for summer dates and vacations.",
    fabric: "Cotton slub",
    details: ["Adjustable straps", "Elasticated waistband", "Fully lined top"],
    features: ["Summer Friendly", "Handcrafted", "Easy Care"]
  },
  {
    id: "timeless-chikankari-kurti",
    slug: "timeless-chikankari-kurti",
    name: "Timeless Chikankari Kurti",
    category: "Chikankari",
    price: 849,
    originalPrice: 999,
    thumbnail:
      "https://images.pexels.com/photos/8387810/pexels-photo-8387810.jpeg?auto=compress&cs=tinysrgb&w=900",
    images: [
      "https://images.pexels.com/photos/8387810/pexels-photo-8387810.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    description:
      "Classic white chikankari kurti with intricate handwork, a wardrobe staple for year-round wear.",
    fabric: "Cotton mul",
    details: ["Hand-chikankari embroidery", "Straight fit", "Side slits for movement"],
    features: ["Handcrafted", "Traditional Craft", "Breathable"]
  },
  {
    id: "sunlit-maxi-dress",
    slug: "sunlit-maxi-dress",
    name: "Sunlit Maxi Dress",
    category: "Dress",
    price: 2799,
    badges: ["Sold Out"],
    isSoldOut: true,
    thumbnail:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=900",
    images: [
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    description:
      "Flowing cotton maxi dress with subtle tiers and tie-up straps, made for slow summer evenings.",
    fabric: "Organic cotton",
    details: ["Tiered skirt", "Adjustable tie straps", "Fully lined"],
    features: ["Organic Fabric", "Sustainable", "Vacation Ready"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

