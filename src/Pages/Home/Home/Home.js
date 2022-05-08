import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import Banner from '../Banner/Banner'
import ExtraSession from '../ExtraSession/ExtraSession';
import Extra2Session from '../Extra2Session/Extra2Session';
import Extra3Part from '../Extra3Part/Extra3Part';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItem></InventoryItem>
            <ExtraSession></ExtraSession>
            <Extra2Session></Extra2Session>
            <Extra3Part></Extra3Part>
        </div>
    );
};

export default Home;