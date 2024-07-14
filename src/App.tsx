import React, {FC} from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import Contacts from "./screens/Contacts/Contacts";
import {Provider} from "react-redux";
import store from "./redux/store";
import Info from "./screens/Info/Info";
import CreateCustomer from "./screens/Info/InfoRequests/CreateCustomer";
import UpdateCustomer from "./screens/Info/InfoRequests/UpdateCustomer";
import DeleteCustomer from "./screens/Info/InfoRequests/DeleteCustomer";
import CreateAccountForCustomer from "./screens/Info/InfoRequests/CreateAccountForCustomer";
import DeleteAccountForCustomer from "./screens/Info/InfoRequests/DeleteAccountForCustomer";
import AddFunds from "./screens/Info/InfoRequests/AddFunds";
import WithdrawFunds from "./screens/Info/InfoRequests/WithdrawFunds";
import SendFunds from "./screens/Info/InfoRequests/SendFunds";


const App: FC<any> = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route path='/info' element={<Info/>}/>
                    <Route path='/about_us' element={<AboutUs/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/create_customer' element={<CreateCustomer/>}/>
                    <Route path='/edit_customer' element={<UpdateCustomer/>}/>
                    <Route path='/delete_customer' element={<DeleteCustomer/>}/>
                    <Route path='/create_account' element={<CreateAccountForCustomer/>}/>
                    <Route path='/delete_account' element={<DeleteAccountForCustomer/>}/>
                    <Route path='/add_funds' element={<AddFunds/>}/>
                    <Route path='/withdraw_funds' element={<WithdrawFunds/>}/>
                    <Route path='/send_funds' element={<SendFunds/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
