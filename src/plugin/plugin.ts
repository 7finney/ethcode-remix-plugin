import { PluginClient } from '@remixproject/plugin';
import { createClient } from '@remixproject/plugin-webview';

export class EthcodePlugin extends PluginClient {
  callBackEnabled: boolean = false;
  constructor() {
    super();
    createClient(this);
    this.methods = ["exec"];
    this.onload()
      .then(async () => {
        console.log('Ethcode plugin loaded!');
      })
      .catch(async (e) => {
        console.log("ERROR CONNECTING...", e);
      });
  }
  async exec(compiled: any) {
    try {
      this.call('vscodeExtAPI', 'executeCommand', 'ethential.ethcode', 'loadCompiled', [compiled]);
    } catch (error) {
      console.error(error);
    }
  }
}