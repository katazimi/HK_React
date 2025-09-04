import './App.css';
import Counter from './book/Counter';
import MyComponent from './book/MyComponent';
import R01_JSXBasic from './components/R01_JSXBasic';
import R02_Component, { R02_ComponentClass } from './components/R02_Component';
import R03_Props, { R03_Props2, R03_Props3, R03_PropsClass } from './components/R03_Props';
import R04_State, { R04_StateClass } from './components/R04_State';
import R05_Event from './components/R05_Event';
import R06_Loop_list from './components/R06_Loop_list';


function App() {
  //바벨: jsx문법을 가능하게 해주는 기능제공
  const divStyle = {
    border: "1px solid grey",
    borderRadius: "12px",
    padding: "16px",
    marginButtom: "24px"
  };

  return (
    <div className="App" style={{ maxWidth: 700, margin: "50px auto" }}>
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
        <R03_Props name="kang" age={25} />
        <R03_Props2 name="park" age={30} />
        <R03_Props3 name="kim" age={35} />
        <R03_PropsClass name="lee">45</R03_PropsClass>
      </div>

      <div style={divStyle}>
        <h1>4.State 사용하기</h1>
        <R04_State />
        <R04_StateClass />
      </div>

      <div style={divStyle}>
        <h1>5.Event 사용하기</h1>
        <R05_Event />
      </div>

      <div style={divStyle}>
        <h1>6.Loop 사용하기</h1>
        <R06_Loop_list />
      </div>
    </div>
  );
}

export default App;