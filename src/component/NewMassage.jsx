import React, {useState} from "react"
import './css/newmassage.css';
import { useSelector } from "react-redux";
import Massage from "./Massage";
import Form from "./Form/Form";

const NewMassage=()=>{

    const [data,setData]=useState({isEdit:false, value:'', itemId:null})

    const allMassage=useSelector((state)=>state.crudReducer)
   
    return(
        <>
        <div className="container-fluid mt-4">
            <h1 className="text-center text-success p-2 ">Todo List</h1>
            <Form data={data} setData={setData}/>            
            <div>
                {
                    allMassage.length !=0 && allMassage.map((ele, index)=>{
                        return (<Massage key={ele.id} ele={ele} setData={setData} data={data} index={index}/>)
                    })
                }
            </div>
        </div>
        </>
    );
}

export default NewMassage;