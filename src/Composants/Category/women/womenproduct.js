import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

function Prd() {
  return (
    <div className="prd">
      <ShopContextProvider>
        <Shop />
      </ShopContextProvider>
    </div>
  );
}

export default Prd;