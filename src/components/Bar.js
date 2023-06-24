import React from 'react'

function Bar(props) {
  return (
    props.color?
        <div className="p-2 text-bg-primary mb-1 d-flex justify-content-between"><span>{props.items}
        </span><button type="button" className="btn-close" aria-label="Close" onClick={()=>props.deleteThis(props.index)}></button></div>
        :
        <div className="p-2 text-bg-secondary mb-1 d-flex justify-content-between"><span>{props.items}
        </span><button type="button" className="btn-close" aria-label="Close" onClick={()=>props.deleteThis(props.index)}></button></div>
  )
}

export default Bar
