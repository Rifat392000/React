import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import PageTitle from '../PageTitle';

const Home = () => {
    return (
        <div>
              <PageTitle title="Home" />
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;