import styles from "@/app/page.module.css";
import { CartPageClient } from "@/components/CartPageClient";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function CartPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <CartPageClient />
      </main>
      <SiteFooter />
    </div>
  );
}

