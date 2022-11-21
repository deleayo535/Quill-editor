// import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const openMail = () => {
    selectMail({
      // id,
      title,
      subject,
      description,
      time,
    });
    navigate("/mail");
  };

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
    </div>
  );
}

export default EmailRow;
