function doms() {

    //retrieves page
    const body = document.querySelector("#content");

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
};



function credit() {

    //retrieves page
    const body = document.querySelector("#content");

    //link
    const credLink = document.createElement("a");
        credLink.setAttribute("href", "https://github.com/savwiley/todos");
        body.appendChild(credLink);

    //fontawesome
    const cred = document.createElement("i");
        cred.setAttribute("class", "fab fa-github-square");
        cred.setAttribute("title", "View on GitHub");
        credLink.appendChild(cred);

};


function runDoms() {
    doms();
    credit();
};

export default runDoms;