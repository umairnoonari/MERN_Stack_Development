import axios from "axios"
import { redirect } from "react-router-dom"
const initailValues=[]
const APIReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case "FETCHDATA":
          axios.get("http://localhost:3001/auth/fetchdata",{
                headers:{
                    'Content-Type':'application/json',
                    'auth-token':localStorage.getItem("User")
                }
            }).then(res=>state=res.data)
            // console.log(state)
            return state
        default:
            return state
    }
}
export default APIReducer