import React from 'react';
import banner from '../../../images/banner/banner1.jpg'

const Banner = () => {
    return (
        <div className='d-flex container mt-5 '>
            <div className='container'>
                <h1>Smart Phone WareHouse</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui incidunt ipsum impedit veniam tempora ipsam doloremque voluptatibus labore officiis vero. Velit aliquam eaque, eveniet distinctio repudiandae ullam voluptatem possimus nulla dignissimos illum ex quia tempore incidunt, placeat, officiis labore voluptates.</p>
            </div>
            <div>
                <img width={500} src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;