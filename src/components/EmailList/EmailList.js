import React, { useEffect, useState } from "react";
import "./EmailList.css";
// import Section from "../Section/Section";
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
        {emailData.map(({ from, subject, message, received }) => (
          <EmailRow
            // id={id}
            // key={id}/
            title={from}
            subject={subject}
            description={message}
            time={received}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Hey fellows!!"
          description="This is a DOPE"
          time=""
        />
      </div>
    </div>
  );
}

export default EmailList;
