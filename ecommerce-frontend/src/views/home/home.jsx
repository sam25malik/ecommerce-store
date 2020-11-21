import React from 'react'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import Home from "./components/home";
import configureStore from "./redux/ConfigureStore";

/*Redux store to store the data*/
const store = configureStore(rootReducer, {
        data: {
            results:[],
            type:'newstories',
            filterType:'all',
            inputValue:'',
            cart:[],
            cart_view:false,
            total:0,
            discount:0,
            aferDiscount:0,
            signin:false,
        }
    }
);

const Dashboard = () => (
    <Provider store={store}>
        <Home/>
    </Provider>
);

export default Dashboard