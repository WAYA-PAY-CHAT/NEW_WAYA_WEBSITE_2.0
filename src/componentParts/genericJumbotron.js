import '../styles/genericjumbotron.scss'
import Fade from 'react-reveal/Fade';

function GenericJumbotron(props) {
    return (
        <div className="about-jumbotron py-4 mb-4 pl-4 pb-2" style={{ backgroundImage: 'url(/grain.png)' }}>
            <div className="py-4 ml-4 pl-4 row">
                <Fade right cascade>
                    <div className='col-md-9 pt-4 pl-4 mt-4 textArea' style={{
                        backgroundImage: 'url(/chat.png)'
                    }}>
                        <h1 className="">{props.titleText}</h1>
                        <p className='' dangerouslySetInnerHTML={{ __html: props.desc }} />
                    </div>
                </Fade>
            </div>
        </div>


    )
}

export default GenericJumbotron