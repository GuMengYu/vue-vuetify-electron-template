/* global __static */
import type { BrowserWindow } from 'electron'
import { app, Menu, nativeImage, Tray } from 'electron'
import is from 'electron-is'
import { join } from 'path'

let tray = null
export const createTray = (win: BrowserWindow) => {
  const icon = nativeImage.createFromPath(join(__dirname, '../renderer', is.macOS() ? 'icon/icon.png' : 'icon.ico'))
  tray = new Tray(icon)
  tray.setToolTip('appname')
  const menu = Menu.buildFromTemplate([
    {
      label: '退出',
      click: () => {
        app.quit()
      },
    },
  ])
  tray.setContextMenu(menu)
  handleEvents(tray, win)
}

function handleEvents(tray: Tray, win: BrowserWindow) {
  tray.on('click', () => {
    win.show()
  })
}
