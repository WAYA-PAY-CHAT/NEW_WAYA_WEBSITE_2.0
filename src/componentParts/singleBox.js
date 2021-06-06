
function SingleBox(props){
    return (     
        <div 
        className='singleBox' 
        style={{backgroundColor: `${props.bgColor}`}}>
            <img src={props.imageName}/>
            <h6>{props.title}</h6>
            <p>{props.body}</p>
        </div>

      
    )
}

export default SingleBox