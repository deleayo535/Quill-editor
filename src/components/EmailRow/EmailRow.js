// import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useCallback } from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";

function EmailRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  // const deleteMail = () => {
  //   dispatch(
  //     selectMail({
  //       id,
  //     })
  //   );
  //   navigate("/");
  // };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options"></div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}
          {""}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
      {/* <DeleteOutlined onClick={deleteMail} /> */}
    </div>
  );
}

export default EmailRow;
