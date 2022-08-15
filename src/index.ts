import parseScriptCommand from './utils/parseScriptCommand'

/**
 * 挂载到 process.env[key]
 */
export interface Options {
  key: string
}

export default function simpleEnv(key = 'PAGE'): any {
  const { env } = parseScriptCommand()

  return {
    name: 'vite-plugin-simple-env',
    enforce: 'pre',
    config: () => ({
      define: {
        'process.env': JSON.stringify({
          [key]: env,
        }),
      },
    }),
  }
}
