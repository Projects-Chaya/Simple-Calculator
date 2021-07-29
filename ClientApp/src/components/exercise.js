import React from 'react'

import '../stayles/exercise.css'


const Exercise = ({ onChangeForm, createExercises, math, addClass, findItem }) => {

    return (
        <div className="container">
            <div className="row mb-0">
                <div className="col-3 mb-0 ml-1">
                    <p>user type</p>
                </div>
                <div className="col-3 mb-0 " className={addClass}>
                    <p >user type</p>
                </div>
            </div>
            <div className="row mt-0 exercise">
                <form>
                    <input
                        type="number"
                        className="text-center mr-3 ml-3 "
                        name="first"
                        onChange={(e) => onChangeForm(e)}
                        value={findItem.numberFirst && findItem.numberFirst} />
                    <select
                        name="selected"
                        onChange={(e) => onChangeForm(e)}>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                        {findItem.single && <option selected>{findItem.single}</option>}
                    </select>
                    <input
                        type="number"
                        className="text-center mr-3 ml-3"
                        name="second"
                        onChange={(e) => onChangeForm(e)}
                        value={findItem.numberSecond && findItem.numberSecond}
                    />
                    <b className="ml-0 h2">=</b>
                    <label
                        className="border border-secondary text-center mr-1 ml-1"
                    ><b value={findItem.outcome && findItem.outcome} />{math}</label>
                </form>
            </div>
            <div className="row">
                <p className="col-4 textdown">user selected <br></br>from drop down</p>
                <p
                    className="col-5 btncalaulate"
                    onClick={createExercises}>calculate from server</p>
            </div>
        </div>
    )
}

export default Exercise;