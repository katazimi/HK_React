import logo from './logo.svg';
import './App.css';
import R01_JSXBasic from './components/R01_JSXBasic';
import R02_Component, { R02_ComponentClass } from './components/R02_Component';
import R03_Props, { R03_Props2, R03_Props3 } from './components/R03_Props';

function App() {
//바벨: jsx문법을 가능하게 해주는 기능제공
const divStyle = {
  border: "1px solid grey", 
  borderRadius: "12px",
  padding: "16px", 
  marginButtom: "24px"
};

  return (
    <div className="App" style={{maxWidth:700, margin: "50px auto"}}>
     <h1>리액트 사용하기</h1>
     <div style={divStyle}>
      <h1>1.JSX 문법 사용하기</h1>
      <R01_JSXBasic />
     </div>

     <div style={divStyle}>
      <h1>2.Component 사용하기</h1>
      <R02_Component />
      <R02_ComponentClass />
     </div>
    
    <div style={divStyle}>
      <h1>3.Props 사용하기</h1>
      <R03_Props name="kang" age={25}/>
      <R03_Props2 name="park" age={30}/>
      <R03_Props3 name="kim" age={35}/>
     </div>

    </div>
  );
}

export default App;
