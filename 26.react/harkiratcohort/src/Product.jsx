import "./Product.css"
import Price from "./price";

function Product({title, feature, idx, id}){
    let oldPrice=["12" ,"1","15"]
    let newPrice=["23", "44", "56"]
    return(
        <div className="product">
            <p>{title}</p>
            <p>{feature}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[id]}/>
        </div>
    );
}

export default Product