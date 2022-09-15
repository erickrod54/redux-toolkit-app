import { createSlice } from '@reduxjs/toolkit';

/**React-redux toolkit app - version 7  - 'modalSlice' js - 
 * Features:
 * 
 *      --> Bulding the modalSlice and exporting
 *          'reducer' and 'actions'.
 * 
 * Note: the reducer is going to be use to set a value
 * in the 'Store' and the actions to build the functionality
 * to open and close the modal.
 */

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

