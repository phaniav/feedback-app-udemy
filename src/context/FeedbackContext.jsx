import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  //store feedback items from feedback service
  const [feedback, setFeedback] = useState([
    /*  {
      id: 1,
      rating: 10,
      text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 9,
      text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 10,
      text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },*/
  ])

  //identifier if feedback items are being fetched
  const [isLoading, setIsLoading] = useState(true)

  // load feedback items from service on component load
  useEffect(() => {
    fetchFeedbackItems()
  }, [])

  // Call feedback service to fetch feedback items
  const fetchFeedbackItems = async () => {
    //setIsLoading(true)
    const response = await fetch(
      'http://localhost:5000/feedback?_order=id&_sort=asc'
    )
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const response = await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'DELETE',
      })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()

    //newFeedback.id = uuidv4()
    //setFeedback([newFeedback, ...feedback])
    setFeedback([data, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = async (id, updatedFeedbackItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFeedbackItem),
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
