import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title} = homePageMeta;
  return (
    <Page title={title}>
      <Header />
      <Hero />
      <Resume />
      <Footer />
    </Page>
  );
});

export default Home;
