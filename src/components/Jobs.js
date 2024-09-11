import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        setJobs((prevJobs) => [...prevJobs, ...response.data.jobs]);
      } catch (error) {
        setError('Error fetching jobs.');
      }
      setLoading(false);
    };

    fetchJobs();
  }, [page]);

  const bookmarkJob = (job) => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    const isJobBookmarked = storedBookmarks.some((storedJob) => storedJob.id === job.id);
    if (!isJobBookmarked) {
      const updatedBookmarks = [...storedBookmarks, job];
      localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedBookmarks));
      alert('Job bookmarked!');
    } else {
      alert('This job is already bookmarked.');
    }
  };

  const loadMoreJobs = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Jobs</h1>
      {loading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.phone}</p>
          <button onClick={() => bookmarkJob(job)}>Bookmark</button>
        </div>
      ))}
      <button onClick={loadMoreJobs}>Load More Jobs</button>
    </div>
  );
};

export default Jobs;
