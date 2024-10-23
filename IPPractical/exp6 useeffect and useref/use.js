import React, { useState, useEffect, useRef } from 'react';

const FetchAndFocus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);

  // useEffect to fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  // Function to focus the input field
  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Fetch Data and Focus Input</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocusInput}>Focus Input</button>
    </div>
  );
};

export default FetchAndFocus;