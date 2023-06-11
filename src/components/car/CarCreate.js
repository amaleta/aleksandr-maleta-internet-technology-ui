import React from 'react'
import {Create, NumberInput, SimpleForm, TextInput} from 'react-admin'

const CarCreate = (props) => {
  return (
    <Create title='Create a Car' redirect="list" {...props}>
      <SimpleForm>
          <TextInput source='registrationNumber' />
          <TextInput source='model' />
          <NumberInput source='year' />
          <TextInput source='type' />
      </SimpleForm>
    </Create>
  )
}

export default CarCreate
