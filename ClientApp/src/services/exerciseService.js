
export async function createExercise(data) {
    const response = await fetch(`http://localhost:5000/api/exercise/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}
export async function findExecise(item) {
    const response = await fetch(`http://localhost:5000/api/exercise/find`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
    return await response.json();
}


export async function updateExecise(exercise, findItem) {
    const response = await fetch(`http://localhost:5000/api/exercise/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exercise, findItem)
    })
    return await response.json();
}

export async function removeExercise(item) {
    const response = await fetch(`http://localhost:5000/api/exercises/remove`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
    return await response.json();
}
export async function getAllExercises() {
    debugger
    const response = await fetch('http://localhost:5000/api/allExercises', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
}

