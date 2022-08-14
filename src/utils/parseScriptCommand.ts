export interface Result {
  env: string
  event: string
  script: string
}

// 获取路径
const path = {
  event: 'npm_lifecycle_event',
  script: 'npm_lifecycle_script',
}

/**
 * 解析运行脚本的环境变量
 */
export default function parseScriptCommand(): Result {
  const event = process.env[path['event']]
  const script = process.env[path['script']]

  if (!event || !script) {
    console.log('pnpm 版本不是 7.0.0 以上')
    return {
      env: '',
      event: '',
      script: '',
    }
  }

  return {
    env: event.split(':')[1] || '',
    event: event.split(':')[0],
    script,
  }
}
