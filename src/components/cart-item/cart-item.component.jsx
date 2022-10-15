import { CartItemContainer, Image, ItemDetails, Name } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) =>
{
    const { name, imageUrl, quantity, price } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x £{price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;