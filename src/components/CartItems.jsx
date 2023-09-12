const CartItems = ({ count = 0}) => {
    return (
        <div className="position-absolute bg-dark rounded-circle px-2" 
            style={{ top: -6, right: -6}}>
            <span style={{ fontSize: "12px", color: "white" }}>{count}</span>
        </div>
    );
};

export default CartItems;