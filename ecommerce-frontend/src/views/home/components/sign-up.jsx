import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Button, Form } from "semantic-ui-react";
import {signUp} from '../actions/index';

/*Compoennet for Showing the Response of Url*/	
const SignIn = ({}) => {
    	const {results,cart} = useSelector(state => state.data);
        const dispatch = useDispatch();
          
        return(<div className="container">
            <div className="textStyle">
            <center>
            <h2>Login</h2>
          		<Form style={{width:'300px'}}>
			    <Form.Field>
			      <label>Enter Email</label>
			      <input placeholder='Email' />
			    </Form.Field>
			    <Form.Field>
			      <label>Enter Password</label>
			      <input placeholder='Password' />
			    </Form.Field>
			    <Button type='submit' onClick={signUp}>Submit</Button>
			  </Form></center></div></div>);
}
               
export default SignIn;