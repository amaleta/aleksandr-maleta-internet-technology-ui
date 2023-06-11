import React from 'react'
import {Datagrid, DeleteButton, EditButton, List, NumberField, TextField,} from 'react-admin'

const DriverList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <TextField source='name'/>
        <TextField multiline source='address'/>
        <TextField source='email'/>
        <NumberField source='phone'/>
        <TextField source='licenseNumber'/>
        <NumberField source='carId'/>
        <EditButton basePath='/driver' />
        <DeleteButton basePath='/driver' />
      </Datagrid>
    </List>
  )
}

export default DriverList
