import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProblemsList = ({ topicId }) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get(`/api/problems/${topicId}`).then((response) => {
      setProblems(response.data);
    });
  }, [topicId]);

  return (
    <ul>
      {problems.map((problem) => (
        <li key={problem._id}>{problem.title}</li>
      ))}
    </ul>
  );
};

export default ProblemsList;
