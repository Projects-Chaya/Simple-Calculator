using System;
using System.Collections.Generic;

namespace react_dotnet_example.Models
{
    public class ExerciseRepository : IExerciseRepository
    {
        //A class that uses the functions of the interface
        private List<ExerciseModel> exercises = new List<ExerciseModel>();

        private int _nextId = 1;


        public IEnumerable<ExerciseModel> GetAll()
        {
            return exercises;
        }
        public ExerciseModel findExecise(ExerciseModel item)
        {
            int index = exercises.FindIndex(e => e.id == item.id);
            return exercises[index];
        }
        public IEnumerable<ExerciseModel> removeExercise(ExerciseModel item)
        {
            exercises.RemoveAt(item.id - 1);
            return exercises;
        }

        public void updateExecise(ExerciseModel exercise, ExerciseModel findItem)
        {

            int index = exercises.FindIndex(e => e.id == findItem.id);
            if (index >= 0)
            {
                exercises[index].id = exercise.id;
                exercises[index].numberFirst = exercise.numberFirst;
                exercises[index].numberSecond = exercise.numberSecond;
                exercises[index].single = exercise.single;
                exercises[index].outcome = exercise.outcome;
            }

        }
        public void Sub(ExerciseModel item)
        {
            item.outcome = item.numberFirst - item.numberSecond;
        }

        public void Plus(ExerciseModel item)
        {
            item.outcome = item.numberFirst + item.numberSecond;
        }
        public void Multiplication(ExerciseModel item)
        {
            item.outcome = item.numberFirst * item.numberSecond;
        }
        public void Division(ExerciseModel item)
        {
            item.outcome = item.numberFirst / item.numberSecond;
        }
        public ExerciseModel createExercise(ExerciseModel item)
        {
            item.id = _nextId++;

            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            if (item.single == "+")
            {
                Plus(item);

            }
            else if (item.single == "-")
            {
                Sub(item);
            }
            else if (item.single == "*")
            {
                Multiplication(item);
            }
            else if (item.single == "/")
            {
                Division(item);
            }
            exercises.Add(item);

            return item;
        }


        // strategy design pattern 

        // public ExerciseModel createExercise(ExerciseModel item)
        //         {
        // item.id = _nextId++;

        //             if (item == null)
        //             {
        //                 throw new ArgumentNullException("item");
        //             }
        //             if (item.single == "-")
        //             {
        //                 CalculateClient minusClient = new CalculateClient(new Minus());
        //                 item.outcome = minusClient.Calculate(item.numberFirst, item.numberSecond);

        //             }
        //             if (item.single == "+")
        //             {
        //                 CalculateClient plusClient = new CalculateClient(new Plus());
        //                 item.outcome = plusClient.Calculate(item.numberFirst, item.numberSecond);
        //             }
        //             if (item.single == "*")
        //             {
        //                 CalculateClient multiplicationClient = new CalculateClient(new Multiplication());
        //                 item.outcome = multiplicationClient.Calculate(item.numberFirst, item.numberSecond);

        //             }
        //             if (item.single == "/")
        //             {
        //                 Division(item);
        //                 CalculateClient divisionClient = new CalculateClient(new Division());
        //                 item.outcome = divisionClient.Calculate(item.numberFirst, item.numberSecond);

        //             }

        //             exercises.Add(item);

        //             return item;
        //         }
    }
}