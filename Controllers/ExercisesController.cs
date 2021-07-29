using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace react_dotnet_example.Controllers
{
    [ApiController]
    public class ExercisesController : ControllerBase
    {

        private readonly ILogger<ExercisesController> _logger;

        static readonly Models.IExerciseRepository repository = new Models.ExerciseRepository();

        public ExercisesController(ILogger<ExercisesController> logger)
        {
            _logger = logger;
        }
        //get all exercise

        [HttpGet]
        [Route("api/allExercises")]
        public IEnumerable<Models.ExerciseModel> GetAllExercise()
        {
            return repository.GetAll();
        }

        //remove exercise

        [HttpPost]
        [Route("api/exercises/remove")]
        [Consumes("application/json")]
        public IEnumerable<Models.ExerciseModel> RemoveExercise(Models.ExerciseModel item)
        {
            return repository.removeExercise(item);
        }

        // find exercise

        [HttpPost]
        [Route("api/exercise/find")]
        [Consumes("application/json")]
        public Models.ExerciseModel FindExecise(Models.ExerciseModel item)
        {
            return repository.findExecise(item);
        }

        //create exercise

        [HttpPost]
        [Route("api/exercise/create")]
        [Consumes("application/json")]
        public Models.ExerciseModel CreateExercise(Models.ExerciseModel item)
        {
            return repository.createExercise(item);
        }


        //update exercise
        [HttpPost]
        [Route("api/exercise/update")]
        [Consumes("application/json")]
        public void UpdateExercise(Models.ExerciseModel exercise, Models.ExerciseModel findItem)
        {
            repository.updateExecise(exercise, findItem);
        }

    }
}
