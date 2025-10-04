import { Feather } from 'lucide-react';
import React from 'react';
import Feture from './Feture';

const Curd = ({prices}) => {
    const {id , name , price , description,features}=prices
    return (
        <div>
           <div class="card w-96 bg-base-100 shadow-sm">
  <div class=" card-body">
    <span class="badge badge-xs badge-warning">Most Popular</span>
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">{name}</h2>
      <span class="text-xl">{price}</span>
    </div>
    <div class="mt-6 gap-2 text-xs flex-1">
      <p className='text-[16px] font-semibold mb-5'>  {description}</p>
          {
           features.map((features,index) => <Feture key={index}   features={features}></Feture> )
        }
        
    </div>
    <div class="mt-6">
      <button class="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Curd;