import React, { useState } from 'react';

const SuggestionBox = () => {
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Suggestion submitted:', suggestion);
    
    setSuggestion('');
  };

  const login_user = JSON.parse(localStorage.getItem("login_user"));

  return (
    <div class="box">
      <h2>Suggestion Box</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Suggestion:
          <input
            type="text"
            value={suggestion}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
        <br />
        <label>Please give us your suggestions for animals you would like to see listed on this site</label>
      </form>
    </div>
  );
};

export default SuggestionBox;
