import React from 'react';
import Banner from '../Banner/Banner';
import BestSellers from '../BestSellers/BestSellers';
import Inventory from '../Inventory/Inventory';
import LowestPrice from '../LowestPrice/LowestPrice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <BestSellers></BestSellers>
            <LowestPrice></LowestPrice>


        </div>
    );
};

export default Home;