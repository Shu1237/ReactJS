
import React, { useState } from "react";
function MyComponent() {
    const [car, setCar] = useState({
                                    year: 2024, 
                                    make: "Food", 
                                    model: "Mustang"
                                    });
    // ...car: spread operator : copy all fiels oject
    // => why use arrow function:allowing allways new value of object
    function hanleYearChange(event){
         setCar(c=>({...c,year:event.target.value}));
        // setCar({...car,year:event.target.value});
    }
    function hanleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));
        // setCar({...car,make:event.target.value});
    }
    function hanleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));
        // setCar({...car,model:event.target.value});
    }
    return (<div>
        <p>Your favorite car is:{car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={hanleYearChange}></input>
        <input type="text" value={car.make} onChange={hanleMakeChange}></input>
        <input type="text" value={car.model} onChange={hanleModelChange}></input>

    </div>)
}

export default MyComponent