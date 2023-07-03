import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { editData, newmassage } from '../../redux/actions/action';
import {v4 as uuidv4 }from "uuid"

const Form = ({data, setData}) => {

    const dispatch=useDispatch()

    const handleForm=(e)=>{
        e.preventDefault()

        if(data.isEdit)
        {
            dispatch(editData({id:data.itemId, data:data.value}))
            setData({value:'', itemId:null, isEdit:false});
        }
        else
        {
            dispatch(newmassage({text:data.value,id:uuidv4()}))
            setData({...data, value:''})
        }

    }

  return (
    <form onSubmit={handleForm}>
        <input type="text" value={data.value} onChange={(e)=>setData({...data, value:e.target.value})} />
        <button className={`btn ${data.isEdit ? 'btn-warning' : 'btn-success'}`}>{data.isEdit ? 'Save' : 'Add'}</button>
    </form>
  )
}

export default Form