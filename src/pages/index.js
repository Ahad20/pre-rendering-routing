import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/users">
        <a>Go to Users Page ?</a>
      </Link>
    </div>
  );
}
