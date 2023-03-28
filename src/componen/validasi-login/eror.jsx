import "./defaul-login.css";

const ShowEror = ({ errors }) => {
    return (
        <ul>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
export default ShowEror;