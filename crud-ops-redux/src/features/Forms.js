import { createSlice } from "@reduxjs/toolkit";

import { FormData } from "../StoredData";

export const formUpdates = createSlice({
  name: "forms",
  initialState: { value: FormData },
  reducers: {
    addForm: (state, action) => {
      state.value.push({ id: state.value.length + 1, ...action.payload });
    },
    deleteForm: (state, action) => {
      state.value = state.value.filter(
        (_, index) => index !== action.payload.index
      );
    },

    updateForm: (state, action) => {
      const newState = state.value.map((data) => {
        if (data.id === action.payload.newList.id) {
          return action.payload.newList;
        }

        return data;
      });

      state.value = newState;
    },
  },
});

export const { addForm, deleteForm, editForm, updateForm } =
  formUpdates.actions;

export default formUpdates.reducer;
