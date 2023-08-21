import './App.css'
import Button from './Button/Button'
import ChildrenExample from './ChildrenExample/ChildrenExample'
import NavBar from './NavBar/NavBar'
import StudentCard from './StudentCard/StudentCard'
import Title from './Title/Title'
import Player from 'react-player'

const App = () => {

  return (
    <>
      <NavBar />

      <Title text={'Plataforma de alumnos de IH'} />

      <Button link={'/destacados'} text={'Ver alumnos destacados'} />
      <Button link={'/nuevos'} text={'Ver alumnos nuevos'} />
      <Button link={'/repes'} text={'Ver alumnos repetidores'} />

      <Title text={'Listado de alumnos general'} />

      <StudentCard
        studentData={{
          name: 'Germán Álvarez',
          photo: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-2364.jpg'
        }}
        bootcampData={{
          campus: 'Madrid',
          product: 'Web Dev',
          date: 'aug 2023'
        }}
        highlighted={true}
      />

      <StudentCard
        studentData={{
          name: 'Paula Whatever',
          photo: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-2117.jpg'
        }}
        bootcampData={{
          campus: 'Madrid',
          product: 'Data',
          date: 'feb 2024'
        }}
      />

      <StudentCard
        studentData={{
          name: 'Sergi Whatever',
          photo: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-2327.jpg'
        }}
        bootcampData={{
          campus: 'BCN',
          product: 'UX',
          date: 'aug 2023'
        }}
        highlighted={true}
      />

      <Title text={'...y ahora karina'} />
      <Player url={'https://www.youtube.com/watch?v=FginhFF0AKE'} />

      <Title text={'...y ahora los children'} />
      <ChildrenExample>
        <p>Yo soy un hijo anidado</p>
        <p>Yo soy un hijo anidado</p>
      </ChildrenExample>

    </>
  )
}

export default App
