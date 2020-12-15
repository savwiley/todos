import {toDos, todosArr, storeArr} from "../modules/init";

//array of projects
let projects = [];

//retrieves page
const body = document.querySelector("#content");

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
    titleI.placeholder = "Title and Date are required";
    titleI.required = true;
    form.appendChild(titleI);

//description
const descL = document.createElement("label");
    descL.setAttribute("for", "formDesc");
    descL.setAttribute("id", "descLabel");
    descL.innerHTML = "Description: ";
    form.appendChild(descL);
const descI = document.createElement("textarea");
    descI.setAttribute("type", "text");
    descI.setAttribute("name", "desc");
    descI.setAttribute("id", "formDesc");
    descI.required = false;
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
    dueI.required = true;
    form.appendChild(dueI);

//priority dropdown menu
const priLabel = document.createElement("label");
    priLabel.setAttribute("for", "formPriority");
    priLabel.innerHTML = "Priority: ";
    form.appendChild(priLabel);
const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("id", "priority");
    priority.required = true;
    form.appendChild(priority);
const pLow = document.createElement("option");
    pLow.value = "low";
    pLow.innerHTML = "Low";
    priority.appendChild(pLow);
const pMed = document.createElement("option");
    pMed.value = "medium";
    pMed.innerHTML = "Medium";
    priority.appendChild(pMed);
const pHigh = document.createElement("option");
    pHigh.value = "high";
    pHigh.innerHTML = "High";
    priority.appendChild(pHigh);

//project dropdown menu
const projLabel = document.createElement("label");
    projLabel.setAttribute("for", "formProject");
    projLabel.innerHTML = "Project: ";
    form.appendChild(projLabel);
const project = document.createElement("select");
    project.setAttribute("name", "project");
    project.setAttribute("id", "project");
    project.required = false;
    form.appendChild(project);

//cancel button
const cancelBtn = document.createElement("input");
    cancelBtn.setAttribute("type", "button");
    cancelBtn.value = "Cancel";
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
    if (!titleI.value || !dueI.value) {
        alert("Please fill in Title and Due Date fields.");
    }
    new toDos(titleI.value, descI.value, dueI.value, priority.value, project.value);
    storeArr(titleI.value, descI.value, dueI.value, priority.value, project.value);
};


//create project input
function newProject() {

    //new project input
    const newProjForm = document.createElement("input");
        newProjForm.setAttribute("id", "newProjForm");
        newProjForm.setAttribute("type", "text");
        newProjForm.placeholder = "Project Name";
        sidebar.appendChild(newProjForm);

    //creates button to add new projects
    const newProjBtn = document.createElement("input");
        newProjBtn.setAttribute("id", "newProjBtn");
        newProjBtn.setAttribute("type", "button");
        newProjBtn.value = "+";

        //creates a new project button
        newProjBtn.addEventListener("click", () => {
            if (!newProjForm.value) {
                newProjForm.placeholder = "MUST ENTER PROJECT NAME";
            } else {
            const newProj = document.createElement("input");
                newProj.setAttribute("class", "projBtn");
                newProj.setAttribute("id", projects.length);
                newProj.setAttribute("type", "button");
                newProj.value = newProjForm.value;
                sidebar.appendChild(newProj);
                projects.push(newProjForm.value);
                storeProj();

                //adds project to new/edit todo form
                const projOpt = document.createElement("option");
                    projOpt.value = (projects.length - 1);
                    projOpt.innerHTML = newProjForm.value;
                    project.appendChild(projOpt);
                    newProjForm.value = "";
                    newProjForm.placeholder = "Project Name";

                //filters between projects
                newProj.addEventListener("click", () => {
                    const card = document.querySelectorAll(".card");
                        card.forEach((e) => {
                            const cardProj = e.getAttribute("data-proj");
                            const projNumb = newProj.getAttribute("id");
                            if (cardProj !== projNumb) {
                                e.style.display = "none";
                            } else {
                                e.style.display = "block";
                            }
                        })
                })

                //creates delete proj btn
                const delProj = document.createElement("input");
                    delProj.setAttribute("type", "button");
                    delProj.setAttribute("class", "delProj");
                    delProj.setAttribute("id", projects.length);
                    sidebar.appendChild(delProj);
                    let numb = projects.length - 1;
                    delProj.addEventListener("click", () => {
                            newProj.remove();
                            projOpt.remove();
                            delProj.remove();
                            localStorage.removeItem(`proj${numb}`);
                        
                    })
            }
        });
    sidebar.appendChild(newProjBtn);
};



//localStorage
function getProj() {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(`proj${i}`)) {
            const btn = localStorage.getItem(`proj${i}`);
            const newProj = document.createElement("input");
                newProj.setAttribute("class", "projBtn");
                newProj.setAttribute("id", projects.length);
                newProj.setAttribute("type", "button");
                newProj.value = btn;
                projects.push(btn);

                //adds project to new/edit todo form
                const projOpt = document.createElement("option");
                    projOpt.value = (projects.length - 1);
                    projOpt.innerHTML = btn;
                    project.appendChild(projOpt);

                //filters between projects
                newProj.addEventListener("click", () => {
                    const card = document.querySelectorAll(".card");
                        card.forEach((e) => {
                            const cardProj = e.getAttribute("data-proj");
                            const projNumb = newProj.getAttribute("id");
                            if (cardProj !== projNumb) {
                                e.style.display = "none";
                            } else {
                                e.style.display = "block";
                            }
                        })
                }) 

                sidebar.appendChild(newProj);

                //creates delete proj btn
                const delProj = document.createElement("input");
                    delProj.setAttribute("type", "button");
                    delProj.setAttribute("class", "delProj");
                    delProj.setAttribute("id", projects.length);
                    sidebar.appendChild(delProj);
                    let numb = projects.length - 1;
                    delProj.addEventListener("click", () => {
                            newProj.remove();
                            projOpt.remove();
                            delProj.remove();
                            localStorage.removeItem(`proj${numb}`);
                        
                    })
                
        } else {
            storeProj();
        }
    }
};

function storeProj() {
    for (let i = 0; i < projects.length; i++) {
        localStorage.setItem(`proj${i}`, projects[i]);
    }
};

function storageProj() {
    if (localStorage){
        getProj();
    } else {
        storeProj();
    }
};




//default project btn/see all projects btn
function defaultProj() {
    const defaultProj = document.createElement("input");
        defaultProj.setAttribute("class", "projBtn");
        defaultProj.setAttribute("id", "defaultProj");
        defaultProj.setAttribute("type", "button");
        defaultProj.value = "See All";
        defaultProj.addEventListener("click", () => {
            const card = document.querySelectorAll(".card");
                card.forEach((e) => {
                    e.style.display = "block";
                });
        });
        sidebar.appendChild(defaultProj);
};


//create new card button
function newCard() {
        const newBtn = document.createElement("input");
            newBtn.setAttribute("id", "newCard");
            newBtn.setAttribute("type", "button");
            newBtn.value = "New To-Do";
            newBtn.addEventListener('click', newForm);
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
            } else {
                card.style.borderColor = "red";
            }
            todosArr[cardID - 1].project = project.value;
            card.setAttribute("data-proj", project.value);
            storeArr();
        });

    //append submit/edit button to form
    const form = document.getElementById("newForm");
        form.appendChild(editBtn);
};

function doms() {
    newCard();
    newProject();
    defaultProj();
};

export default doms;
export {edCard};
export {storageProj};