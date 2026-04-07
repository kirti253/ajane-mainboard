import Link from "next/link";
import styles from "@/app/page.module.css";

export function SiteHeader() {
  return (
    <>
      <div className={styles.announcementBar}>
        <span>Free shipping on orders above ₹1,299 · Use code AJANE10 for 10% off</span>
      </div>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            Ajane
          </Link>
          <nav className={styles.nav}>
            <Link href="/collections">New Arrivals</Link>
            <Link href="/collections?category=Suit%20Set">Suit Sets</Link>
            <Link href="/collections?category=Dress">Dresses</Link>
            <Link href="/collections">Collection</Link>
            <Link href="/about">About Us</Link>
          </nav>
          <div className={styles.headerActions}>
            <button className={styles.iconButton} aria-label="Search">
              🔍
            </button>
            <button className={styles.iconButton} aria-label="Account">
              👤
            </button>
            <Link href="/cart" className={styles.iconButton} aria-label="Cart">
              🛒
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

