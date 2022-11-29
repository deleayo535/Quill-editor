import React from "react";
import "./Mail.css";
import { useNavigate } from "react-router-dom";
import {
  selectOpenMail,
  deleteMessage,
  removeMessage,
} from "../../features/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons";

function Mail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedMail = useSelector(selectOpenMail);
  // const deletingMail = useSelector(removeMessage);

  const deleteMail = (id) => {
    dispatch(deleteMessage(id));
    navigate("/");
  };

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <ArrowLeftOutlined onClick={() => navigate("/")} />

          <DeleteOutlined onClick={() => deleteMail()} />
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            <h2>{selectedMail?.subject}</h2>
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
