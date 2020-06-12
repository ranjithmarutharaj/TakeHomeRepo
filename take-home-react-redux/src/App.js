import React from 'react';
import axios from 'axios';
import provData from './providerData.json';
//import logo from './logo.svg';
//import './App.css';

export default class App extends React.Component {
  state = {
    serviceData: [],
    providerData:[]
  }

  componentDidMount() {
    let service = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services';
    let provider = provData;
    
    axios.get(service)
      .then(res => {
        //console.log(res);
        const serviceData = res.data.data;
        this.setState({ serviceData }); 
    })

    // axios.get(provider)
    //   .then(res => {
    //     //console.log(res);
        const providerData =provider.data;
        this.setState({ providerData }); 
    // })
  }

  render() {
    return (
      <div>
<div>
  <bold>Control:</bold>
<ul>
       {this.state.serviceData.map(sd => <li>{sd.id}</li>)}
      </ul>
      </div>

      <bold>Results:</bold>
      <div>
      <ul>
       {this.state.providerData.map(pd => <li>{pd.attributes.name}</li>)}
      </ul>
      </div>
      </div>
      )  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
