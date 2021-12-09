import React from 'react';

const CostBreakdownItem = ({costTitle, costSubTitle, cost}) => {
    return (
        <div className='payment-cost-item flex'>
          <p>{costTitle}{costSubTitle && ':'} <span>{costSubTitle}</span></p>
          <p>&#8358;{cost}</p>
        </div>
    )
}

export default CostBreakdownItem
