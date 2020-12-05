import {edCard} from "../modules/doms";

//array for my todo objects
let todosArr = [];

//creates a place to put all of the todos
const body = document.querySelector("#content");
const cardSide = document.createElement("div");
    cardSide.setAttribute("class", "cardside");
    body.appendChild(cardSide);



//To-Do List Object
function toDos(title, desc, dueDate, priority, project) {

    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate,
    this.priorty = priority;

    todosArr.push({title, desc, dueDate, priority, project});

    //doms to create a new card
    const cardSide = document.querySelector(".cardside");
    const card = document.createElement("div");
        card.setAttribute("class", `card`);
        card.setAttribute("data-proj", project);
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

        const complete = document.createElement("input");
            complete.setAttribute("id", "complete");
            complete.setAttribute("type", "checkbox");
            complete.addEventListener('change', () => {
                if (complete.checked) {
                    card.removeAttribute("class");
                    card.setAttribute("class", "cardDone");
                    complete.innerHTML = '<i class="fas fa-check"></i>';
                } else {
                    card.removeAttribute("class");
                    card.setAttribute("class", "card");
                    complete.innerHTML = '';
                };
            });
            card.appendChild(complete);

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

        const edBtn = document.createElement("button");
            edBtn.setAttribute("id", "edit");
            edBtn.setAttribute("type", "submit");
            edBtn.innerHTML = '<i class="fas fa-pen"></i>';
            edBtn.addEventListener('click', () => {
                const cardID = card.getAttribute("id");
                edCard(card, cardID);
            });
            card.appendChild(edBtn);

    cardSide.appendChild(card);
};

//TESTING adding items and calling them
var testing = new toDos("title", "desc", "dueDate", "priority", 0);
var tested = new toDos("Sup", "Yo", "15", "high", 1);
var test = new toDos("Yep", "Yo", "15", "high", 1);




/*

3. Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

--Perhaps make a sidebar for different projects lists/new todo btn and use link targeting (the think I used to do for those old biosheets) to jump to new "pages". Make each page min-heigh: 100vh;.

5. The look of the User Interface is up to you, but it should be able to do the following:

    DONE    view all projects
        --that'll be the sidebar

    DONE    view all todos in each project (probably just the title and duedate. perhaps changing color for different priorities)
        --border color? like on the end and you can round the edges, like a tab?

    DONE    expand a single todo to see/edit its details
        --only showing title/date and making it bigger/more detailed onclick?

    DONE    delete a todo
        --Got this one, at least



NEW PROJECTS don't filter into current projects
    "data-proj = undefined"
    the value isn't submitted at all


'title', 'description', 'dueDate' and 'priority'. You might also want to include 'notes' or even a 'checklist'.

put todos in an array as objects
the objects must be editable
make a separate file for DOMs?







TO-DO (haha)

DONE
-NEW TODOS DON'T FILTER INTO PROJECTS
    "data-proj = undefined"
    the value isn't submitted at all
    the value doesn't change when editing todos
    border of proj btn changes color if editing todo with a different priority
DONE

- make sidebar pretty
    make "see all" btn prominent
    make "add proj" btn into a "+"
    make proj btns look nice and list-like
    make sure overflow of projs can scroll
    try a solid border instead of box shadow
    after submitting new proj, clear input value

- fix form
    get them in a grid/flex sort of config
    make the btns/selects look nice

-pretty up the cards
    change the colors of priorities
    change the colors of complete todos
    perhaps add the proj title at the top?

-in JS land
    be able to edit project names
    figure out how to fade things (try css first)
    fix the dates
    figure out how to save info (check TOP)
    should I add proj to card DIVs?
    maybe split up functions in doms to other modules
    DONE fix the form values/placeholders on edit again

-other
    should I try a header?
    make the default todos/projs
    overall make it look a little less like the 70s

*/




export {toDos};
export {todosArr};
