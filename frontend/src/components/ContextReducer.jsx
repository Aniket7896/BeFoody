import { createContext, useReducer } from "react"

export const cartContext=createContext();
export const DispatchContext=createContext();

const reducer=(state,action)=>{
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action._id,
          name: action.name,
          price: action.finalPrice,
          quantity: action.quantity,
          size: action.size,
          img: action.img,
        },
      ];
      case "REMOVE":
        let newArr=[...state]
        newArr.splice(action.index,1)
        return newArr;

      case "UPDATE":
        let arr=[...state]
        arr.find((food,index)=>{
          if(food.id===action._id){
            console.log(food.quantity,parseInt(action.quantity),action.finalPrice+food.price)
            arr[index] = { ...food, quantity: parseInt(action.quantity) +food.quantity,price:action.finalPrice+food.price};
          }
          return arr;
        })
        return arr;
        case "DROP":
          let emptyArray=[];
          return emptyArray
    default:
      return state
  }
}
const ContextReducer = ({children}) => {
    const[state,dispatch]=useReducer(reducer,[]);
  return (
    <DispatchContext.Provider value={dispatch}>
      <cartContext.Provider value={state}>{children}</cartContext.Provider>
    </DispatchContext.Provider>
  );
}
export default ContextReducer