import { BookOpenCheck } from 'lucide-react';
import React from 'react';

const Feture = ({features}) => {
    return (
        <div className='flex gap-3 '>
            <BookOpenCheck></BookOpenCheck>
             <p>{features}</p>
        </div>
      
    );
};

export default Feture;