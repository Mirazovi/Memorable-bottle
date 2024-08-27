import PropTypes from 'prop-types';

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div className="w-[90%] m-auto ">
            <h1 className="text-2xl text-center py-2">Cart :{cart.length}</h1>
            <div className="grid grid-cols-8 gap-4">
                {cart.map((bottle,idx) =>
                <div key={idx}>
                    <img className="" src={bottle.img}></img>
                    <button className='p-1 rounded-lg bg-violet-700 text-xl text-white w-full my-2' onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
                </div>
                )}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart:PropTypes.array,
    handleRemoveCart:PropTypes.func
}
export default Cart;