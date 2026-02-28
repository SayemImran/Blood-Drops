import Navbar from '../layouts/Navbar';
import Hero from '../layouts/Hero';
import Cardmini from '../layouts/Cardmini';
import HowItWorks from '../layouts/Howitworks';
import BloodTypes from '../layouts/Bloodtypes';
import WhyDonate from '../layouts/Whydonate';
import CTABanner from '../layouts/Ctabanner';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Cardmini/>
            <HowItWorks/>
            <BloodTypes/>
            <WhyDonate/>
            <CTABanner/>
        </div>
    );
};

export default Home;