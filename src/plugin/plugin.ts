import { PluginClient } from '@remixproject/plugin';
import { createClient } from '@remixproject/plugin-webview';

export class EthcodePlugin extends PluginClient {
  callBackEnabled: boolean = false;
  constructor() {
    super();
    this.name = 'ethcode';
    this.methods = ["deploy", "dismiss"];
    // @ts-ignore
    createClient(this);
    this.onload()
      .then(() => {
        console.log('Plugin loaded....');
      })
  }
}