import React,{FC} from 'react';

type headerItemProps = {
    text : String,  
    price : number ,
    percent : number,
    Billion : boolean,
}

const HeaderItem : FC<headerItemProps> = ({text , percent , price , Billion}) => {
    return (
        <div className='flex flex-col justify-center items-center  '>
            <p className='text-white/60 font-thin '>{text}</p>
            <p className='text-white font-bold'>${price}{Billion && "B"}</p>
            <p className={` font-semibold ${percent > 0 ? "text-green-500" : "text-red-500" }`}>{percent}%</p>
          </div>
    );
};

export default HeaderItem;