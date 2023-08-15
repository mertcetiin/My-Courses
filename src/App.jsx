import './App.css'
import Course from './components/Course'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchCourses = async () => {
    setLoading(true);
    try {
      await axios.get('http://localhost:3000/Courses')
        .then((res) => setCourses(res.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const onDelete = (id) => {
    const deleteCourse = courses.filter((Courses) => Courses.id !== id)
    setCourses(deleteCourse)
  }


  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {courses.length === 0 ? (
            <div className='refleshDiv'>
              <h2>Kursların Hepsini sildin!</h2>
              <button onClick={fetchCourses}>Reflesh</button>
            </div>
          ) : (<Course courses={courses} onDelete={onDelete} />)}
        </div>
      )}

    </div>
  )
}

export default App;