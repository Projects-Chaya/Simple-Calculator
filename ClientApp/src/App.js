import React, { useState, useEffect } from 'react';

import { createExercise, getAllExercises, removeExercise, updateExecise, findExecise } from './services/exerciseService'
import Exercise from './components/exercise';
import History from './components/history';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  const [f5, setF5] = useState(false)
  const [exercise, setExercise] = useState({})
  const [math, setMath] = useState()
  const [exercises, setExercises] = useState([{}])
  const [findItem, setFindItem] = useState({})
  const [updateExercise, setUpdateExercise] = useState(false)
  //update when change part of from
  function onChangeForm(e) {
    setFindItem({})
    const ex = exercise
    if (e.target.name === "first") {
      if (e.target.value == ".")
        alert("Enter an integer")
      else
        ex.numberFirst = e.target.value
    }
    else if (e.target.name === "selected") {
      ex.single = e.target.value
    }
    else if (e.target.name === "second") {
      if (e.target.value == ".")
        alert("Enter an integer")
      else
        ex.numberSecond = e.target.value
    }
    setExercise(ex)
  }

  //create exercise when the user click on "calculate from server"
  function CreateExercises() {
    debugger
    if (updateExercise === true) {
      updateExecise(exercise, findItem)
        .then(response => {
          alert("Update...")
        })
    }

    else {
      createExercise(exercise)
        .then(response => {
          setMath(response.outcome);
        })
    }


  }

  //get all exercises of the user
  function GetAllExercises() {
    getAllExercises()
      .then(e => {
        setExercises(e)
      })
  }

  //delete exercise by choose the user
  function RemoveExercise(item) {
    removeExercise(item)
      .then(e => {
        setExercises(e)
        alert("Deleted...")
      })

  }
  //update exercise שccording to the user's choice
  function FindExercise(item) {
    debugger
    findExecise(item)
      .then(e => {
        setFindItem(e)
        // setMath()
        setUpdateExercise(true)
      })
      .then(e => { alert("Updeat...") })

  }

  //disables the operation of the button and serves as a tool to help activate the history
  function OnkeydownHandler(event) {
    switch (event.keyCode) {
      case 116: // 'F5'
        debugger
        event.preventDefault();
        window.status = "F5 disabled";
        setF5(true)
        break;
    }
  }
  document.addEventListener("keydown", OnkeydownHandler);

  return (
    <>
      <div className="container mt-5 main p-0" >
        <Exercise
          onChangeForm={onChangeForm}
          createExercises={CreateExercises}
          addClass={f5 ? "history" : "withoutHistory"}
          math={math}
          findItem={findItem}
        />
        {f5 &&
          <>
            <History
              getAllExercises={GetAllExercises}
              removeExercise={RemoveExercise}
              updateExecise={FindExercise}
              exercises={exercises}
            />
            <Footer />
          </>}
      </div>
    </>
  );
}

export default App;

