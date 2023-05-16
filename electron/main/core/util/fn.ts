import { exec, spawn } from 'node:child_process'
import { extname } from 'path'
/**
 * 检查 Python 是否已安装
 * @returns {Promise<boolean>} - Promise 对象，表示 Python 是否已安装
 */
export function isPythonInstalled() {
  return new Promise((resolve) => {
    exec('python --version', (error) => {
      if (error) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

export function runPythonScript(scriptPath, args) {
  return new Promise((resolve, reject) => {
    const python = spawn('python', [scriptPath, ...args])

    let output = ''

    python.stdout.on('data', (data) => {
      output += data.toString()
    })
    python.stderr.on('data', (data) => {
      console.error(data.toString())
    })
    python.on('close', (code) => {
      if (code === 0) {
        resolve(output)
      } else {
        reject(new Error(`Python script exited with code ${code}`))
      }
    })
    python.on('error', reject)
  })
}
