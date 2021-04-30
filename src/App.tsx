import React from 'react';
import { useEthcodePlugin } from './plugin/pluginHooks';
import './App.css';
import { EthcodePlugin } from './plugin/plugin';

const cl = new EthcodePlugin();

function App() {
  const [client, compiled] = useEthcodePlugin(cl);
  const handleDeploy = () => {
    if(compiled && Object.keys(compiled).length > 0) {
      client.exec(compiled);
    }
  }
  return (
    <div className="App">
      <header>
        <h2>ETHcode</h2>
        <p>This plugin is used to load compiled JSON (which matches the output JSON specification from solidity) into ETHcode extension.</p>
        <p>ETHcode extension can deploy compiled JSON to Ethereum Test Networks and Main network.</p>
      </header>
      {compiled && Object.keys(compiled).length > 0 &&
        <div className="compiledJSON">
          <pre style={{ width: '90vw', height: '50vh', border: '1px solid #38ffAf' }}>{JSON.stringify(compiled, null, ' ')}</pre>
        </div>
      }
      <button onClick={handleDeploy}>Deploy on Ethcode</button>
    </div>
  );
}
export default App;
