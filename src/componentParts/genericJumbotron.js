
function GenericJumbotron(props){
    return (     
        <div className="jumbotron genericJumbotron py-4 mb-1" style={{backgroundImage: 'url(/Ellipse.png)'}}>
        <div className="py-1 row justify-content-center">
            <div className='col-md-5 pt-4 '>
                <h2 className="">{props.mainText}</h2>
                <p className='pt-2'>{props.paragraph}</p>
                <p className='pt-2 lightSupport'>{props.supportText}</p>
            </div>
            <div className="col-md-4">
                <img src={props.imageLink} alt='Waya Phone'/>
            </div>
        </div>
    </div>

      
    )
}

export default GenericJumbotron