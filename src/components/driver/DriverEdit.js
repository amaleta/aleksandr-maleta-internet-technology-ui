import React from 'react'
import {Edit, NumberField, NumberInput, SimpleForm, TextInput} from 'react-admin'

const DriverEdit = (props) => {
    return (
        <Edit title='Edit Driver' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <TextInput source='name'/>
                <TextInput multiline source='address'/>
                <TextInput source='email'/>
                <NumberInput source='phone'/>
                <TextInput source='licenseNumber'/>
                <NumberInput source='carId'/>
            </SimpleForm>
        </Edit>
    )
}

export default DriverEdit
