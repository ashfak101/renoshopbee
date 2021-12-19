import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import OffersSection from '../OffersSection/OffersSection';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <BestSeller/>
            <Services/>
            <Products/>
            <OffersSection/>
            <Footer/>
        </div>
    );
};

export default Home;