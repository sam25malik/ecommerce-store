import axios from "axios";
import {toast} from "react-toastify";

export const setResults = (data) => ({
    type: 'SET_RESULTS',
    data
});

export const setType = (data) => ({
    type: 'SET_TYPE',
    data
});

export const setLimit = (data) => ({
    type: 'SET_LIMIT',
    data
});

export const setInput = (data) => ({
    type: 'SET_INPUT',
    data
});

export const clear = () => ({
    type: 'SET_CLEAR',
});

export const setError = () => ({
    type: 'SET_ERROR',
});

export const addToCart = (data) => ({
    type: 'ADD_TO_CART',
    data
});

export const removeToCart = (data) => ({
    type: 'REMOVE_TO_CART',
    data
});


export const goToCart = (data) => ({
    type: 'GO_TO_CART',
    data
});



export const loggedIn = (data) => ({
    type: 'LOGGED_IN',
    data
});



export function signUp(email,password) {
    return function (dispatch, getState) {
        let state = getState();
        
        return axios.get(`http://localhost:3000/register`,{
                params:{
                    email:email,
                    password:password
                },
                withCredentials: true
            }
        ).then(response => {
            toast('Signed In');
            dispatch(loggedIn(true));
        }).catch(error => {
               toast('Some Error Occured');
               dispatch(setError());
            });  
}
}

export function signIn(email,password) {
    return function (dispatch, getState) {
        let state = getState();
        
        return axios.get(`http://localhost:3000/signIn`,{
                params:{
                    email:email,
                    password:password
                },
                withCredentials: true
            }
        ).then(response => {
            toast('Signed In');
        }).catch(error => {
               toast('Some Error Occured');
               dispatch(setError());
            });  
}
}



export function retrieveProducts() {
        console.log('retrieveProducts');

    return function (dispatch, getState) {
        let state = getState();
        let value = state.data.inputValue;
        let filterType = state.data.filterType;

        return axios.get(`http://localhost:3000/products`,{
                params:{
                    search: value,
                    type:filterType
                },
                withCredentials: true
            }
        ).then(response => {
                console.log('response',response);
                dispatch(setResults(response.data));
            }).catch(error => {
               toast('Some Error Occured');
               dispatch(setError());
            });  
    }
}



