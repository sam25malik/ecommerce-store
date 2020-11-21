import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Input,Dropdown,Button} from "semantic-ui-react";
import {setLimit,setInput,urlGenerator,retrieveProducts,clear,goToCart} from '../actions/index';

/*Search component that has Input and Dropdown*/
const Search = ({}) => {
    const limit = [{'key':'all','value':'all','text':'All'},{'key':'apples','value':'apples','text':'Apples'},{'key':'bananas','value':'bananas','text':'Bananas'},{'key':'pears','value':'pears','text':'Pears'},{'key':'oranges','value':'oranges','text':'Oranges'}];   
    const {inputValue,filterType,added,cart} = useSelector(state => state.data);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(retrieveProducts());
    },[]);

    return (    
        <>
          <div className="container">
            <div className="textStyle">
            <h2>E-Commerce Store</h2>
          	<p className="paraStyle">Select type and Click search to get started</p>
        		</div>
             <Input 
                  onChange={(event) => dispatch(setInput(event.target.value))} 
                  autoComplete="off"
                  placeholder='Enter Full Name of Product'
                  style={{'width':'250px','marginLeft':'-50px'}}
                   value={inputValue}
            />
            <Dropdown 
                  selection
                  options = {limit}
                  className='dropdown-limit'
                  compact
                  onChange={(evenet,data) => dispatch(setLimit(data.value))}
                  value={filterType}/>

              <Button primary onClick={() => dispatch(retrieveProducts())} 
                  className='dropdown-limit'>Search</Button>

              <Button primary onClick={() => dispatch(clear())} 
                  className='dropdown-limit'>Clear</Button>

              <Button primary onClick={() => dispatch(retrieveProducts())} 
                  className='cart-count-btn'>Cart Items: {cart.length}</Button>

              <Button primary onClick={() => dispatch(goToCart(true))} 
                  className='cart-count-btn'>View Cart</Button>
             
              </div>
 		</>);
}


export default Search;