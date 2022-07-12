import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/molecule/home-navbar';
import Hero from '../components/molecule/hero';
import HomePortofolio from '../components/organism/home-portofolio';
import { SocialMediaIconsReact } from 'social-media-icons-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portofolic - Portofolio Maker for IT Worker</title>
        <meta
          property="og:title"
          content="Portofolic - Portofolio Maker for IT Worker"
          key="title"
        />
        <meta
          name="description"
          content="Let's prepare your portofolio to help you shine on next interview. Also to help get a job and project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <HomePortofolio />
      </main>

      <footer className={styles.footer}>
        <div>© 2022 Portofolic. All rights reserved.</div>
        <div className="d-flex">
          <div className="me-2">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.10)"
              icon="facebook"
              url="https://some-website.com/my-social-media-url"
              size="30"
            />
          </div>
          <div className="me-2">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.10)"
              icon="youtube"
              url="https://some-website.com/my-social-media-url"
              size="30"
            />
          </div>
          <div className="me-2">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.10)"
              icon="linkedin"
              url="https://some-website.com/my-social-media-url"
              size="30"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
