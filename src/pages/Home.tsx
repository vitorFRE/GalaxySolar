import Banner from '../components/Banner/Banner';
import Benefits from '../components/Benefits/Benefits';
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
    </>
  );
}

export default Home;
