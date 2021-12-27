import { useSelector } from "react-redux"

export const useAuth = () => {
    const { info_user } = useSelector(state => state.auth);
    return !!info_user.id
}