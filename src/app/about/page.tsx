import styles from "../page.module.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutCopy}>
              <p className={styles.eyebrow}>About</p>
              <h2>Ajane is a study in modern uniform.</h2>
              <p>
                Founded with the belief that great style is often the simplest,
                Ajane designs pieces you reach for repeatedly — clean silhouettes
                that feel confident, calm and intentional.
              </p>
              <p>
                We develop each drop in small runs, with a focus on fabric,
                pattern, and proportion. Our goal is to make clothing that earns
                its place in your wardrobe: effortless to wear, elevated in
                detail, and built to last.
              </p>
              <p>
                Based in Mumbai, Ajane collaborates with independent workshops
                and responsible suppliers, continuously refining fit and finish
                with every collection.
              </p>
            </div>

            <div className={styles.aboutHighlights}>
              <div>
                <h3>Small-batch drops</h3>
                <p>Limited collections that prioritize craft over volume.</p>
              </div>
              <div>
                <h3>Material-first design</h3>
                <p>Textiles chosen for drape, comfort and longevity.</p>
              </div>
              <div>
                <h3>Fit that adapts</h3>
                <p>Proportions refined through real-world wear testing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

