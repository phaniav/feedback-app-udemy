import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ handleSelected }) {
  const [selected, setselected] = useState(10)
  const { feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    setselected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (e) => {
    setselected(+e.target.value)
    handleSelected(+e.target.value)
  }

  return (
    <ul className='rating'>
      <li key='rating-1'>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li key='rating-2'>
        <input
          type='radio'
          id='num2'
          name='rating'
          value='2'
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li key='rating-3'>
        <input
          type='radio'
          id='num3'
          name='rating'
          value='3'
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li key='rating-4'>
        <input
          type='radio'
          id='num4'
          name='rating'
          value='4'
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li key='rating-5'>
        <input
          type='radio'
          id='num5'
          name='rating'
          value='5'
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li key='rating-6'>
        <input
          type='radio'
          id='num6'
          name='rating'
          value='6'
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li key='rating-7'>
        <input
          type='radio'
          id='num7'
          name='rating'
          value='7'
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li key='rating-8'>
        <input
          type='radio'
          id='num8'
          name='rating'
          value='8'
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li key='rating-9'>
        <input
          type='radio'
          id='num9'
          name='rating'
          value='9'
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li key='rating-10'>
        <input
          type='radio'
          id='num10'
          name='rating'
          value='10'
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
    /**
     *  <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
     */
  )
}

export default RatingSelect
