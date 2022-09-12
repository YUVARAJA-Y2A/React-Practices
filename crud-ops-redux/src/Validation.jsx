import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addForm, updateForm } from "./features/Forms";
import UpdateForm from "./UpdateForm";

import "./validation.css";

export default function Validation() {
  const activeform = useSelector((state) => state.forms.editMode);
  const dispatch = useDispatch();

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [gender, setgender] = useState();
  const [mobilenumber, setmobilenumber] = useState();
  const [emailid, setemailid] = useState();

  // if (activeform) {
  //   setfirstname(currentdata.firstname);
  //   setlastname(currentdata.lastname);
  //   setgender(currentdata.gender);
  //   setmobilenumber(currentdata.mobilenumber);
  //   setemailid(currentdata.emailid);
  // }

  const onSubmit = () => {
    dispatch(
      addForm({
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        mobilenumber: mobilenumber,
        emailid: emailid,
      })
    );
  };

  // const handleUpdate = () => {};

  return (
    <>
      {activeform ? (
        <UpdateForm />
      ) : (
        <div className="field-container">
          <div className="input-fields">
            <label>First Name</label>
            <input
              name="firstname"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              required={true}
              maxLength="10"
              pattern="/^[A-Za-z]+$/i"
              minLength="3"
            />
          </div>
          <div className="input-fields">
            <label>Last Name</label>
            <input
              name="lastname"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              required={true}
              maxLength="5"
              pattern="/^[A-Za-z]+$/i"
              minLength="1"
            />
          </div>
          <div
            onChange={(e) => setgender(e.target.value)}
            className="input-fields"
            required={true}
          >
            <label>Gender</label>
            <div>
              <input
                name="gender"
                value="Male"
                type="radio"
                checked={gender === "Male"}
              />
              <label>Male</label>
              <input
                name="gender"
                value="Female"
                type="radio"
                checked={gender === "Female"}
              />
              <label>Female</label>
            </div>
          </div>
          <div className="input-fields">
            <label>Mobile Number</label>
            <input
              name="mobilenumber"
              value={mobilenumber}
              onChange={(e) => setmobilenumber(e.target.value)}
              required={true}
              minLength="10"
              maxLength="10"
              pattern="/^[0-9]+$/i"
            />
          </div>
          <div className="input-fields">
            <label>E-mail ID</label>
            <input
              name="emailid"
              value={emailid}
              onChange={(e) => setemailid(e.target.value)}
              required={true}
              maxLength="20"
            />
          </div>
          <button onClick={onSubmit}>Submit</button>
        </div>
      )}
    </>
  );
}
