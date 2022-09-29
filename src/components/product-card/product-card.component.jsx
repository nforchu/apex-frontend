import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(CartContext);

    const { name, price, imageUrl } = product;

    const addProductHandler = () =>  {
        addItemToCart(product);
        //console.log('wow')
    }
    return (
        <div className="product-card-container">
            <img src={ imageUrl } alt={`${name}`}/>
            <div className="footer">
                <span className="name"> {name}</span>
                <span className="price">{price}</span>
            </div>

            <Button type="inverted" onClick={addProductHandler}>Add to cart</Button>
        </div>
    )
}

export default ProductCard ;