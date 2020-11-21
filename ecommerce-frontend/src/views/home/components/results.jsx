import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Grid, Segment, Button} from "semantic-ui-react";
import {addToCart,removeToCart} from '../actions/index';

/*Compoennet for Showing the Response of Url*/	
const Results = ({}) => {
    	const {results} = useSelector(state => state.data);
        const dispatch = useDispatch();

        const resultGrid = (resultData) => {
	        let items = [];
	        for (let i = 0; i < resultData.length; i++) {
	             let temp = (
	               <Grid.Column className="results" key={i}>
	                	<Segment className="results-grid">
	                       <h2>Name: {resultData[i].name}</h2>
			               <h2>Price: {resultData[i].price}</h2>
			               <Button onClick={() => dispatch(addToCart(resultData[i]))} className="btn-cart">Add To Cart(+)</Button>
	           	    	<Button onClick={() => dispatch(removeToCart(resultData[i]))} className="btn-cart-neg">Remove From Cart(-)</Button>

	           	    	</Segment>
	                </Grid.Column>

	        );
	        	items.push(temp);
        	} 
        	
        	return items;
		}
          
        return(<div style={{'marginTop':'80px'}}>
               		{results ? (<Grid columns={3}>{resultGrid(results)}</Grid>): 
						(<div style={{'marginLeft':'-80px'}}>No results</div>)
               		}	
                </div>);
}
               
export default Results;