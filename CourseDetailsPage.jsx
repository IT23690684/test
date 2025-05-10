import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "../styles/CourseDetailsPage.css";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch(`/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Course not found');
        }
        const data = await response.json();
        setCourse(data);
        
        // Check if user is enrolled
        if (user) {
          const enrollmentResponse = await fetch(`/api/enrollments/${user.id}/${courseId}`);
          if (enrollmentResponse.ok) {
            setIsEnrolled(true);
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId, user]);

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          courseId: courseId,
        }),
      });

      if (response.ok) {
        setIsEnrolled(true);
      }
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger">
          <h2>Course Not Found</h2>
          <p>Sorry, we couldn't find the course you're looking for.</p>
          <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <img
              src={course.imageUrl || '/images/default-course.jpg'}
              className="card-img-top"
              alt={course.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h1 className="card-title">{course.title}</h1>
              <p className="text-muted">Instructor: {course.instructor}</p>
              <p className="card-text">{course.description}</p>
              
              <div className="course-details mt-4">
                <h4>Course Details</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Duration:</strong> {course.duration}
                  </li>
                  <li className="list-group-item">
                    <strong>Price:</strong> ${course.price}
                  </li>
                  <li className="list-group-item">
                    <strong>Level:</strong> {course.level || 'All Levels'}
                  </li>
                </ul>
              </div>

              <div className="course-content mt-4">
                <h4>What You'll Learn</h4>
                <ul className="list-group">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <li key={index} className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">${course.price}</h3>
              {isEnrolled ? (
                <button className="btn btn-success w-100" disabled>
                  Already Enrolled
                </button>
              ) : (
                <button
                  className="btn btn-primary w-100"
                  onClick={handleEnroll}
                >
                  Enroll Now
                </button>
              )}
              
              <div className="mt-3">
                <h5>This Course Includes:</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {course.duration} of video content
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Downloadable resources
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

test 
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test

testtest
test
test
test
test
test


export default CourseDetailsPage;