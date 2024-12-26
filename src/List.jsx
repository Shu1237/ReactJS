import PropTypes  from 'prop-types'
function List(props) {
    // const fruits = [
    //                 { id:1,name: "coconut", calories: 95 },
    //                 { id:2,name: "banana", calories: 45 },
    //                 { id:3,name: "apple", calories: 105 }
    //                 ];
    const listItem = props.items //lấy được array bên app
    const category = props.category;

    //map => tranform an array into another array
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Aphabel
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));  //reverse
    // fruits.sort((a,b)=>a.calories-b.calories); //low => high 
    // fruits.sort((a,b)=>b.calories-a.calories); //high => low

    // const lowCallFruit = fruits.filter((fruit => fruit.calories >= 100))
    // const highCallFruit = fruits.filter(function(fruit){
    //    return fruit.calories<100;
    // })

    //c1
    const listItems = listItem.map(fruit => <li key={fruit.id}>
        {fruit.name}:
        &nbsp;
        <b>{fruit.calories}</b></li>);


    //c2
    // const listItems=  fruits.map(function(fruit){
    //         return <li>{fruit}</li>
    //     });
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-item">{listItems}</ul>
        </>

    )
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
List.defaultProps = {
    category: "Category",
    items: [{ id: 0, name: "Unknown", calories: 0 }]
}
export default List