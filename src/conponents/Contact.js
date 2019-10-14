import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact" >
            <img className="avatar" src={props.url} alt={props.name} ></img>
            <div className="status" >
                <span className="status-text"> {props.name} </span>
                <div className="right" >
                    <span className={props.status ? "status-online" : "status-offline"}> </span>
                    <text>{props.status ? "online" : "offline"}</text>
                </div>
            </div>

        </div >
    )
}

// function Contact(props) {
//     return (
//         <div classeName="Contact" >
//             <img classeName="avatar" src={props.url} alt={props.name} ></img>
//             <div classeName="status">
//                 <h4 classeName="status-text"> {props.name} </h4>
//                 <text classeName={props.status ? "status-online" : "status-offline"}>{props.status ? "online" : "offline"}</text>
//             </div>
//         </div>
//     )
// }

export default Contact;
