import Banner from '../components/Banner/Banner';
import Benefits from '../components/Benefits/Benefits';
import { Contact } from '../components/Contact/Contact';
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
    </>
  );
}

export default Home;
