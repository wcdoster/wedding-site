import React from 'react'
import one from '../../images/1.jpg'
import two from '../../images/2.jpg'
import three from '../../images/3.jpg'
import four from '../../images/4.jpg'
import five from '../../images/5.jpg'
import six from '../../images/6.jpg'
import seven from '../../images/7.jpg'
import eight from '../../images/8.jpg'
import nine from '../../images/9.jpg'
import eleven from '../../images/11.jpg'

export default class MainPage extends React.Component {
    render() {
        return (
            <div id="main-page" >
            {/* // style={{ height: '100%', width: '100%', margin: 0 }}> */}
                <div className="transition"><img className="main-pic" src={one}></img></div>
                <div className="transition"><img className="main-pic" src={two}></img></div>
                <div className="transition"><img className="main-pic" src={three}></img></div>
                <div className="transition"><img className="main-pic" src={four}></img></div>
                <div className="transition"><img className="main-pic" src={five}></img></div>
                <div className="transition"><img className="main-pic" src={six}></img></div>
                <div className="transition"><img className="main-pic" src={seven}></img></div>
                <div className="transition"><img className="main-pic" src={eight}></img></div>
                <div className="transition"><img className="main-pic" src={nine}></img></div>
                <div className="transition"><img className="main-pic" src={eleven}></img></div>
            </div>
        )
    }
}
