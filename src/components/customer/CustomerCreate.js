import React from 'react'
import {Create, NumberInput, SimpleForm, TextInput} from 'react-admin'

const CustomerCreate = (props) => {
    return (
        <Create title='Create a Customer' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput multiline source='address'/>
                <TextInput source='email'/>
                <NumberInput source='phone'/>
            </SimpleForm>
        </Create>
    )
}

export default CustomerCreate
