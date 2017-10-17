import React, { Component } from 'react';
import Editable from './editable';

// class EditableBets extends Component {
//     constructor (props) {
//         super(props)
//     }

//     render() {
//         return <div className="col-sm-12">
//         {
//             (this.props.bets == undefined) ? <div></div> :
//             this.props.bets.map((bet,index) => (
            
//                     <Editable bet={bet} key={index} onRemove={this.props.onRemove} onSave={this.props.onSave}/>
//                 ))
//         }
//         </div>
//     }

// }



const EditableBets = (props) => {
    return <div className="col-sm-12">
    {
        (props.bets == undefined) ? <div></div> :
         props.bets.map((bet,index) => (
                <Editable bet={bet} key={index} onRemove={props.onRemove} onSave={props.onSave}/>
            ))
    }
    </div>
}

export default EditableBets