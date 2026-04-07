"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import styles from "@/app/page.module.css";

export function CartPageClient() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <section className={styles.cartSection}>
        <div className={styles.cartInner}>
          <h1>Your cart is empty</h1>
          <p>Discover pieces you love and add them to your bag.</p>
          <Link href="/collections" className={styles.primary}>
            Shop New Arrivals
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.cartSection}>
      <div className={styles.cartInner}>
        <div className={styles.cartItems}>
          <h1>Shopping Bag</h1>
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className={styles.cartItemRow}
            >
              <div className={styles.cartItemImage}>
                <img src={item.product.thumbnail} alt={item.product.name} />
              </div>
              <div className={styles.cartItemInfo}>
                <h2>{item.product.name}</h2>
                <p className={styles.price}>₹{item.product.price}</p>
                <p>Size: {item.size}</p>
                <div className={styles.cartItemControls}>
                  <label>
                    Qty
                    <select
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          Number(event.target.value)
                        )
                      }
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => removeItem(item.product.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.cartSummaryRow}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <p className={styles.cartNote}>Taxes and shipping calculated at checkout.</p>
          <button type="button" className={styles.primary}>
            Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}

