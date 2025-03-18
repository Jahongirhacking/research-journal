import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Role } from "../../services/types";
import { login } from "../../store/slices/userSlice";
import { localStorageNames } from "../../utils/storageUtils";

const CallbackPage = () => {
    const token = Cookies.get("token");
    const role = Cookies.get('role') as Role;
    const dispatch = useDispatch();
    localStorage.removeItem(localStorageNames.photo);

    if (token && role) {
        dispatch(login({ token, role }))
        // profile
        if (role === Role.User) return <Navigate to={'/profile'} replace />
        // admin
        if (role === Role.Admin) return <Navigate to={'/admin'} replace />
    }

    return (
        <Navigate to={'/error'} replace />
    )
}

export default CallbackPage