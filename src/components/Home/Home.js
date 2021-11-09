import React from 'react';
import Header from '../Header/Header';
import HomeBody from '../HomeBody/HomeBody';
import './Home.css';

const Home = () => {
    return (
        <div className="home-root">
            <Header></Header>
            <HomeBody></HomeBody>
        </div>
    );
};

export default Home;