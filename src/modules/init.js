import {edCard} from "../modules/doms";

let todosArr = [];

//To-Do List Object
function toDos(title, desc, dueDate, priority) {

    this.title = title,
    this.desc = desc,
    this.dueDate = dueDate,
    this.priorty = priority;

    todosArr.push({title, desc, dueDate, priority});

    function makeCard() {
        const body = document.querySelector("#content");
        const card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("id", todosArr.length);

            const cTitle = document.createElement("div");
                cTitle.setAttribute("id", "Title");
                cTitle.setAttribute("class", `titleIndex${todosArr.length}`);
                cTitle.textContent = title;
                card.appendChild(cTitle);

            const cDesc = document.createElement("div");
                cDesc.setAttribute("id", "Desc");
                cDesc.setAttribute("class", `descIndex${todosArr.length}`);
                cDesc.textContent = desc;
                card.appendChild(cDesc);

            const cDate = document.createElement("div");
                cDate.setAttribute("id", "DueDate");
                cDate.setAttribute("class", `dateIndex${todosArr.length}`);
                cDate.textContent = dueDate;
                card.appendChild(cDate);

            const cPrior = document.createElement("div");
                cPrior.setAttribute("id", "Priority");
                cPrior.setAttribute("class", `priIndex${todosArr.length}`);
                cPrior.textContent = priority;
                card.appendChild(cPrior);

            const delBtn = document.createElement("input");
                delBtn.setAttribute("id", "delete");
                delBtn.setAttribute("type", "button");
                delBtn.setAttribute("value", "X");
                delBtn.addEventListener('click', delCard);
                function delCard() {
                    card.remove();
                };
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

        body.appendChild(card);
    }

    return makeCard();
};

//TESTING adding items and calling them
var testing = new toDos("title", "desc", "dueDate", "priority");
var tested = new toDos("Sup", "Yo", "15", "high");
var test = new toDos("Yep", "Yo", "15", "high");




/*

'title', 'description', 'dueDate' and 'priority'. You might also want to include 'notes' or even a 'checklist'.

put todos in an array as objects
the objects must be editable
make a separate file for DOMs?

*/




export {toDos};
export {todosArr};
