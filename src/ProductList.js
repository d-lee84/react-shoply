import Product from "./Product";

function ProductList({products}) {
  let productList = [];
  for(let objKey in products) {
    productList.push(
      (<Product
        key={objKey}
        name={products[objKey].name} 
        price={products[objKey].price} 
        description={products[objKey].description} 
        url={products[objKey].image_url} />)
    );
  }
  
  return (
    <div className="ProductList">
      <ul>
        {productList}
      </ul>
    </div>
  );
}

export default ProductList;
