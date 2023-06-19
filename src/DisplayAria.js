import Task from './Task'
import { uniqueId } from 'lodash';

const DisplayAria = ({data,color,changecolor}) => {
    return <div className="mt-5">
        {data.map((items)=>{
            return <Task color={color} key={uniqueId()} data={items}/>
        })}
        
    </div>
}

export default DisplayAria 