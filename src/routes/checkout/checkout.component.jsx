import
{
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from './checkout.styles';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';

import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';


const Checkout = () =>
{
    // const { cartItems, cartTotal } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (

        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>


            {
                cartItems.map((cartItem) =>
                {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                })
            }
            <span className='total'>Total: £{cartTotal} </span>
        </CheckoutContainer>
    )
}

export default Checkout;