import spinner from '../assets/spinner.gif'

function MySpinner() {
  //spinner
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default MySpinner
