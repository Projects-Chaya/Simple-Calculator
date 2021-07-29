using System;
using System.Collections.Generic;

namespace react_dotnet_example.Models
{
    //Interface to implement the functions
    public interface IExerciseRepository
    {
        IEnumerable<ExerciseModel> GetAll();

        ExerciseModel createExercise(ExerciseModel exercise);
        IEnumerable<ExerciseModel> removeExercise(ExerciseModel exercise);
        ExerciseModel findExecise(ExerciseModel exercise);


        void updateExecise(ExerciseModel exercise,ExerciseModel findItem);

        void Plus(ExerciseModel exercise);
        void Sub(ExerciseModel exercise);
        void Multiplication(ExerciseModel exercise);
        void Division(ExerciseModel exercise);


    }
}