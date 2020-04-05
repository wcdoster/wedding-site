import React from 'react'

const PageHeader = (props) =>{
    return(
        <div className="pageHeader">
            <h2>{props.headerName}</h2>
        </div>
    )
}

export default PageHeader