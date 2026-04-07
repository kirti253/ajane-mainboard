import Link from "next/link";
import styles from "./page.module.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { HeroSlider } from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        <HeroSlider />

        {/* Category spotlight */}
        <section className={styles.categoryStrip}>
          <div className={styles.categoryInner}>
            <article className={styles.categoryCard}>
              <h3>Chikankari</h3>
              <p>Handworked kurtis with intricate, airy embroidery.</p>
              <Link
                href="/collections?category=Chikankari"
                className={styles.linkButton}
              >
                Shop Chikankari
              </Link>
            </article>
            <article className={styles.categoryCard}>
              <h3>Summer Wear</h3>
              <p>Pastel co-ords and dresses in breathable cottons.</p>
              <Link
                href="/collections?category=Summer%20Wear"
                className={styles.linkButton}
              >
                Summer Edit
              </Link>
            </article>
            <article className={styles.categoryCard}>
              <h3>Cord Sets</h3>
              <p>Put-together looks that slip on in seconds.</p>
              <Link href="/collections?category=Cord%20Set" className={styles.linkButton}>
                View Cord Sets
              </Link>
            </article>
          </div>
        </section>

        {/* Newly Added grid */}
        <section className={styles.collections}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Newly Added</p>
            <h2>Fresh from the studio.</h2>
            <p>
              Explore the latest Ajane pieces, from corset kurtis to satin dresses and
              coord sets.
            </p>
          </div>

          <div className={styles.tabs}>
            <Link href="/collections" className={`${styles.tab} ${styles.tabActive}`}>
              All
            </Link>
            <Link href="/collections?category=Dress" className={styles.tab}>
              Dresses
            </Link>
            <Link href="/collections?category=Suit%20Set" className={styles.tab}>
              Suit Sets
            </Link>
          </div>

          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  src="https://images.pexels.com/photos/7671262/pexels-photo-7671262.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Abstract print corset kurti"
                />
              </div>
              <div className={styles.cardBody}>
                <h3>Abstract Print Corset Kurti</h3>
                <p>
                  Dress · ₹599 — Abstract printed corset kurti that flatters and brings
                  a modern edge to classics.
                </p>
                <Link href="/collections" className={styles.linkButton}>
                  View Details
                </Link>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  src="https://images.pexels.com/photos/7671304/pexels-photo-7671304.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Corset midi dress"
                />
              </div>
              <div className={styles.cardBody}>
                <h3>Corset Midi Dress</h3>
                <p>
                  Dress · ₹1,499 — Structured corset bodice with a flowing midi skirt
                  for desk-to-dinner ease.
                </p>
                <Link href="/collections" className={styles.linkButton}>
                  View Details
                </Link>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardImage}>
                <img
                  src="https://images.pexels.com/photos/7671353/pexels-photo-7671353.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Cotton maxi dress with pants"
                />
              </div>
              <div className={styles.cardBody}>
                <h3>Cotton Maxi Dress with Pants</h3>
                <p>
                  Coord Set · ₹2,799 — Breezy cotton maxi dress paired with pants for
                  effortless day-out styling.
                </p>
                <Link href="/collections" className={styles.linkButton}>
                  View Details
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Feature strip */}
        <section className={styles.featureStrip}>
          <div className={styles.featureItem}>
            <h3>Free Shipping</h3>
            <p>On all orders above ₹1,299.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Latest Fashion</h3>
            <p>Styles designed to turn heads.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Made with Love</h3>
            <p>Crafted with care in small batches.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Easy Exchanges</h3>
            <p>Hassle-free returns and size swaps.</p>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutCopy}>
              <p className={styles.eyebrow}>Our Story</p>
              <h2>Elegance Redefined</h2>
              <p>
                Ajane is more than a fashion brand—it&apos;s a celebration of refined
                elegance and timeless sophistication. Established in 2026, we craft
                each piece with meticulous attention to detail, drawing inspiration
                from natural textures and contemporary luxury.
              </p>
              <p>
                Our collections embody the essence of minimalist beauty, designed
                for those who appreciate quality, craftsmanship, and enduring style.
              </p>
              <Link href="/about" className={styles.secondary}>
                Discover More
              </Link>
            </div>

            <div className={styles.aboutHighlights}>
              <div>
                <h3>Premium Craftsmanship</h3>
                <p>
                  Meticulous attention to detail, ensuring exceptional quality and
                  lasting elegance.
                </p>
              </div>
              <div>
                <h3>Timeless Design</h3>
                <p>Classic silhouettes that transcend seasonal trends.</p>
              </div>
              <div>
                <h3>Sustainable Luxury</h3>
                <p>Ethical sourcing and responsible practices.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.journal}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Journal</p>
            <h2>Stories from the Ajane studio.</h2>
          </div>
          <div className={styles.journalGrid}>
            <article>
              <p className={styles.tag}>Process</p>
              <h3>How a coat travels from sketch to your wardrobe.</h3>
              <p>
                A peek inside our pattern room, fittings and fabric libraries.
              </p>
            </article>
            <article>
              <p className={styles.tag}>Care</p>
              <h3>Keeping your pieces in rotation for years.</h3>
              <p>
                Our care guide for wool, denim and delicate blends, written
                with real wardrobes in mind.
              </p>
            </article>
            <article>
              <p className={styles.tag}>Community</p>
              <h3>Five Ajane wearers on personal uniforms.</h3>
              <p>
                Conversations on style, routine and the pieces they reach for
                on repeat.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.contactInner}>
            <div>
              <p className={styles.eyebrow}>Get 10% off your first order</p>
              <h2>Join the Ajane circle.</h2>
              <p>
                Sign up to receive your welcome code and be the first to know about
                new drops, styling tips and limited-time offers.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

