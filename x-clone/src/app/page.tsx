import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home page</h1>
        <Link href='/signup'>Sign up</Link>
        <Link href='/login'>Log in</Link>
      </main>
    </div>
  );
}
