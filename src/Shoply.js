import {useReducer} from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import rootReducer from "./rootReducer";

function Shoply() {
  const [state, dispatch] = useReducer(
    rootReducer, {products: data.products, cart:{}}
  );
  return (
    <div className="Shoply">
      <ProductList products={state.products} />
    </div>
  );
}

export default Shoply;
