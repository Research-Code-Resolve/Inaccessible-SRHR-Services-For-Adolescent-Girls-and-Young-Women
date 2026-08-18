// Tracks which lessons a user has opened/read, per module, using localStorage.
// Each module (e.g. "menstrual-health") stores an array of completed lesson ids.

const STORAGE_KEY = "valecare_learning_progress";

const readAll = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeAll = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently
  }
};

// Call this when a user opens/reads a lesson.
export const markLessonComplete = (moduleId, lessonId) => {
  const all = readAll();
  const current = all[moduleId] || [];

  if (!current.includes(lessonId)) {
    all[moduleId] = [...current, lessonId];
    writeAll(all);
  }
};

// Returns { completed: number, total: number } for a given module.
export const getModuleProgress = (moduleId, totalLessons) => {
  const all = readAll();
  const completed = (all[moduleId] || []).length;
  return { completed, total: totalLessons };
};

// Returns the raw progress object for all modules, e.g.
// { "menstrual-health": [1, 2, 3], "nutrition": [1] }
export const getAllProgress = () => readAll();