import Image from "next/image";

import { Inter } from "@next/font/google";
import styles from '../styles/Home.module.css';
import { MainLayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/home.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.title}>
        <h1>
          Bienvenido al Home
        </h1>
      </div>
    </MainLayout>
  );
}
