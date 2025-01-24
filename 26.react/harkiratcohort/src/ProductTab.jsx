import Product from "./Product"

function ProductTab(){
    let styles={
        display:"spaceBetween",
        justifyContent:"center",
        flexWrap: "wrap"
    }
    return(
        <div style={styles}>
          <Product title="car" feature="red in color" idx={0} id={0}/>
          <Product title="van" feature="red in color" idx={1} id={1}/>
          <Product title="safari" feature="red in color" idx={2} id={2}/>
        </div>
    )
};

export default ProductTab