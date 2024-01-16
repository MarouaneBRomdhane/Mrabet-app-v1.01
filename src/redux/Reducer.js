import { ADDCHEQUESTATMENT } from "./Actiontype"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDCHEQUESTATMENT:
    return { ...state, ...payload }

  default:
    return state
  }
}
