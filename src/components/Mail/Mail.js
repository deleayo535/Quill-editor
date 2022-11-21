import React from "react";
import "./Mail.css";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";
import { useSelector } from "react-redux";
import { InboxOutlined, ArrowLeftOutlined } from "@ant-design/icons";

function Mail({ id, title, subject, description, time }) {
  const navigate = useNavigate();

  // const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <ArrowLeftOutlined onClick={() => navigate("/")} />

          <InboxOutlined />
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            <h2>{subject}</h2>
          </div>
          <p>{title}</p>
          <p className="mail-time">{time}</p>
        </div>

        <div className="mail-message">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
