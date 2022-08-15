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
  plugins: [simpleEnv('PAGE')],  
})

// process.env.PAGE = 'h5'
// but you can not use it in this file beacause plugins execute after vite.config.ts
```

when you just want to use it in `vite.config.ts`

```ts
import { parseScriptCommand } from '@justichentai/vite-plugin-simple-env'

const { env } = parseScriptCommand()

// env = 'h5'
```

## Api

```ts
function simpleEnv(key?: string): any // default key = PAGE

function parseScriptCommand(): {
  env: string;    // scrpit env like: h5
  event: string;  // scrpit event like: dev
  script: string; // scrpit content like: vite --host
}
```
