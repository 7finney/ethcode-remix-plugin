import { useState, useEffect } from 'react';
import { EthcodePlugin } from './plugin';

export const useEthcodePlugin = (client: EthcodePlugin): Array<EthcodePlugin | any> => {
  const [compiled, setCompiled] = useState<any>();
  useEffect(() => {
    client.onload(() => {
      client.on('solidity', 'compilationFinished', (target: any, source: any, version: any, data: any) => {
        console.log("compilation finished in hooks");
        const res = {
          target,
          source,
          version,
          data
        };
        if (compiled !== res) {
          console.log('compiled !== res');
          console.log(compiled !== res);
          console.log(JSON.stringify(compiled));
          console.log(JSON.stringify(res));
          setCompiled({
            target,
            source,
            version,
            data
          });
        }
      });
    })
  }, []);
  return [client, compiled];
}