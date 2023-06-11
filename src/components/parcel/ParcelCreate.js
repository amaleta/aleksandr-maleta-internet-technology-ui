import React from 'react'
import {Create, DateInput, SimpleForm, TextInput} from 'react-admin'

const ParcelCreate = (props) => {
    return (
        <Create title='Create a Parcel' {...props}>
            <SimpleForm>
                <TextInput source='weight'/>
                <TextInput multiline source='length'/>
                <TextInput source='width'/>
                <TextInput source='height'/>
                <TextInput source='senderAddress'/>
                <TextInput source='recipientAddress'/>
                <DateInput source='deliveryDate'/>
                <DateInput source='sentDate'/>
            </SimpleForm>
        </Create>
    )
}

export default ParcelCreate
