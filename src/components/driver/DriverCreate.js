import React from 'react'
import {Create, NumberInput, SimpleForm, TextInput} from 'react-admin'

const DriverCreate = (props) => {
    return (
        <Create title='Create a Driver' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput multiline source='address'/>
                <TextInput source='email'/>
                <NumberInput source='phone'/>
                <TextInput source='licenseNumber'/>
                <NumberInput source='carId'/>
            </SimpleForm>
        </Create>
    )
}

export default DriverCreate
