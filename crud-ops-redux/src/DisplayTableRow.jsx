import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteForm, editForm } from "./features/Forms";
import "./displaydata.scss";
export default function DisplayTableRow(props) {
  const dispatch = useDispatch();

  const { id, firstname, lastname, gender, mobilenumber, emailid, index } =
    props;

  const handleEdit = (
    id,
    firstname,
    lastname,
    gender,
    mobilenumber,
    emailid
  ) => {
    dispatch(
      editForm({
        id: id,
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        mobilenumber: mobilenumber,
        emailid: emailid,
      })
    );
  };

  return (
    <div className="table-row-data">
      <label>{id}</label>
      <label>{firstname}</label>
      <label>{lastname}</label>
      <label>{gender}</label>
      <label>{mobilenumber}</label>
      <label>{emailid}</label>
      <div className="table-row-button-group">
        <button
          onClick={() =>
            handleEdit(id, firstname, lastname, gender, mobilenumber, emailid)
          }
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(deleteForm({ index }));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
