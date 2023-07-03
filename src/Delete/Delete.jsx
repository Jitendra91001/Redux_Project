import React from "react"
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/actions/action";


const Delete=({id})=>{
    const dispatch=useDispatch()
    return(
        <>
        <button className="btn btn-danger ms-3"onClick={()=>dispatch(deleteData({id:id}))}>Delete</button>
        </>
    );
}
export default Delete;