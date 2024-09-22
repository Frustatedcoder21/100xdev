import { useEffect, useMemo, useState } from 'react';

function App() {
  const items=[
    {name:'chocolate',price:'100$'},
    {name:'Bike',price:'1000$'},
    {name:'water',price:'10$'},
    {name:'logins',price:'1$'},
    {name:'air purifier',price:'150$'},
    {name:'laptop',price:'120$'},
    
  ]

  const price=useMemo(()=>{
    let total=0;
    for(let i=0;i<items.length;i++){
      total=total+parseInt(items[i].price);

    }return total;
  })
  return (
    <>
      <div>
        <ul>
        {items.map((item)=>{
          return  <li>{item.name} and price is {item.price}</li>
        })}
        </ul>
        <p>price is {price} $</p>
      </div>
    </>
  );
}

export default App;
