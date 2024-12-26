import React, { useState } from 'react';
function Button() {
    // let count =0;
    // const handleClick = (name) => {
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    const [buttonText, setButtonText] = useState("Click me");
    const handleClick = () => {
        if (buttonText === "Click me") {
            setButtonText("Good Job"); // Cập nhật nội dung thành "Good Job"
        } else {
            setButtonText("Click me"); // Cập nhật lại nội dung thành "Click me"
        }
    }
    const handleClick2 = (e) => e.target.textContent = "Good Job";
    return (
        <>
            <button onClick={handleClick}>{buttonText}</button>

            <button onClick={handleClick2} >click me</button>


        </>


    );

}
export default Button