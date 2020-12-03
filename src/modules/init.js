import {edCard} from "../modules/doms";

//array for my todo objects
let todosArr = [];

//creates a place to put all of the todos
const body = document.querySelector("#content");
const cardSide = document.createElement("div");
    cardSide.setAttribute("class", "cardside");
    body.appendChild(cardSide);



//To-Do List Object
function toDos(title, desc, dueDate, priority) {

    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate,
    this.priorty = priority;

    todosArr.push({title, desc, dueDate, priority});

    //doms to create a new card
    const cardSide = document.querySelector(".cardside");
    const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", todosArr.length);

        const cTitle = document.createElement("div");
            cTitle.setAttribute("id", "Title");
            cTitle.setAttribute("class", `titleIndex${todosArr.length}`);
            cTitle.textContent = title;
            card.appendChild(cTitle);

        const cDate = document.createElement("div");
            cDate.setAttribute("id", "DueDate");
            cDate.setAttribute("class", `dateIndex${todosArr.length}`);
            cDate.textContent = `Due on ${dueDate}`;
            card.appendChild(cDate);

        const cDesc = document.createElement("div");
            cDesc.setAttribute("id", "Desc");
            cDesc.setAttribute("class", `descIndex${todosArr.length}`);
            cDesc.textContent = desc;
            card.appendChild(cDesc);

        const cPrior = document.createElement("div");
            cPrior.setAttribute("id", "Priority");
            cPrior.setAttribute("class", `priIndex${todosArr.length}`);
            if (priority == "low") {
                card.style.borderColor = "green";
            } else if (priority == "medium") {
                card.style.borderColor = "yellow";
            } else {
                card.style.borderColor = "red";
            }
            card.appendChild(cPrior);

        const delBtn = document.createElement("input");
            delBtn.setAttribute("id", "delete");
            delBtn.setAttribute("type", "button");
            delBtn.setAttribute("value", "X");
            delBtn.addEventListener('click', () => {
                card.remove();
            });
            card.appendChild(delBtn);

        const edBtn = document.createElement("input");
            edBtn.setAttribute("id", "edit");
            edBtn.setAttribute("type", "button");
            edBtn.setAttribute("value", "edit");
            edBtn.addEventListener('click', () => {
                const cardID = card.getAttribute("id");
                edCard(cardID);
            });
            card.appendChild(edBtn);

        const complete = document.createElement("input");
            complete.setAttribute("id", "complete");
            complete.setAttribute("type", "checkbox");
            complete.addEventListener('change', () => {
                if (complete.checked) {
                    card.removeAttribute("class");
                    card.setAttribute("class", "cardDone");
                } else {
                    card.removeAttribute("class");
                    card.setAttribute("class", "card");
                };
            });
            card.appendChild(complete);

    cardSide.appendChild(card);
};

//TESTING adding items and calling them
var testing = new toDos("title", "desc", "dueDate", "priority");
var tested = new toDos("Sup", "Yo", "15", "high");
var test = new toDos("Yep", "Yo", "15", "high");




/*

3. Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

--Perhaps make a sidebar for different projects lists/new todo btn and use link targeting (the think I used to do for those old biosheets) to jump to new "pages". Make each page min-heigh: 100vh;.

5. The look of the User Interface is up to you, but it should be able to do the following:

    view all projects
        --that'll be the sidebar

    DONE    view all todos in each project (probably just the title and duedate. perhaps changing color for different priorities)
        --border color? like on the end and you can round the edges, like a tab?

    expand a single todo to see/edit its details
        --only showing title/date and making it bigger/more detailed onclick?

    delete a todo
        --Got this one, at least

--How are they going to make new projects/lists/pages? Create a btn/form and use DOMS to make a new page with the information provided. But how do I put todos in them? Make it a part of the todo itself like priority/date/etc. Use that as an id to put it in the proper place? Data-key, maybe?



'title', 'description', 'dueDate' and 'priority'. You might also want to include 'notes' or even a 'checklist'.

put todos in an array as objects
the objects must be editable
make a separate file for DOMs?

*/




export {toDos};
export {todosArr};
