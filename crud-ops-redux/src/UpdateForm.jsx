import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "./features/Forms";

function UpdateForm() {
  const currentdata = useSelector((state) => state.forms.currentData);
  const activeform = useSelector((state) => state.forms.editMode);
  const [firstname, setfirstname] = useState(currentdata.firstname);
  const [lastname, setlastname] = useState(currentdata.lastname);
  const [gender, setgender] = useState(currentdata.gender);
  const [mobilenumber, setmobilenumber] = useState(currentdata.mobilenumber);
  const [emailid, setemailid] = useState(currentdata.emailid);
  const dispatch = useDispatch();
  const handleUpdateForm = () => {
    const newList = {
      id: currentdata.id,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      mobilenumber: mobilenumber,
      emailid: emailid,
    };
    dispatch(updateForm({ newList }));
  };

  return (
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
          value={activeform ? currentdata.mobilenumber : mobilenumber}
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
          value={activeform ? currentdata.emailid : emailid}
          onChange={(e) => setemailid(e.target.value)}
          required={true}
          maxLength="20"
        />
      </div>
      <button onClick={handleUpdateForm}>Update</button>
    </div>
  );
}

export default UpdateForm;
