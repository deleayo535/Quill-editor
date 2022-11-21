import React, { useEffect, useState } from "react";
import "./Mail.css";
// import Section from "../Section/Section";
import EmailRow from "../EmailRow/EmailRow";
import { draftData } from "../temp/DraftData";

function Draft() {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft"></div>
        <div className="emailList-settingsRight"></div>
      </div>
      <div className="emailList-sections"></div>

      <div className="emailList-list">
        {draftData.map(({ from, subject, message, received }) => (
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

export default Draft;
