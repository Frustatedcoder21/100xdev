

function App() {
  

  return (
    <>
      <CardComponent>
      HI There!  {/*   this gets passed to CardComponent */}
     
      </CardComponent>
      
      <CardComponent>
      <div> {/*    this passes an object of the element */}
        Hi ok
      </div>
      </CardComponent>

    </>
  )
}


function CardComponent({children}){
console.log(children)
  return(
     <div style={{border:'1px solid black', padding:'20px',marginBottom:'3px'}}>
      {children}
     </div>
  )
}
export default App
