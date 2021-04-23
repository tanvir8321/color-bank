import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Count/> */}
        <Api/>
      </header>
    </div>
  );
}


function Api(){
  const profileContainerStyled = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  }
  const profileStyled = {
    border: '1px solid yellow',
    padding: '20px'
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/products/')
    .then(res => res.json())
    .then(data => setUsers(data.data))
    
  },[])
  return(
    <div style={profileContainerStyled}>
      {
        users.map(user => 
          <div style={profileStyled}>
            <h1>{user.name}</h1>
            <h3>{user.year}</h3>
            <h3>{user.color}</h3>
            <span style={{backgroundColor: user.color, display: 'block', height: '50px'}}></span>
          </div>
        )
      }
    </div>
  )
}


// function Count(){
//   const buttonSyled = {
//     padding: '10px 25px',
//     fontSize: '25px',
//     backgroundColor: 'gray'
//   }
//   const [count, setCount] = useState(0);
//   const negativeButtonHandler = () => {
//     if(count > 0){
//       setCount(count - 1);
//     }
//   };
//   const positiveButtonHandler = () => setCount(count + 1);
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button style={buttonSyled} onClick={negativeButtonHandler}>-</button>
//       <button style={buttonSyled} onClick={positiveButtonHandler}>+</button>
//     </div>
//   )
// }

export default App;
