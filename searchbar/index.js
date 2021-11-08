// creating basic data to be my search results in an object
const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
]

// declaring and assigning variables to the HTML elements based on their ID value
const searchInput = document.getElementById('search')
const list = document.getElementById('list')

// "people" but filtered based on search criteria
// pastes search result to page visibly
function setList(results){
    clearList()
    for (const person of results){
        const resultItem = document.createElement('li')
    }

    if (results.length === 0 ){
        noResults()
    }
}

// removes list from page
function clearList(){

}

// what happens if there are no results
function noResults(){

}


// creating event listener that listens to an "input" event
// setting an anonymous callback function with a parameter "e" the event
searchInput.addEventListener("input", (e) => {
    // below for testing reasons
    console.log('input event fired')
    console.log(e.target.value)

    // declaring and assigning the value of the event's target AKA whatever is typed in the search bar
    const value = e.target.value
})