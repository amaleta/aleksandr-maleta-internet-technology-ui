import React from 'react'
import {DateInput, Edit, NumberField, NumberInput, SimpleForm, TextInput} from 'react-admin'

const ReviewEdit = (props) => {
    return (
        <Edit title='Edit Review' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <NumberInput multiline source='customerId'/>
                <NumberInput source='orderId'/>
                <TextInput source='reviewText'/>
                <NumberInput source='rating'/>
                <DateInput source='reviewDate'/>
            </SimpleForm>
        </Edit>
    )
}

export default ReviewEdit
