import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressTracker = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios.get('/api/progress').then((response) => {
      setProgress(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Your Progress</h2>
      <ul>
        {progress.map((item) => (
          <li key={item.topicId}>
            {item.topicTitle}: {item.completed}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
