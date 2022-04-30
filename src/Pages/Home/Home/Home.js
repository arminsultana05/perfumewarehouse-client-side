import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import Banner from '../Banner/Banner'
import ExtraSession from '../ExtraSession/ExtraSession';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItem></InventoryItem>
            <ExtraSession></ExtraSession>
           
            
        </div>
    );
};

export default Home;