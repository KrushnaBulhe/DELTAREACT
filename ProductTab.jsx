import Product from "./product"


function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };
    
    return (
        <div style={styles}>
            <Product title="Logitech MX master" idx={0}/>
            <Product title="Apple Pencil 2s" idx={1}/>
            <Product title="Zebronics zeb-transformer" idx={2}/>
            <Product title="Portonics keyboard" idx={3}/>
        </div>
    )
}

export default ProductTab ;