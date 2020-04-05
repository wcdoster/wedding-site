import React from 'react'

import PageHeader from './pageHeader'

export default class Registry extends React.Component{
    render(){
        return(
            <div className="page">
                <PageHeader headerName={'Registry'} />
            </div>
        )
    }
}