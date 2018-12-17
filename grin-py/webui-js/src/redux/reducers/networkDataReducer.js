// @flow

import { combineReducers } from 'redux'
import { type Action } from '../types.js'
export const historical = (state: Array<Object> = [], action: Action) => {
  switch (action.type) {
    case 'NETWORK_DATA':
      return action.data.historical
    default:
      return state
  }
}

export const minedBlockAlgos = (state: any = { c29: [], c30: [] }, action: Action) => {
  switch (action.type) {
    case 'MINED_BLOCKS_ALGOS':
      return action.data
    default:
      return state
  }
}

export const latestBlock = (state: Object = {}, action: Action) => {
  switch (action.type) {
    case 'LATEST_BLOCK':
      return action.data.latestBlock
    default:
      return state
  }
}

export const networkData = combineReducers({
  historical,
  minedBlockAlgos,
  latestBlock
})
