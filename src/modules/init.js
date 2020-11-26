let todosArr = [];

//To-Do List Object
function toDos(title, desc, dueDate, priority, notes) {

    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate,
    this.priorty = priority,
    this.notes = notes;

    todosArr.push({title, desc, dueDate, priority, notes});

    function makeCard() {
        const body = document.querySelector("#content");
        const card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("id", todosArr.length);

            const cTitle = document.createElement("div");
                cTitle.setAttribute("id", "title");
                cTitle.textContent = title;
                card.appendChild(cTitle);

            const cDesc = document.createElement("div");
                cDesc.setAttribute("id", "desc");
                cDesc.textContent = desc;
                card.appendChild(cDesc);

            const cDate = document.createElement("div");
                cDate.setAttribute("id", "dueDate");
                cDate.textContent = dueDate;
                card.appendChild(cDate);

            const cPrior = document.createElement("div");
                cPrior.setAttribute("id", "priority");
                cPrior.textContent = priority;
                card.appendChild(cPrior);

            const cNotes = document.createElement("div");
                cNotes.setAttribute("id", "notes");
                cNotes.textContent = notes;
                card.appendChild(cNotes);

        body.appendChild(card);
    }

    return makeCard();
};

//TESTING adding items and calling them
var testing = new toDos("title", "desc", "dueDate", "priority", "notes");
var tested = new toDos("Sup", "Yo", "15", "high", "yep");
var test = new toDos("Yep", "Yo", "15", "high", "yep");



/*

'title', 'description', 'dueDate' and 'priority'. You might also want to include 'notes' or even a 'checklist'.

put todos in an array as objects
the objects must be editable
make a separate file for DOMs?

*/




export {toDos};
