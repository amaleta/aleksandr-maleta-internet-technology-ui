import React from 'react'
import {Create, DateInput, NumberInput, SimpleForm} from 'react-admin'

const OrderCreate = (props) => {
    return (
        <Create title='Create an Order' {...props}>
            <SimpleForm>
                <NumberInput multiline source='parcelId'/>
                <NumberInput source='driverId'/>
                <NumberInput source='customerId'/>
                <DateInput source='orderDate'/>
            </SimpleForm>
        </Create>
    )
}

export default OrderCreate
