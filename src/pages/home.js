import '../styles/home.scss'
// import {useState} from 'react'

function Home(){
    return (     
       <div id='homesection'>
            <div className="home-jumbotron py-4 my-4">
                <div className="py-4 row">
                    <div className='col-md-5 pt-4 mt-4'>
                        <h1 className="">WAYA PAYCHAT WAS MADE TO HELP YOUR BUSINESS GROW</h1>
                        <p className=''>Join the group of smart business owners already enjoying faster, smoother and rewarding payment experience on Waya PayChat.</p>
                        <strong className='pb-3'>Download and sign up for free </strong>
                        <div className='row mt-3'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-3'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-3'/>
                        </div>
                    </div>
                    <div className="col">
                        <img src='/full.png' alt='jumbotron'/>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Home