import React from 'react'
import {Datagrid, DateField, DeleteButton, EditButton, List, NumberField, TextField,} from 'react-admin'

const ParcelList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <TextField source='weight'/>
        <TextField multiline source='length'/>
        <TextField source='width'/>
        <TextField source='height'/>
        <TextField source='senderAddress'/>
        <TextField source='recipientAddress'/>
        <DateField source='deliveryDate'/>
        <DateField source='sentDate'/>
        <EditButton basePath='/parcel' />
        <DeleteButton basePath='/parcel' />
      </Datagrid>
    </List>
  )
}

export default ParcelList
