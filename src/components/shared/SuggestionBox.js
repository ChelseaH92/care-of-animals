import React, { useState, useEffect } from 'react';
import './SuggestionBox.css';

const SuggestionBox = () => {
  const [suggestion, setSuggestion] = useState({});
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [adminUser, setAdminUser] = useState(false);

  useEffect(() => {
    const login_user = JSON.parse(localStorage.getItem('login_user'));
    setAdminUser(login_user.admin);

    fetchSuggestions();
  }, []);

  const handleInputChange = (e) => {
    const newSuggestion = { ...suggestion };
    newSuggestion[`${e.target.name}`] = e.target.value;
    setSuggestion(newSuggestion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const entryToSend = { ...suggestion };

    fetch('http://localhost:8088/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryToSend),
    })
      .then((r) => r.json())
      .then(() => {
        fetchSuggestions();
        setSuggestion({});
      });
  };

  const fetchSuggestions = () => {
    fetch('http://localhost:8088/suggestions')
      .then((response) => response.json())
      .then((data) => setSuggestionsList(data));
  };

  const handleAdminApprove = (suggestionId) => {
    fetch(`http://localhost:8088/suggestions/${suggestionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ approved: true }),
    })
      .then(() => {
        fetchSuggestions();
      });
  };

  const handleAdminDeny = (suggestionId) => {
    fetch(`http://localhost:8088/suggestions/${suggestionId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchSuggestions();
      });
  };

  return (
    <>
      <div className="suggestion-box">
        <h2>Suggestion Box</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Your Suggestion:
            <input
              type="text"
              name="text"
              value={suggestion.text || ''}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
          <br />
          <label>Please give us your suggestions for animals you would like to see listed on this site</label>
        </form>
      </div>

      {adminUser && (
        <div className="admin-suggestions">
          <h3>Suggestions to Review:</h3>
          {suggestionsList.length > 0 ? (
            <ul>
              {suggestionsList.map((suggestion) => (
                <li key={suggestion.id}>
                  {suggestion.text}
                  {!suggestion.approved && (
                    <>
                    <br />
                      <button className="approve-btn" onClick={() => handleAdminApprove(suggestion.id)}>Approve</button>
                      <button className="deny-btn" onClick={() => handleAdminDeny(suggestion.id)}>Deny</button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No suggestions to review.</p>
          )}
        </div>
      )}
    </>
  );
};

export default SuggestionBox;
