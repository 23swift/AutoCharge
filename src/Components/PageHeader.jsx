import React from 'react'

const PageHeader = (props) => {
    const{title}=props;
    return (
        <div className='pt-3 mb-1'>
            <h3 className='text-primary d-none  d-lg-block fw-bold p-0 mb-0'>{title}</h3> 
            <h5 className='text-primary d-lg-none d-sm-block  fw-bold p-0 mb-0'>{title}</h5> 
            <span className='fw-bold  opacity-75 d-none d-lg-inline'>Autocharge Management System</span>
            <span className='fw-md-bold  opacity-75 d-lg-none'>Autocharge Management System</span>
        </div>
    )
}

export default PageHeader
