import React from 'react'

import bbblogo from '../../images/bbblogo.png'
import candblogo from '../../images/candblogo.png'
import westelm from '../../images/west-elm-1-logo.png'
import amazon from '../../images/amazon_PNG13.png'

import PageHeader from './pageHeader'
import '../style/registry.css'

export default class Registry extends React.Component {
    render() {
        return (
            <div className="page">
                <PageHeader headerName={'Registry'} />
                <br></br>
                <div id="registryCards">
                    <div className="registryCard">
                        <a target="_blank" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548773284?eventType=Wedding">
                            <div>
                                <img src={bbblogo}></img>
                                <p>View Registry at Bed Bath and Beyond</p>
                            </div>
                        </a>

                    </div>
                    <div className="registryCard">
                        <a target="_blank" href="https://www.crateandbarrel.com/gift-registry/meg-schmalandt-and-cole-doster/r6112181">
                            <div>
                                <img src={candblogo}></img>
                                <p>View Registry at Crate&Barrel</p>
                            </div>
                        </a>
                    </div>
                    <div className="registryCard">
                        <a target="_blank" href="https://www.westelm.com/registry/jrspz8g755/registry-list.html">
                            <div>
                                <img src={westelm}></img>
                                <p>View Registry at West Elm</p>
                            </div>
                        </a>
                    </div>
                    <div className="registryCard">
                        <a target="_blank" href="https://www.amazon.com/wedding/meg-schmalandt-cole-doster--august-2020/registry/1PYYXI2K7P1HG">
                            <div>
                                <img src={amazon}></img>
                                <p>View Registry at Amazon</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}