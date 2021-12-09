import React from 'react';
import CostBreakdownItem from '../../custom/CostBreakdownItem/CostBreakdownItem';
import costBreakownItemData from '../../../constants/costBreakownItemData';
import './CostBreakdown.styles.css';

const CostBreakdown = () => {
    return (
        <div>
            <div className='payment-cost-section'>
                {costBreakownItemData.map(({costTitle, costSubTitle, cost}, idx) => (
                    <CostBreakdownItem costTitle={costTitle} cost={cost} costSubTitle={costSubTitle} key={idx} />
                ))}
                
            </div>

            <hr/>

            {/* totalcost */}
            <div className='flex'>
                <div>
                    <button id='complete-payment-btn'>Complete Payment</button>
                </div>
                <div id='total'>
                    <p>Total: &#8358;2556.64</p>
                </div>
            </div>
        </div>
    )
}

export default CostBreakdown
