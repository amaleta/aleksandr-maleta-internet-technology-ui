import React from 'react'
import {DateInput, Edit, NumberField, NumberInput, SelectInput, SimpleForm, TextInput} from 'react-admin'

const OrderEdit = (props) => {
    return (
        <Edit title='Edit Order' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <NumberInput multiline source='parcelId'/>
                <NumberInput source='driverId'/>
                <NumberInput source='customerId'/>
                <DateInput source='orderDate'/>
                <SelectInput source="status" choices={[
                    { id: '0', name: 'PENDING' },
                    { id: '1', name: 'CREATED' },
                    { id: '2', name: 'IN_DELIVERY' },
                    { id: '3', name: 'DELIVERED' },
                    { id: '4', name: 'CANCELED' }
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
