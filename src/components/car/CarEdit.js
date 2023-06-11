import React from 'react'
import {Edit, NumberInput, SimpleForm, TextInput} from 'react-admin'

const CarEdit = (props) => {
  return (
    <Edit title='Edit Car' {...props}>
      <SimpleForm>
          <NumberInput disabled source='id' />
          <TextInput source='registrationNumber' />
          <TextInput source='model' />
          <NumberInput source='year' />
          <TextInput source='type' />
      </SimpleForm>
    </Edit>
  )
}

export default CarEdit
