import Store from 'electron-store'

import log from './log'

log.info('[main] init store')

export interface StoreType {
  windowSize: {
    width: number
    height: number
  }
}

const store = new Store<StoreType>({
  defaults: {
    windowSize: {
      height: 720,
      width: 1210,
    },
  },
})

export default store
