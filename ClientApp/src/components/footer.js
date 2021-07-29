import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight,faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import '../stayles/footer.css'
import '../stayles/exercise.css'


const Footer = () => {


    return (
        <div>
            <div className="row mt-3 ml-2 mr-0"> 
            <FontAwesomeIcon icon={faTimesCircle} className="text-dark h1 mr-2" />      
                <p>
                    <b>DELETE</b> when userpress this button -
               the caculation will be deleted (both client and server)</p>
            </div>

            <div className="row ml-2 mt-2 mb-0 mr-0 pr-0">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-white h1 mr-2 arrow"/>
                <p className=" mb-0 mr-0 pr-0 pb-0">
                    <b>Update</b> when userpress this button -
                    the caculation will be show in the above inputs<br></br>
                    and when the user change the value, it will be update also in the caculation history (both client and server)</p>
            </div>
        </div>
    )
}

export default Footer;