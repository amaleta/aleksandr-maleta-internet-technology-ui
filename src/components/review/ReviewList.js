import React from 'react'
import {
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    Filter,
    List,
    NumberField,
    TextField,
    TextInput,
} from 'react-admin'

const ListFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Filter by driverId" source="driverId" alwaysOn />
      <TextInput label="Filter by rating" source="rating" alwaysOn />
    </Filter>
);

const ReviewList = (props) => {
  return (
      <List filters={<ListFilter />} {...props}>
      <Datagrid>
        <NumberField source='id' />
        <NumberField multiline source='customerId'/>
        <NumberField source='orderId'/>
        <TextField source='reviewText'/>
        <NumberField source='rating'/>
        <DateField source='reviewDate'/>
        <EditButton basePath='/review' />
        <DeleteButton basePath='/review' />
      </Datagrid>
    </List>
  )
}

export default ReviewList
