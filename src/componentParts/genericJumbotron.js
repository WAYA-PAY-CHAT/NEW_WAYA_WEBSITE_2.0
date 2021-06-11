import '../styles/genericjumbotron.scss'

function GenericJumbotron(props){
    return (     
        <div className="about-jumbotron py-4 mb-4 pl-4 pb-2" style={{backgroundImage: 'url(/grain.png)'}}>
                <div className="py-4 ml-4 pl-4 row">
                    <div className='col-md-9 pt-4 pl-4 mt-4 textArea' style={{
                        backgroundImage:'url(/chat.png)'
                    }}>
                        <h1 className="">{props.titleText}</h1>
                        <p className=''>Waya PayChat is the new social mobile payment app in Nigeria which combines a financial inclusion and a social solution in one app. By combining a social platform and mobile transactions we want to ease the problems of transactions and people staying connected. With Waya PayChat you can make free calls, chat, socialize, and make transactions seamlessly. With our multiple options for transactions you don’t have to worry about internet access to make payments or receive payments, we have solved that problem for you.
                        </p>
                        <p>
                        We are committed to providing a secure and cashless payment solution that assists our users, merchants, and organizations, to optimize their daily lives and business processes while taking care of their transactions.</p>
                    </div>
                </div>
            </div>

      
    )
}

export default GenericJumbotron