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


  return (
    <div>
      <h1>Kurslarım</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App
