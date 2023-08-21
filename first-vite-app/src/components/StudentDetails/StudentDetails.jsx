const StudentDetails = ({ studentData, bootcampData }) => {

    const { name } = studentData
    const { campus, product, date } = bootcampData

    return (
        <>
            <p>{name}</p>
            <p>Alumn@ del Bootcamp de {product}</p>
            <p>Campus de {campus} ({date})</p>
        </>
    )
}

export default StudentDetails