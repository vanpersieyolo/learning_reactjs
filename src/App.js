import {useEffect, useState} from "react";

import ListingData from "./components/ListingData";
import {getAllData} from "./service/DataSerivce.service";

function App() {

    const [item, setItem] = useState([])

    useEffect(() => {
        getAllData().then((res) => {
            setItem(res.data)
        }).catch((error) => {
            console.log(`error`, error);
        })
    })

    return (
        <div>
            <ListingData data={item}/>
        </div>
    );
}

export default App;
