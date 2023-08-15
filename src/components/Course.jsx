import { useState } from 'react';

function Course({ courses, onDelete }) {

    const [reflesh, setReflesh] = useState('Kursların Hepsini Sildin!')

    return (
        <div>

            {courses.map((Courses) => (
                <div key={Courses.id}>
                    <h1>{Courses.title}</h1>
                    <h3>{Courses.price}</h3>
                    <p>{Courses.content}</p>
                    <button onClick={() => onDelete(Courses.id)}>Sil</button>
                </div>
            ))}
        </div>
    )
}

export default Course;