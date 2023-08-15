function Course({ courses }) {

    return (
        <div>
            {courses.map((Courses) => (
                <div key={Courses.id}>
                    <h1>{Courses.title}</h1>
                    <h3>{Courses.price}</h3>
                    <p>{Courses.content}</p>
                    <button>Sil</button>
                </div>
            ))}
        </div>
    )
}

export default Course;