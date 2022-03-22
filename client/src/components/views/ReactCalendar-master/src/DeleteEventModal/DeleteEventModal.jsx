import React from 'react';

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEventModal">
        <h2>일정</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">삭제</button>
        <button onClick={onClose} id="closeButton">취소</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
