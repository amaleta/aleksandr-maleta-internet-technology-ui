import React from 'react'
import {DateInput, Edit, NumberField, SimpleForm, TextInput} from 'react-admin'

const ParcelEdit = (props) => {
    return (
        <Edit title='Edit Parcel' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <TextInput source='weight'/>
                <TextInput multiline source='length'/>
                <TextInput source='width'/>
                <TextInput source='height'/>
                <TextInput source='senderAddress'/>
                <TextInput source='recipientAddress'/>
                <DateInput source='deliveryDate'/>
                <DateInput source='sentDate'/>
            </SimpleForm>
        </Edit>
    )
}

export default ParcelEdit
