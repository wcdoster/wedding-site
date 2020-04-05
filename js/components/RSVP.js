import React from 'react'

import PageHeader from './pageHeader'

export default class RSVP extends React.Component{
    render(){
        return(
            <div className="page">
                <PageHeader headerName={'RSVP'} />
            </div>
        )
    }
}