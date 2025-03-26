import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../store/slices/userSlice";
import { getLocalStorage, localStorageNames } from "../../utils/storageUtils";

const CallbackPage = () => {
    const token = getLocalStorage(localStorageNames.token);
    const dispatch = useDispatch();

    if (token) {
        dispatch(login({ token }))
        // profile
        return <Navigate to={'/profile'} replace />
    }

    return (
        <Navigate to={'/error'} replace />
    )
}

export default CallbackPage