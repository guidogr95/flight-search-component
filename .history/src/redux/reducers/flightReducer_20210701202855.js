const initialState = {
    geo: {
      origin: '',
      desination: ''
    },
    date: {
      departure: '',
      toReturn: '',
    },
    passengers: {
      adults: 1,
      children: 0,
      infants: 0
    }
}

export const flightReducer = (state = initialState, action) => {
  switch(action.type){
    case '@geo/update-origin':
      return {
          ...state,
          geo: {
          ...state.geo,
          origin: action.payload
        }
      }
    case '@geo/update-destination':
      return {
          ...state,
          geo: {
          ...state.geo,
          destination: action.payload
        }
      }
    case '@date/update-departure':
      return {
          ...state,
          date: {
          ...state.date,
          departure: action.payload
        }
      }
    case '@date/update-to-return':
      return {
          ...state,
          date: {
          ...state.date,
          toReturn: action.payload
        }
      }
    case '@passengers/update-adults--add':
      return {
          ...state,
          passengers: {
          ...state.passengers,
          adults: returnPlusOne(state.passengers.adults)
        }
      }
    case '@passengers/update-adults--subtract':
      return {
          ...state,
          passengers: {
          ...state.passengers,
          adults: state.passengers.adults > 0 ? returnMinusOne(state.passengers.adults) : 0
        }
      }
      case '@passengers/update-children--add':
        return {
          ...state,
          passengers: {
            ...state.passengers,
            children: returnPlusOne(state.passengers.children)
          }
        }
      case '@passengers/update-children--subtract':
        return {
            ...state,
            passengers: {
            ...state.passengers,
            children: state.passengers.children > 0 ? returnMinusOne(state.passengers.children) : 0
          }
        }
      case '@passengers/update-infants--add':
        return {
          ...state,
          passengers: {
            ...state.passengers,
            infants: returnPlusOne(state.passengers.infants)
          }
        }
      case '@passengers/update-infants--subtract':
        return {
            ...state,
            passengers: {
            ...state.passengers,
            infants: state.passengers.infants > 0 ? returnMinusOne(state.passengers.infants) : 0
          }
        }
    default: 
      return state;
  }
}

// helpers
const returnPlusOne = (val) => val + 1
const returnMinusOne = (val) => val - 1

// action creators
// @geo
export const geoUpdateOrigin = (payload) => {
  return {
    type: '@geo/update-origin',
    payload
  }
}
export const geoUpdateDestination = (payload) => {
  return {
    type: '@geo/update-destination',
    payload
  }
}
// @date
export const dateUpdateDeparture = (payload) => {
  return {
    type: '@date/update-departure',
    payload
  }
}
export const dateUpdateToReturn = (payload) => {
  return {
    type: '@date/update-to-return',
    payload
  }
}
// @passengers
export const passUpdateAddAdults = () => {
  return {
    type: '@passengers/update-adults--add'
  }
}
export const passUpdateSubtractAdults = () => {
  return {
    type: '@passengers/update-adults--subtract'
  }
}
export const passUpdateAddChildren = () => {
  return {
    type: '@passengers/update-children--add'
  }
}
export const passUpdateSubtractChildren = () => {
  return {
    type: '@passengers/update-children--subtract'
  }
}
export const passUpdateAddInfants = () => {
  return {
    type: '@passengers/update-infants--add'
  }
}
export const passUpdateSubtractInfants = () => {
  return {
    type: '@passengers/update-infants--subtract'
  }
}