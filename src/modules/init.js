//To-Do List Object
function toDos(title, desc, dueDate, priority, notes) {

    let todosArr = [];

    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate,
    this.priorty = priority,
    this.notes = notes;

    todosArr.push(title, desc, dueDate, priority, notes);
};

//adding items and calling them
function test() {
    var testing = new toDos("Hi", "Yo", "12", "high", "yep");
    return console.log(testing);
};

function init() {
    test();
}


/*

'title', 'description', 'dueDate' and 'priority'. You might also want to include 'notes' or even a 'checklist'.

put todos in an array as objects
the objects must be editable
make a separate file for DOMs?

*/




export default init;