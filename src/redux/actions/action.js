
const newmassage=(data)=>{
    return{
      type:"newMassage",
      payload:{text:data.text,id:data.id}
    }
}

const editData = (data)=>
{
    return {
        type:'editData',
        payload:data
    }
}

const deleteData=(id)=>{
    return{
        type:"DeleteData",
        payload:{id:id.id}
    }
}

export {newmassage,deleteData, editData}