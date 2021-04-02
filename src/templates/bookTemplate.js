
import React from 'react'
import Layout from "../components/layout"

const BookTemplate = (props) => {
  // console.log(props.pageContext)
  return (
    <Layout>
      <img src={props.pageContext.imageUrl} alt="Book cover" />
      {props.pageContext.title} - {props.pageContext.author.name}
    </Layout>
  )
}

export default BookTemplate