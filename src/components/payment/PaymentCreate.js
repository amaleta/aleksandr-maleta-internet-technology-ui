import React from 'react'
import {Create, DateInput, NumberInput, SimpleForm} from 'react-admin'
import { SelectInput } from 'react-admin';



const PaymentCreate = (props) => {
    return (
        <Create title='Create a Payment' {...props}>
            <SimpleForm>
                <NumberInput source='customerId'/>
                <NumberInput multiline source='orderId'/>
                <DateInput source='paymentDate'/>
                <NumberInput source='amount'/>
                <SelectInput source="paymentMethod" choices={[
                    { id: '0', name: 'CASH' },
                    { id: '1', name: 'CARD' },
                    { id: '2', name: 'PAYPAL' },
                ]} />
            </SimpleForm>
        </Create>
    )
}

export default PaymentCreate
