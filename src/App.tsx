import React from 'react';
import { EthcodePlugin } from './plugin/plugin';
import './App.css';

const client = new EthcodePlugin();

function App() {
  const handleDeploy = () => {
    console.log("Will deploy if compiled....");
    if(client.compiled && Object.keys(client.compiled).length > 0) {
      client.exec();
    }
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        {
          compiledData && <pre>{JSON.stringify(compiledData.data, null, "\t")}</pre>
        }
      </header> */}
      <button onClick={handleDeploy}>Deploy on Ethcode</button>
    </div>
  );
}
export default App;
