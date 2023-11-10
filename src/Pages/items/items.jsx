import {Link} from "react-router-dom";


const Items = (Props) => {
    return (
        <>
        <li><Link to = {Props.path} > {Props.text} </Link></li>
        </>
    )
}

export default Items