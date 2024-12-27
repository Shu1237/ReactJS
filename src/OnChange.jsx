
// onChange= event handler used primarily with form Elements
// ex <input>,<textarea>, <select>,<radio>
// Triggers a function every time the value of the input changes

import React, { useState } from 'react'
function MyComponent() {
    const [name, setName] = useState("Guest")
    const [quanlity, setQuanlity] = useState(1);
    const [comment, setCommnet] = useState("");
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function handlNameChange(event) {
        setName(event.target.value);
    }
    function handlQuanlityChange(event) {
        setQuanlity(event.target.value);
    }
    function handlCommentChange(event) {
        setCommnet(event.target.value);
    }
    function handlPaymentChange(event) {
        setPayment(event.target.value)
    }
    function handlShippingChange(event) {
        setShipping(event.target.value)
    }

    return (
        <>
            <div>
                <input value={name} onChange={handlNameChange}></input>
                <p>Name:{name}</p>

                <input value={quanlity} onChange={handlQuanlityChange}></input>
                <p>Quanlity:{quanlity}</p>

                <textarea value={comment} onChange={handlCommentChange} placeholder="Enter delivery instructions"></textarea>
                <p>Comment:{comment}</p>

                <select value={payment} onChange={handlPaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment:{payment}</p>
                <label>
                    <input type='radio' value={'Pick up'}
                        checked={shipping === "Pick up"}
                        onChange={handlShippingChange}></input>
                    Pick up
                </label> <br />
                
                <label>
                    <input type='radio' value={'Delivery'}
                        checked={shipping === "Delivery"}
                        onChange={handlShippingChange}></input>
                    Delivery
                </label>
                <p>Shipping:{shipping}</p>
            </div>
        </>
    )
}
export default MyComponent