import React from 'react'

function Bar(props) {
  return (
    props.color?
        <span className="d-block p-2 text-bg-primary mb-1">{props.items}</span>
        :
        <span className="d-block p-2 text-bg-secondary mb-1">{props.items}</span>
  )
}

export default Bar
