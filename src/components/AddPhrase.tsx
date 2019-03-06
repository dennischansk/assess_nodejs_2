import * as React from "react";
//import * as PropTypes from 'prop-types';
//import {CSSProperties} from "react";

import './AddPhrase.css';

interface IProps {
    show?: boolean;
    handleClose?: any;
    children: any;
};

const Modal:React.FC<IProps> = ({ handleClose, show, children }: IProps) => {
    /*const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );*/

    ///** @type {{showHideStyle: React.CSSProperties}} */
    //const showHideStyle = show ?  {display: "block"} : {display: "none"}; //style={showHideStyle}
    ///** @type {{modalMainStyle: React.CSSProperties}} */
    //const modalMainStyle = {position: 'fixed' as 'fixed', background:"white", width:"80%", height:"auto",
    //    top:"10px", left:"10px", boxSizing: "border-box" as "border-box", border: "5px solid red"};
    //    //style={modalMainStyle}
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <div className='modal-main'>
                <div className='modal-box'>
                    {children}
                    &nbsp; <button id="addButton" className='modal-button' onClick={handleClose}>add</button>
                    &nbsp; <button id="closeButton" className='modal-button' onClick={handleClose}>close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;