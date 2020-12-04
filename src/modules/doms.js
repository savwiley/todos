import {toDos} from "../modules/init";
import {todosArr} from "../modules/init";

//retrieves page
const body = document.querySelector("#content");

//retrieves card side
const cardSide = document.querySelector(".cardside");

//creates sidebar
const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");
    body.appendChild(sidebar);


//creates overlay and form
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
    cancelBtn.addEventListener("click", () => {
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
    });
    form.appendChild(cancelBtn);

overBox.appendChild(form);
overlay.appendChild(overBox);
body.appendChild(overlay);



//create a new form
function newForm() {
    //clears form
    document.getElementById("formTitle").value = "";
    document.getElementById("formDesc").value = "";
    document.getElementById("formTitle").placeholder = "";
    document.getElementById("formDesc").placeholder = "";

    const overlay = document.querySelector(".overlay");
        overlay.style.display = "block";
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
};


//submit new object/card
//action needs its own function because it has to be removed via edit button
function submit(){
    new toDos(titleI.value, descI.value, dueI.value, priority.value)
};





//create new card button
function newCard() {
        const newBtn = document.createElement("input");
            newBtn.setAttribute("id", "newCard");
            newBtn.setAttribute("type", "button");
            newBtn.setAttribute("value", "New To-Do");
            newBtn.addEventListener('click', newForm);
        sidebar.appendChild(newBtn);
};


//edit button action overlay
function edCard(e) {
    //create new overlay
    newForm();

    //retrieve card
    const card = document.getElementById(e);

    //retrieve text div elements
    const cTitle = document.querySelector(`.titleIndex${e}`);
    const cDesc = document.querySelector(`.descIndex${e}`);
    const cDate = document.querySelector(`.dateIndex${e}`);

    //retrieve input elements and input old values as placeholders

    //MAKE THESE VALUES NOT PLACEHOLDERS
    const titleI = document.getElementById("formTitle");
        titleI.setAttribute("placeholder", cTitle.textContent);
    const descI = document.getElementById("formDesc");
        descI.setAttribute("placeholder", cDesc.textContent);
    const dueI = document.getElementById("formDueDate");
    const priority = document.getElementById("priority");

    //prevents form from creating new edit buttons everytime button is clicked
    if (document.getElementById("edBtn")) {
        const oldEditBtn = document.getElementById("edBtn");
        oldEditBtn.remove();
    };

    //submitting the edited form
    const editBtn = document.querySelector("#subBtn");
        editBtn.setAttribute("value", "Edit");
        editBtn.removeEventListener("click", submit);
        editBtn.addEventListener("click", () => {
            //changes object and div information
            todosArr[e -1].title = titleI.value;
            cTitle.textContent = titleI.value;
            todosArr[e -1].desc = descI.value;
            cDesc.textContent = descI.value;
            todosArr[e -1].dueDate = dueI.value;
            cDate.textContent = `Due on ${dueI.value}`;
            todosArr[e -1].priority = priority.value;
            if (priority.value == "low") {
                card.style.borderColor = "green";
            } else if (priority.value == "medium") {
                card.style.borderColor = "yellow";
            } else {
                card.style.borderColor = "red";
            }
        });

    //append submit/edit button to form
    const form = document.getElementById("newForm");
        form.appendChild(editBtn);
};

//I'd like to make a fade effect

export {newCard};
export {edCard};