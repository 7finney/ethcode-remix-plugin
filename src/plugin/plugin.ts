import { PluginClient } from '@remixproject/plugin';
import { createClient } from '@remixproject/plugin-webview';

export class EthcodePlugin extends PluginClient {
  callBackEnabled: boolean = true;
  compiled: any = {};
  constructor() {
    super();
    createClient(this);
    this.methods = ["exec"];
    this.onload()
      .then(async () => {
        console.log('Ethcode plugin loaded....');
        await this.setCallBacks();
      })
      .catch(async (e) => {
        console.log("ERROR CONNECTING", e);
      });
  }
  async setCallBacks() {
    this.on('solidity', 'compilationFinished', (target: any, source: any, version: any, data: any) => {
      console.log("Success! compilation finished.");
      this.compiled = {
        target,
        source,
        version,
        data
      };
    })
  }
  async exec() {
    try {
      this.call('vscodeExtAPI', 'exec', 'ethential.ethcode', 'loadCompiled', [this.compiled]);
    } catch (error) {
      console.error(error);
    }
  }
}