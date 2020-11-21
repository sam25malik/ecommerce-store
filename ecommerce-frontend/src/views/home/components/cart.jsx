import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Segment, Button} from "semantic-ui-react";
import {goToCart,removeToCart} from '../actions/index';

const Cart = ({}) => {
   	const {cart,total,discount,afterDiscount} = useSelector(state => state.data);
    const dispatch = useDispatch();

    const resultGrid = (resultData) => {
	let items = [];
	for (let i = 0; i < resultData.length; i++) {
	 	let temp = (<Grid.Column className="results" key={i}>
	                	<Segment className="results-grid">
	                       <h2>Name: {resultData[i].name}</h2>
			               <h2>Price: {resultData[i].price}</h2>
			               <Button onClick={() => dispatch(removeToCart(resultData[i]))} className="btn-cart-neg">Remove From Cart</Button>
	           	    	</Segment>
	                </Grid.Column>);
	        	items.push(temp);
        	} 
        	
        	return items;
	}
          
    return(<>
        	<div className="container">
            <div className="textStyle">
            <h2>Your Cart</h2>
          	<h2>Total Price: {total}</h2>
          	<h2>Discount: {discount}</h2>
          	<h2>Total After Discount: {afterDiscount}</h2>
        	</div>
            <Button primary onClick={() => dispatch(goToCart(false))} 
                className='go-to-home'>Go To Home</Button>
            </div>
        	<div style={{'marginTop':'80px'}}>
               		{cart ? (<Grid columns={3}>{resultGrid(cart)}</Grid>): 
						(<div style={{'marginLeft':'-80px'}}>No results</div>)
               		}	
            </div></>);
}
               
export default Cart;