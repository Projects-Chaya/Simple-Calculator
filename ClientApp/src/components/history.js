import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import '../stayles/exercise.css'
import '../stayles/history.css'



const History = ({ getAllExercises, exercises, removeExercise, updateExecise }) => 

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <b>calculator history</b>
                    <div className="border border-secondary w-75">
                        {exercises.map((value, index) => {
                            return <>
                                {index > 0 &&
                                    <div className="row">
                                        <p className="exercise" key={index}>{value.numberFirst}{value.single}{value.numberSecond}={value.outcome}</p>
                                        <FontAwesomeIcon
                                            className="icon ml-2"
                                            icon={faTimesCircle}
                                            className="text-dark"
                                            onClick={() => removeExercise(value)} />
                                        <FontAwesomeIcon
                                            className="icon ml-1"
                                            icon={faArrowAltCircleRight}
                                            className="text-white arrow"
                                            onClick={() => {
                                                updateExecise(value)
                                            }} />
                                        <br></br>

                                    </div>}
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;
