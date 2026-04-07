"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

const slides = [
  {
    eyebrow: "Ajane SS26",
    title: "Soft pastels. Sharp silhouettes.",
    copy:
      "Discover kurtis, dresses and coord sets in airy fabrics and sculpted cuts for modern Indian wardrobes.",
    primaryHref: "/collections",
    primaryLabel: "Shop New In",
    secondaryHref: "/collections?category=Summer%20Wear",
    secondaryLabel: "Summer Edit"
  },
  {
    eyebrow: "Everyday Luxury",
    title: "Chikankari, reimagined.",
    copy:
      "Hand-done chikankari in contemporary fits, from easy kurtis to occasion-ready sets.",
    primaryHref: "/collections?category=Chikankari",
    primaryLabel: "Explore Chikankari",
    secondaryHref: "/about",
    secondaryLabel: "Our Craft"
  }
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className={styles.hero}>
      <div className={styles.heroRow}>
        <div className={styles.heroSlide}>
          <p className={styles.eyebrow}>{slide.eyebrow}</p>
          <h1 className={styles.heroTitle}>{slide.title}</h1>
          <p className={styles.heroSub}>{slide.copy}</p>
          <div className={styles.heroActions}>
            <Link href={slide.primaryHref} className={styles.primary}>
              {slide.primaryLabel}
            </Link>
            <Link href={slide.secondaryHref} className={styles.secondary}>
              {slide.secondaryLabel}
            </Link>
          </div>
          <div className={styles.heroDots}>
            {slides.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`${styles.heroDot} ${
                  index === active ? styles.heroDotActive : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.heroSlideSecondary}>
          <p className={styles.heroSlideLabel}>Latest Drop</p>
          <h2>Rosey Dream Kurti Set</h2>
          <p className={styles.price}>From ₹2,149</p>
          <Link href="/products/rosey-dream-kurti-set" className={styles.linkButton}>
            View Look
          </Link>
        </div>
      </div>
    </section>
  );
}

