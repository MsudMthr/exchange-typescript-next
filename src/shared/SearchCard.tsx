import React , {FC} from 'react';
import  Image  from 'next/image';

type SearchCardProps = {
    dataCoin : {
        name : string , 
        image : string ,
        price : number
    } 
}

const SearchCard : FC<SearchCardProps> = ({dataCoin}) => {

    const {name , image , price } = dataCoin

    return (
        <div>
            <Image src={image} alt={name} />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default SearchCard;