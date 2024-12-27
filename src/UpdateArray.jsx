import React, { useState } from "react";

function MyComponent() {
    const [foods, setFood] = useState([
        { name: "Make dinner", date: "2021-09-01" },
        { name: "Wash dishes", date: "2021-09-01" },
        { name: "Watch Youtube", date: "2021-09-01" }
    ]);

    function handleAddFood() {
        const newFoodName = document.querySelector(".js-input").value;
        const newFood = { name: newFoodName, date: new Date().toISOString().split('T')[0] };
        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFood(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <h2>List of Foods</h2>
            <div className="todo-input-grid">
                <input className="js-name-input js-input" type="text" placeholder="Enter food name" />
                <input type="date" className="js-date-input js-date" />
                <button className="button-add" onClick={handleAddFood}>Add </button>
            </div>

            <div className="js-todo-list js-div-grid">{foods.map((food, index) => (
                <div className="show-item" key={index}>
                    <div>{food.name}</div>
                    <div>{food.date}</div>
                    <button  className="button-delete" onClick={() => handleRemoveFood(index)}>Delete</button>
                </div>
            ))}
            </div>
            



        </>

    );
}

export default MyComponent;