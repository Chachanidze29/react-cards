import './App.css';
import CardList from "./components/CardList/CardList";
import React, {useEffect, useReducer} from "react";
import {ItemContextDispatch} from "./contexts/ItemContext";
import reducer from "./reducers/ItemReducer";
import axios from "axios";

function App() {
    const [data,dispatch] = useReducer(reducer,[]);

    useEffect(()=> {
        const fetchData = async ()=> {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            dispatch({
                type:'initialize',
                payload:response.data
            })
        }

        fetchData()
            .catch(err=>console.log(err))
    },[]);

    return (
        <ItemContextDispatch.Provider value={dispatch}>
            <CardList data={data}/>
        </ItemContextDispatch.Provider>
    );
}

export default App;
