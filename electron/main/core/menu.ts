import type { BrowserWindow } from 'electron'
import is from 'electron-is'

import { name } from '../../../package.json'

const { app, Menu, shell } = require('electron')
const isMac = process.platform === 'darwin'
export const createElectronMenu = (window: BrowserWindow) => {
  const template = [
    ...(is.macOS()
      ? [
          {
            label: app.name,
            submenu: [
              { role: 'about', label: `关于 ${name}` },
              {
                role: 'preferences',
                label: '设置',
                accelerator: (() => (isMac ? 'CmdOrCtrl+,' : 'Ctrl+,'))(),
                click: () => {
                  window.webContents.send('open-settings')
                },
              },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideothers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' },
            ],
          },
        ]
      : []),
    {
      label: 'Window',
      submenu: [
        { role: 'close' },
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        {
          label: '后退',
          accelerator: 'CmdOrCtrl+[',
          click: () => {
            window.webContents.goBack()
          },
        },
        {
          label: '前进',
          accelerator: 'CmdOrCtrl+]',
          click: () => {
            window.webContents.goForward()
          },
        },
        { role: 'reload' },
        { role: 'forcereload' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { role: 'close' },
      ],
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '日志目录',
          click: async () => {
            const path = app.getPath('logs')
            await shell.openPath(path)
          },
        },
        {
          label: '用户数据',
          click: async () => {
            const path = app.getPath('userData')
            console.log(path)

            await shell.openPath(path)
          },
        },
        // ...(is.dev()
        //   ? [
        //       {
        //         label: '开发者工具',
        //         accelerator: 'F12',
        //         click: () => {
        //           window.webContents.toggleDevTools()
        //         },
        //       },
        //     ]
        //   : []),
        {
          label: '开发者工具',
          accelerator: 'F12',
          click: () => {
            window.webContents.toggleDevTools()
          },
        },
      ],
    },
  ]
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}
