import styles from "../page.module.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const posts = [
  {
    tag: "Process",
    title: "From sketch to hanger: building Drop 06",
    description:
      "A look inside the pattern room, fittings, and fabric decisions that shape our tailoring."
  },
  {
    tag: "Care",
    title: "How to keep wool and knits looking new",
    description:
      "A practical care guide for everyday wardrobes — storage, steaming, and small repairs."
  },
  {
    tag: "Community",
    title: "Personal uniforms: 5 Ajane wearers on repeat pieces",
    description:
      "Conversations on style, routine, and the silhouettes they build around."
  }
];

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.journal}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Journal</p>
            <h2>Stories from the Ajane studio.</h2>
            <p>
              Notes on process, materials, care, and the people who wear Ajane.
            </p>
          </div>

          <div className={styles.journalGrid}>
            {posts.map((post) => (
              <article key={post.title}>
                <p className={styles.tag}>{post.tag}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

