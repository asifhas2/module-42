import React, { use } from 'react';
import Curd from '../../curdComponent/Curd';

const PricingOption = ({pricingPromis}) => {

    const pricingData = use(pricingPromis);
   

    return (
        <div className='mt-10'>
             <h2 className='text-2xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                   pricingData.map(prices => <Curd key={prices.id} prices={prices}></Curd>) 
                }
            </div>
        </div>
    );
};

export default PricingOption;