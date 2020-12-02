import {toDos} from "../modules/init";
import {todosArr} from "../modules/init";

//create delete button on cards
function deleteCard() {
    const cards = document.querySelectorAll(".card");
        cards.forEach(function del(e) {
            const delBtn = document.createElement("input");
                delBtn.setAttribute("id", "delete");
                delBtn.setAttribute("type", "button");
                delBtn.setAttribute("value", "X");
                delBtn.addEventListener('click', delCard);
                function delCard() {
                    const cardID = e.getAttribute("id");
                    const cardDIV = document.getElementById(`${cardID}`);
                    cardDIV.remove();
                };
                e.appendChild(delBtn);
        });
};

//create edit button on cards (the hard part)

                function edCard() {
                    //create new overlay
                    newForm();

                    //retrieve id and div
                    const cardID = e.getAttribute("id");

                    //retrieve text div elements
                    const cTitle = document.querySelector(`.titleIndex${cardID}`);
                    const cDesc = document.querySelector(`.descIndex${cardID}`);
                    const cDate = document.querySelector(`.dateIndex${cardID}`);
                    const cPriority = document.querySelector(`.priIndex${cardID}`);

                    //retrieve input elements and input old values
                    const titleI = document.getElementById("formTitle");
                    titleI.setAttribute("value", cTitle.textContent);
                    const descI = document.getElementById("formDesc");
                    descI.setAttribute("value", cDesc.textContent);
                    const dueI = document.getElementById("formDueDate");
                    dueI.setAttribute("value", cDate.textContent);
                    const priority = document.getElementById("priority");
                    priority.setAttribute("value", cPriority.textContent);

                    //remove unwanted buttons
                    if (document.getElementById("edBtn")) {
                        const oldEditBtn = document.getElementById("edBtn");
                        oldEditBtn.remove();
                    };

                    const editBtn = document.querySelector("#subBtn");
                        editBtn.setAttribute("value", "Edit");
                        editBtn.removeEventListener("click", submit);
                        editBtn.addEventListener("click", () => {
                            //changes object and div information
                            todosArr[cardID -1].title = titleI.value;
                            cTitle.textContent = titleI.value;
                            todosArr[cardID -1].desc = descI.value;
                            cDesc.textContent = descI.value;
                            todosArr[cardID -1].dueDate = dueI.value;
                            cDate.textContent = dueI.value;
                            todosArr[cardID -1].priority = priority.value;
                            cPriority.textContent = priority.value;
                        });

                    //append button to form
                    const form = document.getElementById("newForm");
                    form.appendChild(editBtn);
                };


//create new card overlay
function newCard() {
    const body = document.querySelector("#content");
        const newBtn = document.createElement("input");
            newBtn.setAttribute("id", "newCard");
            newBtn.setAttribute("type", "button");
            newBtn.setAttribute("value", "New To-Do");
            newBtn.addEventListener('click', newForm);
        body.appendChild(newBtn);
};






const body = document.querySelector("#content");

const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
const overBox = document.createElement("div");
    overBox.setAttribute("id", "overlay");

//form start
const form = document.createElement("form");
    form.setAttribute("id", "newForm");

    //title
const titleL = document.createElement("label");
    titleL.setAttribute("for", "formTitle");
    titleL.innerHTML = "Title: ";
    form.appendChild(titleL);
const titleI = document.createElement("input");
    titleI.setAttribute("type", "text");
    titleI.setAttribute("name", "title");
    titleI.setAttribute("id", "formTitle");
    form.appendChild(titleI);

    //description
const descL = document.createElement("label");
    descL.setAttribute("for", "formDesc");
    descL.innerHTML = "Description: ";
    form.appendChild(descL);
const descI = document.createElement("input");
    descI.setAttribute("type", "text");
    descI.setAttribute("name", "desc");
    descI.setAttribute("id", "formDesc");
    form.appendChild(descI);

//due date
const dueL = document.createElement("label");
    dueL.setAttribute("for", "formDueDate");
    dueL.innerHTML = "Due Date: ";
    form.appendChild(dueL);
const dueI = document.createElement("input");
    dueI.setAttribute("type", "date");
    dueI.setAttribute("name", "dueDate");
    dueI.setAttribute("id", "formDueDate");
    form.appendChild(dueI);

    //priority dropdown menu
const priLabel = document.createElement("label");
    priLabel.setAttribute("for", "formPriority");
    priLabel.innerHTML = "Priority: ";
    form.appendChild(priLabel);
const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("id", "priority");
    form.appendChild(priority);
const pLow = document.createElement("option");
    pLow.setAttribute("value", "low");
    pLow.innerHTML = "Low";
    priority.appendChild(pLow);
const pMed = document.createElement("option");
    pMed.setAttribute("value", "medium");
    pMed.innerHTML = "Medium";
    priority.appendChild(pMed);
const pHigh = document.createElement("option");
    pHigh.setAttribute("value", "high");
    pHigh.innerHTML = "High";
    priority.appendChild(pHigh);

    //cancel button
const cancelBtn = document.createElement("input");
    cancelBtn.setAttribute("type", "button");
    cancelBtn.setAttribute("value", "Cancel");
    cancelBtn.setAttribute("id", "cancelBtn");
    cancelBtn.addEventListener("click", closeForm);
    form.appendChild(cancelBtn);

overBox.appendChild(form);
overlay.appendChild(overBox);
body.appendChild(overlay);




function submit(){
    new toDos(titleI.value, descI.value, dueI.value, priority.value)
}

function newForm() {
    const overlay = document.querySelector(".overlay");
    //remove unwanted buttons
    if (document.getElementById("subBtn")) {
        const oldSubBtn = document.getElementById("subBtn");
        oldSubBtn.remove();
    };
    //submit button
    const form = document.getElementById("newForm");
    const subBtn = document.createElement("input");
        subBtn.setAttribute("type", "button");
        subBtn.setAttribute("value", "Submit");
        subBtn.setAttribute("id", "subBtn");
        subBtn.addEventListener('click', submit);
        form.appendChild(subBtn);
    clearForm();
    return overlay.style.display = "block";
}

function closeForm() {
    const overlay = document.querySelector(".overlay");
    clearForm();
    return overlay.style.display = "none";
}

function clearForm() {
    const titleI = document.getElementById("formTitle");
    titleI.setAttribute("value", "")
    titleI.setAttribute("placeholder", "")
    const descI = document.getElementById("formDesc");
    descI.setAttribute("value", "")
    descI.setAttribute("placeholder", "")
    const dueI = document.getElementById("formDueDate");
    dueI.setAttribute("value", "")
    dueI.setAttribute("placeholder", "")
}

//mark as complete

//I'd like to make a fade effect


function doms() {
    deleteCard();
    newCard();
};

export default doms;
export {edCard};