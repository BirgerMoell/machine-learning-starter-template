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
} from './types';

export const clickButton = text => ({
  type: CLICK_BUTTON,
  payload: `the text is${text}`,
});

// send function to clickButton//
export const getTempAction = (values, timestamp, allValues) => ({
  type: GET_TEMP,
  payload: [
    values[0],
    values[1],
    values[2],
    values[3],
    values[4],
    values[5],
    values[6],
    timestamp,
    allValues,
  ],
});

export const addToMarketAction = (volume, price) => ({
  type: ADD_TO_MARKET,
  payload: [volume, price],
});

export const autoSellAction = (marketPrice, autoSaleVolume, autoSalePrice) => ({
  type: AUTO_SELL,
  payload: [marketPrice, autoSaleVolume, autoSalePrice],
});

export const barActiveAction1 = barActiveValue => ({
  type: BAR_ACTIVE1,
  payload: barActiveValue,
});

export const barActiveAction2 = barActiveValue => ({
  type: BAR_ACTIVE2,
  payload: barActiveValue,
});

export const barActiveAction3 = barActiveValue => ({
  type: BAR_ACTIVE3,
  payload: barActiveValue,
});

export const barActiveAction4 = barActiveValue => ({
  type: BAR_ACTIVE4,
  payload: barActiveValue,
});

export const listActiveAction = listActiveValue => ({
  type: LIST_ACTIVE,
  payload: listActiveValue,
});

export const listActiveAction1 = listActiveValue => ({
  type: LIST_ACTIVE1,
  payload: listActiveValue,
});

export const listActiveAction2 = listActiveValue => ({
  type: LIST_ACTIVE2,
  payload: listActiveValue,
});

export const listActiveAction3 = listActiveValue => ({
  type: LIST_ACTIVE3,
  payload: listActiveValue,
});
