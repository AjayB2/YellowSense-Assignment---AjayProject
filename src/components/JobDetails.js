import React from 'react';

const JobDetails = ({ job }) => {
  if (!job) {
    return <p>No job details available.</p>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.phone}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
