import parseScriptCommand from './utils/parseScriptCommand'

export interface Options {
  key: string // 挂载到 process.env[key]
  configKey: string // 挂载到 vite config 里
}

export default function simpleEnv(options: Options): any {
  const { key, configKey } = options

  const { env, event, script } = parseScriptCommand()

  return {
    name: 'vite-plugin-simple-env',
    enforce: 'pre',
    config: () => ({
      define: {
        'process.env': JSON.stringify({
          [key]: env,
        }),
      },
      [configKey]: {
        [event]: {
          env,
          script,
        },
      },
    }),
  }
}
