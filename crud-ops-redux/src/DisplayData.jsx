import React from "react";
import { useSelector } from "react-redux";
import "./displaydata.scss";

import DisplayTableRow from "./DisplayTableRow";
export default function DisplayData() {
  const formList = useSelector((state) => state.forms.value);

  return (
    <div>
      {formList === undefined || !{} ? (
        ""
      ) : (
        <div className="data-list-main">
          <div className="table-head">
            <label>S.No</label>
            <label>First Name</label>
            <label>Last Name</label>
            <label>Gender</label>
            <label>Mobile Number</label>
            <label>E-mail</label>
            <label>Action</label>
          </div>

          {formList.map((dat, index) => (
            <div key={dat.id}>
              <DisplayTableRow
                id={dat.id}
                firstname={dat.firstname}
                lastname={dat.lastname}
                gender={dat.gender}
                mobilenumber={dat.mobilenumber}
                emailid={dat.emailid}
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
