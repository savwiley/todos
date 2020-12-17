import {toDos, todosArr, storeArr} from "../modules/init";

//create a new form
function newForm() {
    //clears form
    document.getElementById("formTitle").value = "";
    document.getElementById("formDesc").value = "";
    document.getElementById("formDueDate").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("project").value = "";

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
        subBtn.value = "Submit";
        subBtn.setAttribute("id", "subBtn");
        subBtn.addEventListener('click', submit);
        form.appendChild(subBtn);
};


//submit new object/card
//listener needs its own function because it has to be removed via edit button
function submit(){
    const titleI = document.getElementById("formTitle");
    const descI = document.getElementById("formDesc");
    const dueI = document.getElementById("formDueDate");
    const priority = document.getElementById("priority");
    const project = document.getElementById("project");
    //checks for title and date
    if (!titleI.value || !dueI.value) {
        alert("Please fill in Title and Due Date fields.");
    } else {
        new toDos(titleI.value, descI.value, dueI.value, priority.value, project.value, true);
        storeArr(titleI.value, descI.value, dueI.value, priority.value, project.value, true);
        const overlay = document.querySelector(".overlay");
            overlay.style.display = "none";
    }
};



//create new card button
function newCard() {
        const newBtn = document.createElement("input");
            newBtn.setAttribute("id", "newCard");
            newBtn.setAttribute("type", "button");
            newBtn.value = "New To-Do";
            newBtn.addEventListener('click', newForm);
        //retrieves sidebar
        const sidebar = document.querySelector(".sidebar");
        sidebar.appendChild(newBtn);
};


//edit button action overlay
function edCard(card, cardID) {
    //create new overlay
    newForm();

    //retrieve text div elements
    const cTitle = document.querySelector(`.titleIndex${cardID}`);
    const cDesc = document.querySelector(`.descIndex${cardID}`);
    const cDate = document.querySelector(`.dateIndex${cardID}`);

    //retrieve input elements and input old values
    const titleI = document.getElementById("formTitle");
        titleI.value = cTitle.textContent;
    const descI = document.getElementById("formDesc");
        descI.value = cDesc.textContent;
    const dueI = document.getElementById("formDueDate");
        dueI.value = todosArr[cardID -1].dueDate;
    const priority = document.getElementById("priority");
        priority.value = todosArr[cardID -1].priority;
    const project = document.getElementById("project");
        project.value = todosArr[cardID -1].project;

    //prevents form from creating new edit buttons everytime button is clicked
    if (document.getElementById("edBtn")) {
        const oldEditBtn = document.getElementById("edBtn");
        oldEditBtn.remove();
    };

    //submitting the edited form
    const editBtn = document.querySelector("#subBtn");
        editBtn.value = "Edit";
        editBtn.removeEventListener("click", submit);
        editBtn.addEventListener("click", () => {

            //checks for title and date
            if (!titleI.value || !dueI.value) {
                alert("Please fill in Title and Due Date fields.");
            } else {
                //changes object and div information
                todosArr[cardID -1].title = titleI.value;
                cTitle.textContent = titleI.value;
                todosArr[cardID -1].desc = descI.value;
                cDesc.textContent = descI.value;
                todosArr[cardID -1].dueDate = dueI.value;
                cDate.textContent = `Due on ${dueI.value}`;
                todosArr[cardID -1].priority = priority.value;
                if (priority.value == "low") {
                    card.style.borderColor = "green";
                } else if (priority.value == "medium") {
                    card.style.borderColor = "yellow";
                } else if (priority == "hard") {
                    card.style.borderColor = "red";
                } else {
                    card.style.borderColor = "white";
                }
                todosArr[cardID - 1].project = project.value;
                card.setAttribute("data-proj", project.value);
                storeArr();
                const overlay = document.querySelector(".overlay");
                    overlay.style.display = "none";
            }
        });

    //append submit/edit button to form
    const form = document.getElementById("newForm");
        form.appendChild(editBtn);
};




export {newCard};
export {edCard};