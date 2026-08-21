import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menstrualLessons from "./lessonData";
import "./Learn.css";

const Learn = () => {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(null);

  const openLesson = (lesson) => {
    setActiveLesson(lesson);
  };

  const closeLesson = () => {
    setActiveLesson(null);
  };

  return (
    <div className="learn-page">
      {/* Header */}
      <div className="page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Learn About Your Cycle</h1>
      </div>

      {/* Lesson list view */}
      {!activeLesson && (
        <div className="lesson-list">
          {menstrualLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="lesson-card"
              onClick={() => openLesson(lesson)}
            >
              <h2>{lesson.title}</h2>
              <p>{lesson.summary}</p>
              <span className="read-more">Read more →</span>
            </div>
          ))}
        </div>
      )}

      {/* Lesson detail view */}
      {activeLesson && (
        <div className="lesson-detail">
          <button className="close-button" onClick={closeLesson}>
            ← Back to lessons
          </button>

          <h2>{activeLesson.title}</h2>

          {activeLesson.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Learn;