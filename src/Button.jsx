function Button(){

    const syle={
        backgroundColor:"rgba(26, 146, 205, 0.705)" ,
        color: "white",
        borderRadius:" 5px",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
    }

    return (<button style={syle}>click me</button>);  
    // return (<button className="button">click me</button>);
}
export default Button