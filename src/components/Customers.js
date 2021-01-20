import React, { useEffect, useState} from 'react';
import axios from 'axios';

const CUSTOMER_URL = 'http://localhost:3000/customers'

const Customers = () => {

  const [customerList, setCustomerList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    axios.get(CUSTOMER_URL)
    .then((response) => {
      // Get the list of customers
      setCustomerList(response.data)
    })
    .catch((error) => {
      setErrorMsg(error.message);
      console.log(error.message);
    })
  }, []);
  
  const customerListView = customerList.map( customer => {
    return (
      <div>
        <h3>{customer.name}</h3>
        <p>id: {customer.id}</p>
        <p>account credit: {customer.account_credit}</p>
        <p>videos checked out: {customer.videos_checked_out_count}</p>
      </div>
    )
  })
  return (
    <div className='customer'>
      { errorMsg ? <div><h2 className='error-msg'>{errorMsg}</h2></div> : '' }
      <h1>Customers await</h1>
      {customerListView}
    </div>
  );
}

export default Customers;
