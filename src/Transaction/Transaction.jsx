import React, { useState } from 'react'
import './Transaction.css'

export default function Transaction() {

  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

function addNewTransaction(ev){
  ev.preventDefault();
  const url = process.env.REACT_APP_API_URL + '/transaction';
  // console.log(url);

 const price = name.split(' ')[0];


  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ 
        price,
        name: name.substring(price.length+1),
        description,
        datetime,
       }),
  })
    .then(response => response.json())
    .then(json => {
      // setName('');
      // setDatetime('');
      // setDescription(''); 
      console.log('result', json);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });


}

  return (
    <main>

      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
         <div className='basic'>
            <input type='text'
            value={name}
            onChange={ev=>setName(ev.target.value)}
            placeholder='+200 for new T.V '></input>

            <input value={datetime}
            onChange={ev=>setDatetime(ev.target.value)}
            type='datetime-local'></input>
         </div>

         <div className="description">
          <input type="text"  value={description}  onChange={ev=>setDescription(ev.target.value)}  placeholder='Description'/>
         </div>

         <div>
         <button type='submit' >Add new Transaction</button>
         </div>

         <div className="transactions">

          <div className="transaction">
            <div className="left">
              <div className="name">Samsung TV</div>
              <div className="description">New TV for home</div>
            </div>
            <div className="right">
              <div className="price green">+$200</div>
              <div className="datetime">10-12-2023</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Phone</div>
              <div className="description">Iphone</div>
            </div>
            <div className="right">
              <div className="price red">-$200</div>
              <div className="datetime">10-12-2023</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Samsung TV</div>
              <div className="description">New TV for home</div>
            </div>
            <div className="right">
              <div className="price green">+$200</div>
              <div className="datetime">10-12-2023</div>
            </div>
          </div>
         </div>

      </form>
    </main>
  )
}
