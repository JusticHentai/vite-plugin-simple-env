import parseScriptCommand from './utils/parseScriptCommand'

/**
 * 挂载到 process.env[key]
 */
export interface Options {
  key: string
}

export default function simpleEnv(options: Options = { key: 'PAGE' }): any {
  const { env } = parseScriptCommand()
  const { key } = options

  return {
    name: 'vite-plugin-simple-env',
    enforce: 'pre',
    config: () => ({
      define: {
        'process.env': JSON.stringify({
          [key]: env,
        }),
      },
      server: {
        port: 8081, // 端口为 8081
      },
    }),
  }
}
