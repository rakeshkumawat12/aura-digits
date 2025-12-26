import { Button } from '@/components/Button';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Aura Digits</h1>
        <p className={styles.description}>
          A production-ready Next.js starter with TypeScript, clean
          architecture, and best practices.
        </p>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Documentation →</h2>
            <p>Learn about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Learn →</h2>
            <p>Learn Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Templates →</h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Deploy →</h2>
            <p>Deploy your Next.js app instantly with Vercel.</p>
          </a>
        </div>

        <div className={styles.cta}>
          <Button>Get Started</Button>
        </div>
      </div>
    </main>
  );
}
