import React from "react";
import Search from './search';
import Results from './results';
import Cart from './cart';
import SignIn from './sign-up';
import { useSelector } from 'react-redux'

/*Home component that has Search and Results Component*/
const Home = ({}) => {
    const {cart_view,signin} = useSelector(state => state.data);
    if(signin==false){
    return (<>
    <center>
       {cart_view ? (<Cart/>):
       (<>
       	<Search/>
       <Results/></>)}
    </center>
    </>)}
   else{
   	return (<SignIn/>)
   }
};

export default Home;