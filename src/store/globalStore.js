// IMPORT CONTEXT
import React from 'react';
import axios from 'axios';

// INITIAL STATE
const initialState = {
    data:{},
    loading: true
}
// CREATE CONTEXT AND PASS THE INITIAL STATE
const GlobalStore = React.createContext(initialState);

// CREATE THE GLOBAL STORE PROVIDER, PASS THE CHILDREN

export const ContextProvider = ({children})=>{

// Local State
const [data,setData] = React.useState({});
const [loading, setLoading] = React.useState(true);

// React use Effect
React.useEffect(()=>{
    // COVID DATA END POINT
    let endPoint = 'https://api.covid19api.com/summary';
    // Async Fetch data
    (async function fetchData(url){
    try{
        let res = await axios.get(url);
        let data = res.data;
        if(data){
            console.log(data);
            setTimeout(()=>{
            setData(data);
            setLoading(false);
            }, 1300);
        }
    }catch(error){
        console.error(error);
    }
   
})(endPoint)
   
},[]);


    // RETURN 
    return (
        <GlobalStore.Provider
        value = {{data, loading}}
        >
             {/* Pass the children */}
            {children}
        </GlobalStore.Provider>
    )
}

// DEFAULT EXPORT
export default GlobalStore;

