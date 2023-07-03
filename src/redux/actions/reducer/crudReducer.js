const initialState=[]
const crudReducer=(state=initialState, action)=>{
     switch(action.type){
        case "newMassage":
            return [...state,action.payload]

        case "DeleteData":
            return state.filter(ele=>ele.id!=action.payload.id)

        case "editData":
            let copyState = [...state];
            copyState[action.payload.id].text = action.payload.data; 
            return copyState;

        default:
            return state;
     }
}

export {crudReducer}