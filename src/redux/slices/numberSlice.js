import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: '',
  storedNumber: '',
  functionOperator: '',
};

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    handleSetDisplayValue: (state, action) => {
      if (state.functionOperator === '') {
        state.storedNumber = '';
      }
      if (!state.number.includes('.') || action.payload !== '.') {
        if (!state.number && action.payload === '.') {
          global.state.number = state.number;
        } else if (state.number === '0' && action.payload !== '.') {
          state.number = `${(state.number + action.payload).replace(/^0+/, '')}`;
        } else {
          state.number += action.payload;
        }
      }
    },

    handleBackButton: (state) => {
      if (state.number) {
        state.number = state.number.slice(0, -1);
      }
    },

    clearDisplayValue: (state) => {
      if (state.number || state.storedNumber || state.functionOperator) {
        state.number = '';
        state.storedNumber = '';
        state.functionOperator = '';
      }
    },

    handleToggleNegative: (state) => {
      if (state.number) {
        state.number = state.number > 0 ? `-${state.number}` : state.number.slice(1);
      } else {
        state.storedNumber =
          state.storedNumber > 0 ? `-${state.storedNumber}` : state.storedNumber.slice(1);
      }
    },

    doMath: (state, action) => {
      switch (state.functionOperator) {
        case '+':
          state.storedNumber = '' + (Number(state.storedNumber) + Number(state.number));
          break;

        case '-':
          state.storedNumber = '' + (Number(state.storedNumber) - Number(state.number));
          break;

        case '*':
          state.storedNumber = '' + Number(state.storedNumber) * Number(state.number);
          break;

        case '/':
          state.storedNumber =
            state.number !== '0'
              ? '' + Number(state.storedNumber) / Number(state.number)
              : 'На ноль делить нельзя';
          break;

        default:
          break;
      }
      state.number = '';
      state.functionOperator = action.payload === '=' ? '' : action.payload;
    },

    handleSetCalcFunction: (state, action) => {
      if (state.number) {
        state.functionOperator = action.payload;
        state.storedNumber = state.number;
        state.number = '';
      }
    },
  },
});

export const {
  handleSetDisplayValue,
  handleBackButton,
  clearDisplayValue,
  handleToggleNegative,
  handleSetStoredValue,
  doMath,
  handleSetCalcFunction,
} = numberSlice.actions;

export default numberSlice.reducer;
