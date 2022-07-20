import React,{FC} from 'react';

type headerItemProps = {
    text : String,  
    price : number ,
    percent : number
}

const HeaderItem : FC<headerItemProps> = ({text , percent , price}) => {
    return (
        <div className='flex flex-col justify-center items-center  '>
            <p className='text-white/60 font-thin '>{text}</p>
            <p className='text-white font-bold'>${price}B</p>
            <p className='text-green-500 font-semibold'>{percent}%</p>
          </div>
    );
};

export default HeaderItem;