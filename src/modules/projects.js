//retrieves page
const body = document.querySelector("#content");

//creates sidebar
const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");
    body.appendChild(sidebar);

//array of projects
let projects = [];


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
                const project = document.querySelector("#project");
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
                    delProj.value = "X";
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
                const project = document.querySelector("#project");
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
                    delProj.value = "X";
                    sidebar.appendChild(delProj);
                    let numb = projects.length - 1;
                    delProj.addEventListener("click", () => {
                            newProj.remove();
                            projOpt.remove();
                            delProj.remove();
                            localStorage.removeItem(`proj${numb}`);
                        
                    })
                
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



function projectsRun() {
    newProject();
    defaultProj();
};

export default projectsRun;
export {storageProj};