import { CheckoutItemContainer, ImagesContainer, BaseSpan, Quantity, ArrowContainer, ValueContainer, RemoveButtonContainer } from './checkout-item.style.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) =>
{
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart, } = useContext(CartContext);


    const clearItemHandler = () =>
    {
        clearItemFromCart(cartItem);
    }

    const addItemHandler = () => addItemToCart(cartItem);

    const removeItemHandler = () => removeItemFromCart(cartItem);

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