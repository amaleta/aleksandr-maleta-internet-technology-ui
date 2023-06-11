import React from 'react'
import {
    Datagrid,
    DateField, DateInput,
    DeleteButton,
    EditButton,
    Filter,
    List,
    NumberField,
    TextField,
} from 'react-admin'


const ListFilter = (props) => (
    <Filter {...props}>
      <DateInput label="Filter by from" source="from" alwaysOn />
      <DateInput label="Filter by to" source="to" alwaysOn />
    </Filter>
);
const PaymentList = (props) => {
  return (
      <List filters={<ListFilter />} {...props}>
      <Datagrid>
        <NumberField source='id' />
        <NumberField source='customerId'/>
        <NumberField multiline source='orderId'/>
        <DateField source='paymentDate'/>
        <NumberField source='amount'/>
        <TextField source='paymentMethod'/>
        <EditButton basePath='/payment' />
        <DeleteButton basePath='/payment' />
      </Datagrid>
    </List>
  )
}

export default PaymentList
