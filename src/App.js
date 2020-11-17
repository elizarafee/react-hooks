// import { Component } from 'react';
import React from 'react';
import './App.css';
// import useHook from './components/useHook.component';
// import UseHook from './components/useHook.component';
// import PrevState from './components/prevState.component';
// import UseStateObject from './components/useStateObject.component';
// import UseStateArray from './components/useStateArray.component';
// import UseEffect from './components/useEffect.component';
// import UseEffectRunOnce from './components/useEffectRunOnce.component';
// import UseEffectWithDependency from './components/useEffectWithDependency.component';
// import FetchAllDataFromApi from './components/fetchAllDataFromApi.component';
// import FetchParticularDataFromApi from './components/fetchParticularDataFromApi.component';
// import FetchDataOnButtonClick from './components/fetchDataOnButtonClick';
// import AComponent from './components/a.component';
import UseReducer from './components/useReducer.component';

// export const nameContext = React.createContext();
// export const ageContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseHook /> */}
      {/* <PrevState /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectRunOnce /> */}
      {/* <UseEffectWithDependency />  */}
      {/* <FetchAllDataFromApi /> */}
      {/* <FetchParticularDataFromApi /> */}
      {/* <FetchDataOnButtonClick /> */}
      {/* <nameContext.Provider value={'Eliza Ahmed Rafee'}>
        <ageContext.Provider value={25}>
          <AComponent />
        </ageContext.Provider>
      </nameContext.Provider> */}
      <UseReducer />
    </div>
  );
}

export default App;
