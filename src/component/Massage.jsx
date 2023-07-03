import React from "react";
import Delete from "../Delete/Delete";
import { Edit } from "../Edit/Edit";

const Massage=({ele, setData, data, index})=>{
    return(
        <div className="text-center fs-3">{ele.text}<Delete id={ele.id}/><Edit editId={index} value={ele.text} setData={setData} data={data}/></div>
    );
}
export default Massage;