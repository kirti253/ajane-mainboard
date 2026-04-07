import { notFound } from "next/navigation";
import styles from "@/app/page.module.css";
import { AddToCartButton } from "@/components/AddToCartButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProductBySlug, PRODUCTS } from "@/data/products";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  const hasDiscount =
    typeof product.originalPrice === "number" && product.originalPrice > product.price;

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.pdp}>
          <div className={styles.pdpInner}>
            <div className={styles.pdpGallery}>
              {product.images.map((src) => (
                <div key={src} className={styles.pdpImage}>
                  <img src={src} alt={product.name} />
                </div>
              ))}
              {product.isSoldOut && (
                <span className={styles.badgeSoldOut}>Sold Out</span>
              )}
              {product.badges?.includes("Sale") && (
                <span className={styles.badgeSale}>Sale</span>
              )}
            </div>

            <div className={styles.pdpInfo}>
              <p className={styles.eyebrow}>{product.category}</p>
              <h1 className={styles.pdpTitle}>{product.name}</h1>
              <div className={styles.pdpPriceRow}>
                <span className={styles.pdpPrice}>₹{product.price}</span>
                {hasDiscount && (
                  <span className={styles.pdpOriginal}>₹{product.originalPrice}</span>
                )}
              </div>

              <p className={styles.pdpDescription}>{product.description}</p>

              <div className={styles.pdpMeta}>
                <div>
                  <h3>Fabric</h3>
                  <p>{product.fabric}</p>
                </div>
                <div>
                  <h3>Details</h3>
                  <ul>
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <AddToCartButton product={product} />

              <div className={styles.pdpFeatures}>
                {product.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

