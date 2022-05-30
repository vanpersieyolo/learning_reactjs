import {useLocation} from "react-router-dom";
import {useSelector} from 'react-redux';

const DetailData = (props) => {
    const location = useLocation();
    console.log(location.state.id)

    const hobbyList = useSelector(state => state.hobby.list);
    console.log('Hobby list: ', hobbyList);

    return (<div>
        detail
    </div>)
}
export default DetailData