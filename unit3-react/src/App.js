import LoginForm from "./LoginForm";

/*import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";*/


function App() {
  let submitted = false; 
  let userName = "";

  function handleOnSubmit(name){ 
    submitted = true; 
    userName = name; 
    console.log(submitted);
  }
  
  return (
    <div className="App">
        {/*<h1>Hello React!</h1>
        <MyComponent/>
        <MyComponent/>
  <MyComponent/>*/}
{
  (!submitted) ? <LoginForm onSubmit={handleOnSubmit}/>: <Greeting name ={userName}/>
}
</div>
  )
}

export default App;
