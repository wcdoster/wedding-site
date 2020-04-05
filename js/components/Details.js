import React from 'react'

import barn from '../../images/barn.jpg'
import generalstore from '../../images/generalstore.jpg'
import greendoor from '../../images/greendoor.jpg'

import PageHeader from './pageHeader'
import Map from './Map'


export default class Details extends React.Component {
    render() {
        return (
            <div className="page details">
                <PageHeader headerName={'Details'} />
                <p>Saturday, August 8th, 2020</p>
                <p>Green Door Gourmet</p>
                <p>7007 River Rd Pike</p>
                <p>Nashville, TN 37209</p>

                <p>Ceremony: 5pm </p>
                <p>Dinner + Dancing to follow</p>

                {/* <p><b>**Family, please arrive around 4:15 to take photos**</b></p> */}
                <div id="venue-pics">
                    <img className='picture' src={barn} ></img>
                    <img className='picture' src={greendoor} ></img>
                    <img className='picture' src={generalstore} ></img>
                </div>
                <br></br>
                <br></br>
                <h2 style={{ textAlign: "center" }}>Accommodations</h2>
                <p>We strongly encourage everyone to check out Airbnb or VRBO. There are A LOT in Nashville and we think these will be great options</p>
                <br></br>
                <p>Hotels-wise, we have blocks of rooms at:</p>
                <br></br>
                <p><b>Residence Inn Nashville Green Hills</b></p>
                <p>3807 Cleghorn Ave.</p>
                <p>Nashville, TN 37215</p>
                <p>Schmalandt Doster Wedding</p>
                <p>Click <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1585077776322&key=GRP&app=resvlink" target="_blank">here</a> to book a room.</p>
                <p>Book by July 7</p>
                <br></br>
                <p><b>Hilton Nashville Green Hills</b></p>
                <p>3801 Cleghorn Ave. </p>
                <p>Nashville, TN 37215</p>
                <p>Schmalandt Doster Wedding</p>
                <p>Click <a href="https://secure3.hilton.com/en_US/hi/reservation/book.htm?inputModule=HOTEL&ctyhocn=BNAGRHH&spec_plan=SCHDOS&arrival=20200806&departure=20200809&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank">here</a> to book a room.</p>
                <p>Book by July 7</p>
                <br></br>
                <p><b>**If you are from out of town and in need of a babysitter, we have you covered! Please contact Meg for more details email: mmschmalandt@gmail.com call/text: 630-962-9653**</b></p>
            </div>
        )
    }
}