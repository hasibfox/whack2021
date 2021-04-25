import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStateValue } from '../state-api-folder/StateProvider';

const CheckoutProduct = ( {id} ) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        console.log('sdffsd')
        let z = 10;
        if (z > 19) {
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id:id,
            })
        } else {
            console.log('You do not have enough points to donate')
        }
        
    }
    return (
        <div>
            <DeleteForeverIcon style ={{ cursor:'pointer' }}
            onClick={removeFromBasket}/> 
        </div>
    )
}

export default CheckoutProduct
