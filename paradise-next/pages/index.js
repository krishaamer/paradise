import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Notifier from '@/components/Notifier';
import Hero from '@/components/Hero';
import Movie from '@/components/Movie';
import Featured from '@/components/Featured';
import ArtGallery from '@/components/ArtGallery';
import Ipad from '@/components/Ipad';
import Footer from '@/components/Footer';
import Private from '@/components/Private';
import { useAuth } from '@/lib/auth/AuthContext';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Head>
        <title>Early Access</title>
      </Head>
      <Notifier />
      <Navbar />
      {isLoggedIn && (
        <div id="private">
          <Private />
        </div>
      )}
      <Hero />
      <Movie />
      <Featured />
      <ArtGallery />
      <Ipad />
      <Footer />
    </>
  );
}
