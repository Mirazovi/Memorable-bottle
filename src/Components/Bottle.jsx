import PropTypes from 'prop-types';
const Bottle = ({bottle,handleClick}) => {
    const {name,price,img} = bottle;
    
    return (
        <div className="border-2 border-green-700 p-5 rounded-xl text-center">
            <h1 className="text-xl font-bold">Title :{name}</h1>
            <img className="py-3 h-[300px] w-[full]" src={img} alt="" />
            <p className="text-xl ">Price : {price}</p>
            <button onClick={()=>handleClick(bottle)} className="text-xl py-2 px-3 rounded-lg text-white text-center bg-violet-700 w-full">Buy Now</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle:PropTypes.object,
    handleClick:PropTypes.func
}
export default Bottle;