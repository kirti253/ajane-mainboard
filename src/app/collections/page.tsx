import Link from "next/link";
import styles from "../page.module.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PRODUCTS } from "@/data/products";

type SearchParams = {
  category?: string;
  sort?: string;
};

export default function CollectionsPage({ searchParams }: { searchParams?: SearchParams }) {
  const category = searchParams?.category;
  const sort = searchParams?.sort ?? "featured";

  let filtered = category
    ? PRODUCTS.filter((product) => product.category === category)
    : PRODUCTS;

  if (sort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.collections}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Collections</p>
            <h2>Our Collections</h2>
            <p>
              Each piece is a masterpiece of craftsmanship, designed to celebrate your
              unique elegance.
            </p>
          </div>

          <div className={styles.tabs}>
            <Link
              href="/collections"
              className={`${styles.tab} ${!category ? styles.tabActive : ""}`}
            >
              All
            </Link>
            <Link
              href="/collections?category=Dress"
              className={`${styles.tab} ${category === "Dress" ? styles.tabActive : ""}`}
            >
              Dresses
            </Link>
            <Link
              href="/collections?category=Suit%20Set"
              className={`${styles.tab} ${category === "Suit Set" ? styles.tabActive : ""}`}
            >
              Suit Sets
            </Link>
          </div>

          <div className={styles.filterRow}>
            <span>Filter by:</span>
            <div className={styles.filterChips}>
              <Link
                href="/collections?sort=featured"
                className={`${styles.filterChip} ${
                  sort === "featured" ? styles.filterChipActive : ""
                }`}
              >
                Featured
              </Link>
              <Link
                href="/collections?sort=price-asc"
                className={`${styles.filterChip} ${
                  sort === "price-asc" ? styles.filterChipActive : ""
                }`}
              >
                Price: Low to High
              </Link>
              <Link
                href="/collections?sort=price-desc"
                className={`${styles.filterChip} ${
                  sort === "price-desc" ? styles.filterChipActive : ""
                }`}
              >
                Price: High to Low
              </Link>
            </div>
          </div>

          <div className={styles.grid}>
            {filtered.map((product) => (
              <article key={product.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={product.thumbnail} alt={`${product.name} by Ajane`} />
                  {product.isSoldOut && (
                    <span className={styles.badgeSoldOut}>Sold Out</span>
                  )}
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className={styles.badgeSale}>Sale</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3>{product.name}</h3>
                  <p className={styles.price}>₹{product.price}</p>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <p className={styles.originalPrice}>₹{product.originalPrice}</p>
                  )}
                  <p>{product.category}</p>
                  <p>{product.description}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className={styles.linkButton}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

