import { combineReducers } from 'redux';
import {
  CLICK_BUTTON,
  GET_TEMP,
  ADD_TO_MARKET,
  AUTO_SELL,
  BAR_ACTIVE1,
  BAR_ACTIVE2,
  BAR_ACTIVE3,
  BAR_ACTIVE4,
  LIST_ACTIVE,
  LIST_ACTIVE1,
  LIST_ACTIVE2,
  LIST_ACTIVE3,
} from '../actions/types';

const initialState = {
homeostasis: [
        { Energy: 0.5 },
        { Calmness: 0.5 },
        { Happiness: 0.5 },
        { Love: 0.5 },
        { Brave: 0.5 },
      ],
};
function reducer(state = initialState, action) {
  console.log('action is', action);
  switch (action.type) {
    case CLICK_BUTTON:
      return { ...state, text: action.payload || 0 };
    // For now, don't handle any actions
    // and just return the state given to us.
    case GET_TEMP:
      console.log("I'm in a reducer! reducing!");
      console.log('This is the action:', action);
      return {
        ...state,
        values: action.payload,
        data: [
          { thermocouple: 1, temperature: action.payload[0] },
          { thermocouple: 2, temperature: action.payload[1] },
          { thermocouple: 3, temperature: action.payload[2] },
          { thermocouple: 4, temperature: action.payload[3] },
          { thermocouple: 5, temperature: action.payload[4] },
          { thermocouple: 6, temperature: action.payload[5] },
          { thermocouple: 7, temperature: action.payload[6] },
        ],
        allValues: action.payload[8],
        pressureSensors: [
          { pressuresensor: 1, value: action.payload[8].Pressure_sensor_1 },
          { pressuresensor: 2, value: action.payload[8].Pressure_sensor_2 },
          { pressuresensor: 3, value: action.payload[8].Pressure_sensor_3 },
          { pressuresensor: 4, value: action.payload[8].Pressure_sensor_4 },
        ],
        gasSensors: [
          { gasssensor: 1, value: action.payload[8].Ex_room_CH4_sensor },
          { gasssensor: 2, value: action.payload[8].Ex_room_CO2_sensor },
        ],
      };
    case ADD_TO_MARKET:
      console.log("I'm in ADD_TO_MARKET, reducing!");
      console.log('This is the action:', action);
      return {
        ...state,
        marketPlaceValues: [{ volume: action.payload[0] }, { price: action.payload[1] }],
      };
    case AUTO_SELL:
      console.log("I'm in AUTO SELL, reducing!");
      console.log('This is the action:', action);
      return {
        ...state,
        autoSell: [
          { marketPrice: action.payload[0] },
          { autoSaleVolume: action.payload[1] },
          { autoSalePrice: action.payload[2] },
        ],
      };
      case BAR_ACTIVE1:
      return {
        ...state,
        barActive1: action.payload,
        barActive2: false,
        barActive3: false,
        barActive4: false,
      };

      case BAR_ACTIVE2:
      return {
        ...state,
        barActive1: false,
        barActive2: action.payload,
        barActive3: false,
        barActive4: false,
      };

      case BAR_ACTIVE3:
      return {
        ...state,
        barActive1: false,
        barActive2: false,
        barActive3: action.payload,
        barActive4: false,
      };

      case BAR_ACTIVE4:
      return {
        ...state,
        barActive1: false,
        barActive2: false,
        barActive3: false,
        barActive4: action.payload,
      };

    case LIST_ACTIVE:
      return {
        ...state,
        listActive1: action.payload,
      };
    case LIST_ACTIVE1:
      return {
        ...state,
        listActive1: action.payload,
      };
    case LIST_ACTIVE2:
      return {
        ...state,
        listActive2: action.payload,
      };
    case LIST_ACTIVE3:
      return {
        ...state,
        listActive3: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
