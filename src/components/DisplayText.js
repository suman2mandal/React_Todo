import Bar from './Bar'
import React from 'react'

function DisplayText(props) {
    // props.items.map((data,index) => {
    //     <div>{data}</div>
    //     console.log(data);
    // }
    // )
    let len = props.items.length;
    let total=[]
    for (let i = 0; i < len; i++) {
        total[i]=<Bar items={props.items[i]} key={i} color={(i%2)-1}/>
    }
    return total;
}

export default DisplayText
