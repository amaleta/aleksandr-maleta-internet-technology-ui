import React from 'react'
import {DateInput, Edit, NumberField, NumberInput, SelectInput, SimpleForm} from 'react-admin'

const PaymentEdit = (props) => {
    return (
        <Edit title='Edit Payment' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <NumberInput source='customerId'/>
                <NumberInput multiline source='orderId'/>
                <DateInput source='paymentDate'/>
                <NumberInput source='amount'/>
                <SelectInput source="paymentMethod" choices={[
                    { id: '0', name: 'CASH' },
                    { id: '1', name: 'CARD' },
                    { id: '2', name: 'PAYPAL' }
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default PaymentEdit
