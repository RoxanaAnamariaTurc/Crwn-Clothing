import { CheckoutItemContainer, ImagesContainer, BaseSpan, Quantity, ArrowContainer, ValueContainer, RemoveButtonContainer } from './checkout-item.style.jsx';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItem }) =>
{
    const { name, imageUrl, price, quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    // const { clearItemFromCart, addItemToCart, removeItemFromCart, } = useContext(CartContext);


    const clearItemHandler = () =>

        dispatch(clearItemFromCart(cartItems, cartItem));


    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImagesContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImagesContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <ArrowContainer onClick={removeItemHandler}>
                    &#10094;
                </ArrowContainer>
                <ValueContainer> {quantity} </ValueContainer>
                <ArrowContainer onClick={addItemHandler}>
                    &#10095;
                </ArrowContainer>
            </Quantity>

            <BaseSpan> £{price}</BaseSpan>
            <RemoveButtonContainer onClick={clearItemHandler}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;