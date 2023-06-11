import React from 'react'
import {Datagrid, DeleteButton, EditButton, EmailField, List, NumberField, TextField,} from 'react-admin'

const CustomerList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <TextField source='name' />
        <TextField multiline source='address' />
        <EmailField source='email' />
        <NumberField source='phone' />
        <EditButton basePath='/customer' />
        <DeleteButton basePath='/customer' />
      </Datagrid>
    </List>
  )
}

export default CustomerList
