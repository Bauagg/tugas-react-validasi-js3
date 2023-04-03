import { Params, useParams } from "react-router-dom"

const Category = () => {
    const Params = useParams()

    return <h4>ini adalah halaman Category {Params.name}</h4>
}
export default Category