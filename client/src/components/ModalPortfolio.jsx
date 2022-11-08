import React from "react";

const ModalPortfolio = ({ title, client, description, modalPict, dots, changeDisplay }) => {
  return (
    <>
      <div className="infoModal">
        <div className="titleModal">
          project: <b>{title}</b>
        </div>
        <div className="titleModal">
          client: <b>{client}</b>
        </div>
        <div className="titleModal descModal">
          <b>Description:</b>
          <br />
          {description}
        </div>
      </div>
      <div className="pictsModal">
        <img src={modalPict} alt="" className="imgModal" />
        <div className="bulletNav">
          {dots.map((_, i) => (
            <div className="dot" onClick={()=>changeDisplay(i)} >•</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalPortfolio;
