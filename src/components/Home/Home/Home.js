import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <BestSeller/>
        </div>
    );
};

export default Home;