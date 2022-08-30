# Vite-plugin-simple-env

easier to get environment variables in vite

## Install

```bash
npm i @justichentai/vite-plugin-simple-env -D
```

## Usage

exmaple

in `package.json`

```json
{
  "scripts": {
    "dev:h5": "vite",
    "dev:pc": "vite",
  },
}
```

run script

```bash
npm run start:h5
```

when you want to use env anywhere

`vite.config.ts`

```ts
import simpleEnv from '@justichentai/vite-plugin-simple-env'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [simpleEnv({
    key: 'PAGE',
    configKey: 'myConfig',
    cb: ({ env, event, script }) => {
      return {
        ...myRes
      }
    }
  })],
})

// process.env.PAGE = 'h5' / 'pc'
// vite config : {
//   myConfig: {
//		env: 'h5' / 'pc',
//		event: 'start',
//		script: 'vite'
//	 }
//	 ...myRes	
// }
//
// but you can not use it in this file beacause plugins execute after vite.config.ts
```

when you just want to use it in `vite.config.ts`

```ts
import { parseScriptCommand } from '@justichentai/vite-plugin-simple-env'

const { env, event, script } = parseScriptCommand()
```

## Api

```ts
interface Options {
  key: string;         // process.env[key]
  configKey: string;   // key which you mount it in vite config 
  cb: (options: {      // callblack that you can set vite config custom
    env: string;     // Environment variables
    event: string;   // string before event:env
    script: string;  // script content
  }) => any;           // vite config you want to callback
}

function simpleEnv(options: Options): any;

function parseScriptCommand(): {
  env: string;    // scrpit env like: h5
  event: string;  // scrpit event like: dev
  script: string; // scrpit content like: vite --host
}
```
