import {edCard} from "../modules/forms";
import {parseISO, format} from 'date-fns';

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

    //pushes objects into array
    todosArr.push({title, desc, dueDate, priority, project});

    //creates new date format with date-fns
    const newDate = format(new Date(parseISO(`${dueDate}T00:00:00`)), 'P');

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
            cDate.textContent = `Due on ${newDate}`;
            card.appendChild(cDate);

        //the checkbox
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
            } else if (priority == "hard") {
                card.style.borderColor = "red";
            } else {
                card.style.borderColor = "white";
            }
            card.appendChild(cPrior);

        const delBtn = document.createElement("input");
            delBtn.setAttribute("id", "delete");
            delBtn.setAttribute("type", "button");
            delBtn.setAttribute("value", "X");
            let numb = todosArr.length - 1;
            delBtn.addEventListener('click', () => {
                card.remove();
                localStorage.removeItem(`item${numb}`)
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



//localStorage
function getArr() {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(`item${i}`)){
            const array = localStorage.getItem(`item${i}`);
            const obj = JSON.parse(array);
            new toDos(obj.title, obj.desc, obj.dueDate, obj.priority, obj.project);
        } else {
            storeArr();
        }
    }
};

function storeArr() {
    for (let i = 0; i < todosArr.length; i++) {
        localStorage.setItem(`item${i}`, JSON.stringify(todosArr[i]));
    }
};

function storage() {
    if (localStorage){
        getArr();
    } else {
        storeArr();
    }
};



export {toDos};
export {todosArr};
export {storage};
export {storeArr};
