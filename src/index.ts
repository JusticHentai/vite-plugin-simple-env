import parseScriptCommand from './utils/parseScriptCommand'

export interface Options {
  key: string // 挂载到 process.env[key]
  configKey: string // 挂载到 vite config 里
  cb: (options: { env: string; event: string; script: string }) => any // 返回给 vite 配置
}

export default function simpleEnv(options: Options): any {
  const { key, configKey, cb } = options

  const { env, event, script } = parseScriptCommand()

  const cbRes = cb({ env, event, script })

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
      ...cbRes,
    }),
  }
}
