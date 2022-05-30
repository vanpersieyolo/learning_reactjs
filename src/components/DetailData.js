import { useLocation } from "react-router-dom";

const DetailData = (props) => {
    const location = useLocation();
    console.log(location)
    return (<div>
        detail
    </div>)
}
export default DetailData