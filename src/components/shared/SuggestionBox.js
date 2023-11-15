import React, { useState } from 'react';

const SuggestionBox = () => {
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the suggestion submission logic here
    console.log('Suggestion submitted:', suggestion);
    // You may want to send the suggestion to a server, update state, etc.
    setSuggestion('');
  };

  return (
    <div>
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
      </form>
    </div>
  );
};

export default SuggestionBox;
