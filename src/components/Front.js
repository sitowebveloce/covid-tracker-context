

import Card from './Card';
import Loader from './imgs/loader.gif'
//***** IMPORT GLOBAL CONTEXT */
import React from 'react';
import GlobalStore from '../store/globalStore';

const Front = () => {

    //********** IMPORT (consume) DATA FROM GLOBAL STORE */
    const gStore = React.useContext(GlobalStore);
    // console.log(gStore)

    // RETURN
    return (
        <main>
           {gStore.loading  ?  <img className='loader' src={Loader} alt='loader'></img> :  <Card />}
        </main>
    )
}

export default Front
