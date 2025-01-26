import React from 'react';

const TopicPage = ({ topic }) => (
  <div>
    <h1>{topic.title}</h1>
    <p>{topic.description}</p>
    <div dangerouslySetInnerHTML={{ __html: topic.visualizations }} />
  </div>
);

export default TopicPage;
