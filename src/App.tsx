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
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-center">
            <img alt="logo" src={process.env.PUBLIC_URL + '/logo.png'} className="img-fluid img-thumbnail rounded float-left header-image" />
            <h1 className="card-title text-center text-primary">ETHcode connector</h1>
          </div>
          <div className="card-body">
            <p className="card-text">Use ethcode remix connector to load compiled JSON into ETHcode.</p>
            <p className="card-text">ETHcode extension can deploy compiled JSON to Ethereum Test Networks and Main network.</p>
          </div>
        </div>
      </header>
        <div className="card">
          <div className="card-header">
            Compilation result
          </div>
            {compiled && Object.keys(compiled).length > 0 &&
              <div className="card-body">
                <div className="compiledJSON">
                  <pre style={{ width: '90vw', height: '50vh', border: '1px solid #38ffAf' }}>{JSON.stringify(compiled, null, ' ')}</pre>
                </div>
                <button className="btn btn-primary" onClick={handleDeploy}>Deploy on Ethcode</button>
              </div>
            }
            {!compiled && <div className="card-body"><p className="card-text">Please compile a contract first.</p></div>}
        </div>
    </div>
  );
}
export default App;
