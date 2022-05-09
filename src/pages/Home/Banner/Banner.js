import React from 'react';
import banner from '../../../images/banner/banner1.jpg'

const Banner = () => {
    return (
        <div className='d-flex  container mt-5 '>
            <div className='container'>
                <h1>Smart Phone WareHouse</h1>
                <p>We see a plethora of features, smartphones, and iPhones launching every week covering all the major price bands in the country. We see the latest and greatest smartphones from big companies like Samsung, Xiaomi, OPPO, Vivo, Realme, and more. However, with this tsunami of launches, it becomes a difficult task to keep track of it. Whether it be the specifications, features, or price, and availability, it is almost impossible to remember for each and every smartphone. So, in order to fix this issue, we present you with the latest mobile phones from different companies that have been recently launched in India. This page will help you to keep track of all the latest smartphones as on 9th May 2022. The page will also be the one-stop destination to see the lowest prices across various platforms and other key information that is vital to make a sound decision for buying a new smartphone.</p>
            </div>
            <div>
                <img width={500} src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;