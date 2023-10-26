
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
const CartCount = () => {
    const {numberInCart} = useContext(CartContext);
   
    return (
   <>
   {numberInCart > 0 && ( <div className="relative bg-transparent flex justify-center items-end">
      <div className=" absolute h-[18px] w-[18px]  rounded-full bg-red-600 ">
       <small>{numberInCart}</small>
      </div>
    </div>)}
    </>
  );
};

export default CartCount;
