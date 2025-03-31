export default function Price({oldPrice , newPrice}){

    let oldStyles = {
        textDecoration: "line-through"
    };

    let newStyles = {
        fontWeight: "bold"
    };

    let styles = {
        backgroundColor : " #E6C76A" ,
        height : "30px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
    }
    
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;  
            <span style={newStyles}>{newPrice}</span>   
        </div>
    );
}