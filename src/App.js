import './App.css';
import CardList from "./components/CardList/CardList";
import dummyData from "./dummyData/data";
import React, {useEffect, useReducer} from "react";
import {ItemContextDispatch} from "./contexts/ItemContext";
import reducer from "./reducers/ItemReducer";

function App() {
    const [data,dispatch] = useReducer(reducer,dummyData);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => console.log(data))
    },[])

    return (
        <ItemContextDispatch.Provider value={dispatch}>
            <CardList data={data}/>
        </ItemContextDispatch.Provider>
    );
}

export default App;
