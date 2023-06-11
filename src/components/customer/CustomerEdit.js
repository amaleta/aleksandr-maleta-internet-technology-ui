import React from 'react'
import {Edit, NumberField, NumberInput, SimpleForm, TextInput} from 'react-admin'

const CustomerEdit = (props) => {
    return (
        <Edit title='Edit Customer' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <TextInput source='name'/>
                <TextInput multiline source='address'/>
                <TextInput source='email'/>
                <NumberInput source='phone'/>
            </SimpleForm>
        </Edit>
    )
}

export default CustomerEdit
