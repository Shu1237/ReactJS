// React hook :special funtion that allows functional component to use React 
// features withou writting class components (useStae,useEffect,useContext,useReducer,useCallback,and more)

//useState(): a react hook that allow the creation of stateful variable 
    //AND a setter function to update its value in the virtual DOM 
    //[name,setName]


    import  React,{ useState } from "react";

    function ReactHook(){
        const [name,setName]=useState("Unknown");
        const [age,setAge]= useState(0);
        const [isEmployed,setisEmployed] =useState(false);
        const updateName =()=>{
           if(name==="Shu"){
            setName("Unknown")
           }
           else {
            setName("Shu")
           }
        };
        const incrementAge =()=>{
            setAge (age+1)
        };
        const resetAge =()=>{
            setAge (0)
        };
        const toggleEmployedStatus =()=>{
            setisEmployed(!isEmployed)
        }
        return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={incrementAge}>Increment Age</button>
           

            <p>Is Employed:{isEmployed?"Yes":"No"}</p>
            <button onClick={toggleEmployedStatus}>Change Status</button>
        </div>

        )
    }
    export default ReactHook