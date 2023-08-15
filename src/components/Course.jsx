

function Course({ courses, onDelete }) {


    return (
        <div className="cardDiv">
            {courses.map((Courses) => (
                <div key={Courses.id} className="card">
                    <h2 className='cardTitle'>{Courses.title}</h2>
                    <h4 className='cardPrice'>{Courses.price}</h4>
                    <p>{Courses.content}</p>
                    <button className='cardDeleteBtn' onClick={() => onDelete(Courses.id)}>Sil</button>
                </div>
            ))}
        </div>
    )
}

export default Course;