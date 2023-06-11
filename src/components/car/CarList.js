import React from 'react'
import {Datagrid, DeleteButton, EditButton, Filter, List, NumberField, TextField, TextInput,} from 'react-admin'

const ListFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Year greater than" source="year" alwaysOn />
    </Filter>
);

const CarList = (props) => {
  return (
    <List filters={<ListFilter />} {...props}>
      <Datagrid>
        <NumberField source='id' />
        <TextField source='registrationNumber' />
        <TextField source='model' />
        <TextField source='year' />
        <TextField source='type' />
        <EditButton basePath='/car' />
        <DeleteButton basePath='/car' />
      </Datagrid>
    </List>
  )
}

export default CarList
