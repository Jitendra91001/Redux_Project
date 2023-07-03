import React from 'react'

export const Edit = ({editId, value, setData}) => {

    function handleEdit()
    {
        setData({isEdit:true, value:value, itemId:editId});
    }

  return (
    <>
    <button className='btn btn-success ms-3' onClick={handleEdit}>Edit</button>
    </>
  )
}
