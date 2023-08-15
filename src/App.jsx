import './App.css'
import Course from './components/Course'
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Courses')
      .then((res) => setCourses(res.data))
  }, [])


  const onDelete = (id) => {
    const deleteCourse = courses.filter((Courses) => Courses.id !== id)
    setCourses(deleteCourse)
  }

  return (
    <div>
      <h1>Kurslarım</h1>
      <Course courses={courses} onDelete={onDelete} />
    </div>
  )
}

export default App;