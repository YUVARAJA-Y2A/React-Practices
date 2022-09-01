import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteForm, updateForm } from "./features/Forms";
import "./displaydata.scss";
export default function DisplayTableRow(props) {
  const dispatch = useDispatch();

  const { id, firstname, lastname, gender, mobilenumber, emailid, index } =
    props;
  const [showedit, setshowedit] = useState(false);
  const [firstName, setfirstName] = useState(firstname);
  const [lastName, setlastName] = useState(lastname);
  const [Gender, setGender] = useState(gender);
  const [mobileNumber, setmobileNumber] = useState(mobilenumber);
  const [emailId, setemailId] = useState(emailid);
  const handleEdit = () => {
    setshowedit(!showedit);
  };
  const handleUpdate = () => {
    const newList = {
      id: id,
      firstname: firstName,
      lastname: lastName,
      gender: Gender,
      mobilenumber: mobileNumber,
      emailid: emailId,
    };
    dispatch(updateForm({ newList }));
    setshowedit(!showedit);
  };

  return (
    <div className="table-row-data">
      <label>{id}</label>
      {!showedit && (
        <>
          <label>{firstname}</label>
          <label>{lastname}</label>
          <label>{gender}</label>
          <label>{mobilenumber}</label>
          <label>{emailid}</label>
        </>
      )}
      {showedit && (
        <>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <div>
            <select
              name="Gender"
              onChange={(e) => setGender(e.target.value)}
              value={Gender}
              defaultValue={Gender === "Male" ? 1 : 2}
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <input
            type="number"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setmobileNumber(e.target.value)}
          />

          <input
            type="email"
            name="emailId"
            value={emailId}
            onChange={(e) => setemailId(e.target.value)}
          />
        </>
      )}
      <div className="table-row-button-group">
        {!showedit ? (
          <button onClick={() => handleEdit()}>Edit</button>
        ) : (
          <button onClick={() => handleUpdate()}>Update</button>
        )}
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
