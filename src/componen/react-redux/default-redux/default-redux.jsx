import { useDispatch, useSelector } from "react-redux"
import { getMinus, getPlus } from "../../../APP/actions/action-redux"


const DefaultREdux = () => {
    const { users } = useSelector((state) => state.items)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(getPlus(1))}>Plus +</button>
            <h1>{users}</h1>
            <button onClick={() => dispatch(getMinus(1))}>Minus -</button>
        </div>
    )
}
export default DefaultREdux
