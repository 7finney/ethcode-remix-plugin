# ETHcode plugin for Remix Vscode
This plugin is used to load [smart contracts compiled JSON](https://docs.soliditylang.org/en/latest/using-the-compiler.html#output-description) from [Remix Vscode](https://github.com/ethereum/remix-vscode) into [ETHcode](https://ethcode.dev/) extension and deploy.

# Deploy
```
docker build -t gcr.io/mathcody/ethcode-remix .
docker run -p 80:80 -it gcr.io/mathcody/ethcode-remix
```