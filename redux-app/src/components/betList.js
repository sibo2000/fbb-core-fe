import React from 'react';
import EditableBet from './editableBet';

const BetList = ({ bets, onRemove }) => (

    <ul>
        {(bets || []).map( (bet) => (
            <EditableBet key={bet._id} bet={bet} onRemove={onRemove}/>
        ))}
    </ul>
)

export default BetList;