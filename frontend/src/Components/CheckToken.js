import { Navigate,Outlet,Route } from "react-router-dom";
const useAuth = () => {
    const token = localStorage.getItem('User');
    return token && token.length != 0;
}
function CheckToken()
{
    const isAuth = useAuth();
    console.log(isAuth)
    return<>
        {isAuth!=null?<Outlet/>:<Navigate to="/signin"/>}
    </>
}
export default CheckToken