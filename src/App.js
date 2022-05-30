import React, {useEffect, useState} from "react";

import ListingData from "./components/ListingData";
import {getAllData} from "./service/DataSerivce.service";

import {BrowserRouter} from "react-router-dom"
import {Route, Routes} from "react-router"
import DetailData from "./components/DetailData";


function App() {

    const [item, setItem] = useState([])

    const fetchAllData = () => {
        getAllData().then((res) => {
            setItem(res.data)
        }).catch((error) => {
            console.log(`error`, error);
        })
    }

    useEffect(() => {
        fetchAllData()
    }, [])

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<ListingData data={item}/>}/>
                    <Route path="/detail" element={<DetailData/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
