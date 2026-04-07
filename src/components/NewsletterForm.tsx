"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={styles.formRow}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
          value={email}
          onChange={(event) => {
            setSubmitted(false);
            setEmail(event.target.value);
          }}
          required
        />
        <button type="submit" className={styles.primary}>
          {submitted ? "You're in" : "Join list"}
        </button>
      </div>
      <p className={styles.formHint}>
        By joining, you agree to receive emails from Ajane. No spam, just thoughtful
        updates.
      </p>
    </form>
  );
}

