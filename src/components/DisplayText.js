import Bar from './Bar'
import React from 'react'

function DisplayText(props) {
    let len = props.items.length;
    let total=[]
    for (let i = 0; i < len; i++) {
        total[i]=<Bar items={props.items[i]} key={i} color={(i%2)-1} deleteThis={(data)=>props.deleteThis(data)} index={i}/>
    }
    return total;
}

export default DisplayText
