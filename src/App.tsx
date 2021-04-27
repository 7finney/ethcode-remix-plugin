import React, { useState } from 'react';
import { createClient } from '@remixproject/plugin-webview';
import { EthcodePlugin } from './plugin/plugin';
import './App.css';

interface CompiledData {
  target: string;
  source: any;
  version: string;
  data: any;
}
// const pluginOpts: Partial<PluginOptions<Readonly<IRemixApi>>> = {}

function App() {
  const [compiledData, setCompiled] = useState<CompiledData>();
  const client = new EthcodePlugin();
  client.onload(() => {
    console.log('Ethcode Remix Plugin loaded....');
    // client.on('solidity', 'compilationFinished', (target: any, source: any, version: any, data: any) => {
    //   console.log("compile finished", target, source, version,  data);
    //   setCompiled({
    //     target,
    //     source,
    //     version,
    //     data
    //   });
    // })
  })
  const handleDeploy = () => {
    if(compiledData && Object.keys(compiledData).length > 0) {
      console.log("Will deploy....");
      console.log(compiledData.data);
      // Call ethcode extension to load deploy data
      // client.call('solidity', 'compile', compiledData.data);
      // client.call('extension-api', 'deploy');
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
