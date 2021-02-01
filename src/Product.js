import "./Product.css";

function Product({name, price, description, url}) {
  return (
    <li className="Product">
      Name: {name}, price: {price}, description:{description}
      <img className="Product-img" src={url} />
    </li>
  );
}

export default Product;
