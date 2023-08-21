import StudentDetails from '../StudentDetails/StudentDetails'
import './StudentCard.css'

const StudentCard = ({ studentData, bootcampData, highlighted }) => {

    const { name, photo } = studentData

    const cardStyle = {
        backgroundColor: highlighted ? 'green' : 'grey'
    }

    return (

        <article className="StudentCard" style={cardStyle}>

            <img src={photo} alt={name} />

            <StudentDetails
                bootcampData={bootcampData}
                studentData={studentData}
            />

        </article>
    )
}


export default StudentCard