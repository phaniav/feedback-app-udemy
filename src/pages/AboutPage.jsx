import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <Link to='/'>Back to home</Link>
      </div>
    </Card>
  )
}

export default AboutPage
