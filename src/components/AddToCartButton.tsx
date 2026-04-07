"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import type { Product } from "@/data/products";
import styles from "@/app/page.module.css";

const SIZES = ["XS", "S", "M", "L", "XL"];

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState<string>("M");
  const [added, setAdded] = useState(false);

  return (
    <div className={styles.pdpActions}>
      <div className={styles.sizeRow}>
        <span className={styles.sizeLabel}>Size</span>
        <div className={styles.sizeChips}>
          {SIZES.map((option) => (
            <button
              key={option}
              type="button"
              className={`${styles.sizeChip} ${
                size === option ? styles.sizeChipActive : ""
              }`}
              onClick={() => setSize(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.addToCart}
        onClick={() => {
          addToCart(product, size);
          setAdded(true);
          setTimeout(() => setAdded(false), 1800);
        }}
      >
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

