import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return (
        <div className="bg-secondary rounded-circle p-2 position-relative">
            <CartIcon color="white" />
            <CartItems count={0} />
        </div>
    );
};

export default CartContainer;