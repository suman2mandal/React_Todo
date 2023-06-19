const Task = ({color,data}) => {
        if(color!==true){
            return <><span className="d-block p-2 text-bg-dark mt-2">{data}</span></>
        }else{
            return <><span className="d-block p-2 text-bg-primary mt-2">{data}</span></>
        }
    
}

export default Task