import React from 'react'
import {Admin, Resource} from 'react-admin'
import CustomerList from './components/customer/CustomerList'
import CustomerCreate from './components/customer/CustomerCreate'
import CustomerEdit from './components/customer/CustomerEdit'
import CarList from './components/car/CarList'
import CarCreate from './components/car/CarCreate'
import CarEdit from './components/car/CarEdit'
import DriverList from "./components/driver/DriverList";
import DriverCreate from "./components/driver/DriverCreate";
import DriverEdit from "./components/driver/DriverEdit";
import OrderCreate from "./components/order/OrderCreate";
import OrderEdit from "./components/order/OrderEdit";
import OrderList from "./components/order/OrderList";
import ParcelList from "./components/parcel/ParcelList";
import ParcelCreate from "./components/parcel/ParcelCreate";
import ParcelEdit from "./components/parcel/ParcelEdit";
import PaymentList from "./components/payment/PaymentList";
import PaymentCreate from "./components/payment/PaymentCreate";
import PaymentEdit from "./components/payment/PaymentEdit";
import ReviewList from "./components/review/ReviewList";
import ReviewCreate from "./components/review/ReviewCreate";
import ReviewEdit from "./components/review/ReviewEdit";
import myDataProvider from "./DataProvider";

function App() {
    return (
        <Admin dataProvider={myDataProvider}>
            <Resource
                name='customer'
                list={CustomerList}
                create={CustomerCreate}
                edit={CustomerEdit}
            />
            <Resource
                name='car'
                list={CarList}
                create={CarCreate}
                edit={CarEdit}
            />
            <Resource
                name='driver'
                list={DriverList}
                create={DriverCreate}
                edit={DriverEdit}
            />
            <Resource
                name='order'
                list={OrderList}
                create={OrderCreate}
                edit={OrderEdit}
            />
            <Resource
                name='parcel'
                list={ParcelList}
                create={ParcelCreate}
                edit={ParcelEdit}
            />
            <Resource
                name='payment'
                list={PaymentList}
                create={PaymentCreate}
                edit={PaymentEdit}
            />
            <Resource
                name='review'
                list={ReviewList}
                create={ReviewCreate}
                edit={ReviewEdit}
            />
        </Admin>
    )
}

export default App
