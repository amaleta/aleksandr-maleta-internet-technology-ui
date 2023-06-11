import React from 'react'
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  Filter,
  List,
  NumberField, SelectInput,
  TextField
} from 'react-admin'

const ListFilter = (props) => (
    <Filter {...props}>
        <SelectInput source="status" choices={[
            { id: 'PENDING', name: 'PENDING' },
            { id: 'CREATED', name: 'CREATED' },
            { id: 'IN_DELIVERY', name: 'IN_DELIVERY' },
            { id: 'DELIVERED', name: 'DELIVERED' },
            { id: 'CANCELLED', name: 'CANCELLED' },
        ]} />
    </Filter>
);

const OrderList = (props) => {
  return (
      <List filters={<ListFilter />} {...props}>
      <Datagrid>
        <NumberField source='id' />
        <NumberField multiline source='parcelId'/>
        <NumberField source='driverId'/>
        <NumberField source='customerId'/>
        <DateField source='orderDate'/>
        <TextField source='status'/>
        <EditButton basePath='/order' />
        <DeleteButton basePath='/order' />
      </Datagrid>
    </List>
  )
}

export default OrderList
