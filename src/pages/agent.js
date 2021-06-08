import '../styles/agent.scss'

function Agent(){
    return (     
       <div id='agentsection' >
            <div className="about-jumbotron py-4 mb-4 pl-4 pb-2">
                <div className="py-4 ml-4 pl-4 row justify-content-center">
                    <div className='col-md-6 pt-4 pl-4 mt-4'>
                        <h1 className="">earn more with waya</h1>
                        <p>
                        Earn upto 10 naira for each customer you invite to WayPay</p>
                        <div className='row mt-3'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-3'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-3'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='/operate.png' alt='banner pic'/>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Agent