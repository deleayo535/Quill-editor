import React, { useEffect, useState } from "react";
import "./EmailList.css";
import EmailRow from "../EmailRow/EmailRow";
import { emailData } from "../temp/EmailData";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft"></div>
        <div className="emailList-settingsRight"></div>
      </div>
      <div className="emailList-sections"></div>

      <div className="emailList-list">
        {emailData.map(({ id, from, subject, message, received }) => (
          <EmailRow
            key={id}
            title={from}
            subject={subject}
            description={message}
            time={received}
          />
        ))}
        <EmailRow
          title="Test"
          subject="Hey fellows!!"
          description="This is a DONE"
          time=""
        />
      </div>
    </div>
  );
}

export default EmailList;
