import React from "react";
import "./Mail.css";
// import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";
import { useSelector } from "react-redux";
import { InboxOutlined, ArrowLeftOutlined } from "@ant-design/icons";

function Mail() {
  const navigate = useNavigate();

  const selectedMail = useSelector(selectOpenMail);

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
            <h2>{selectedMail?.subject}</h2>
            {/* <LabelImportantIcon className="mail-important" /> */}
          </div>
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>

        <div className="mail-message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
