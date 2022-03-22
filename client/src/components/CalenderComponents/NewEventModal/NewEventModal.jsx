import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  return(
    <>
      <div id="newEventModal">
        <h2>새 일정</h2>

        <input 
          className={error ? 'error' : ''}
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          id="eventTitleInput" 
          placeholder="일정을 입력하세요." 
        />

        <button 
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }} 
          id="saveButton">저장</button>


        <button 
          onClick={onClose}
          id="cancelButton">취소</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
