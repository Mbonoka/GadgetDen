import FilterSection from './components/filtersection';
import Footer from './components/footer';
import GadgetGrid from './components/gadgetgrid';
import HeroSection from './components/herosection';
import TopNavBar from './components/navbar';
import PartnersSection from './components/patners';

const App = () => {
  return (
    <div>
      <TopNavBar />
      <HeroSection/>
      <FilterSection/>
      <GadgetGrid/>
      <PartnersSection/>
      <Footer/>
    </div>
  );
};

export default App;
