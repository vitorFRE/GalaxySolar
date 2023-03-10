import Banner from '../components/Banner/Banner';
import Benefits from '../components/Benefits/Benefits';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import SubFooter from '../components/Footer/SubFooter';
import Header from '../components/Header/Header';
import NumbersInfos from '../components/NumberInfos/NumbersInfos';
import Clients from '../components/OurClients/Clients';
import OurWork from '../components/OurWork/OurWork';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NumbersInfos />
      <Benefits />
      <Clients />
      <OurWork />
      <Contact />
      <Footer />
      <SubFooter />
    </>
  );
}

export default Home;
