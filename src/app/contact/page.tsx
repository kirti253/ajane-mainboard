import styles from "../page.module.css";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.contact}>
          <div className={styles.contactInner}>
            <div>
              <p className={styles.eyebrow}>Contact</p>
              <h2>Let’s talk.</h2>
              <p>
                For sizing help, styling advice, press inquiries, or wholesale,
                reach us at <strong>hello@ajane.studio</strong>. We typically
                reply within 1–2 business days.
              </p>
              <p>
                Want the latest drops? Join the newsletter for early access and
                studio notes.
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

