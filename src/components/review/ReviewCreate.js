import React from 'react'
import {Create, DateInput, NumberInput, SimpleForm, TextInput} from 'react-admin'

const ReviewCreate = (props) => {
    return (
        <Create title='Create a Review' {...props}>
            <SimpleForm>
                <NumberInput multiline source='customerId'/>
                <NumberInput source='orderId'/>
                <TextInput source='reviewText'/>
                <NumberInput source='rating'/>
                <DateInput source='reviewDate'/>
            </SimpleForm>
        </Create>
    )
}

export default ReviewCreate
