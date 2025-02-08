import { useCart } from '../app/context/CartContext';

const CartPage = () => {
  const { items, totalPrice, totalItems, dispatch } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart ({totalItems})</h1>
      {items.map(item => (
        <div key={item._id} className="border-b py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h3 className="text-xl">{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item._id })}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 text-xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;