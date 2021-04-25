import React from 'react';
import { useStateValue } from '../state-api-folder/StateProvider';
import './Product.css';

function Product({id, title, price, image}) {

    const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };


    return (
        <div className="product">
            <div
            className="prod-info"
            >
                <h2>{title}</h2>
            </div>
            {image}
            <div
            className="prod-price"
            >   
                <small>$</small>
                <strong>{price}</strong>
            </div>
            
            <button  onClick={addToBasket}>
                Add to Basket</button>
            
        </div>
    )
}

export default Product;
