import {toDos} from "../modules/init";

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
function editCard() {
    const cards = document.querySelectorAll(".card");
        cards.forEach(function edit(e) {
            const edBtn = document.createElement("input");
                edBtn.setAttribute("id", "edit");
                edBtn.setAttribute("type", "button");
                edBtn.setAttribute("value", "edit");
                edBtn.addEventListener('click', edCard);
                function edCard() {
                    const cardID = e.getAttribute("id");

                }
                e.appendChild(edBtn);
        })
};

//create new card overlay
function newCard() {
    const body = document.querySelector("#content");
        const newBtn = document.createElement("input");
            newBtn.setAttribute("id", "newCard");
            newBtn.setAttribute("type", "button");
            newBtn.setAttribute("value", "New To-Do");
            newBtn.addEventListener('click', newForm);

                const overlay = document.createElement("div");
                    overlay.setAttribute("class", "overlay");
                    const overBox = document.createElement("div");
                        overBox.setAttribute("id", "overlay");

                    //form start
                    const form = document.createElement("form");
                        form.setAttribute("id", "newForm");

                        const titleL = document.createElement("label");
                            titleL.setAttribute("for", "formTitle");
                            titleL.innerHTML = "Title: ";
                            form.appendChild(titleL);
                        const titleI = document.createElement("input");
                            titleI.setAttribute("type", "text");
                            titleI.setAttribute("name", "title");
                            titleI.setAttribute("id", "formTitle");
                            form.appendChild(titleI);

                        const descL = document.createElement("label");
                            descL.setAttribute("for", "formDesc");
                            descL.innerHTML = "Description: ";
                            form.appendChild(descL);
                        const descI = document.createElement("input");
                            descI.setAttribute("type", "text");
                            descI.setAttribute("name", "desc");
                            titleI.setAttribute("id", "formDesc");
                            form.appendChild(descI);

                        const dueL = document.createElement("label");
                            dueL.setAttribute("for", "formDueDate");
                            dueL.innerHTML = "Due Date: ";
                            form.appendChild(dueL);
                        const dueI = document.createElement("input");
                            dueI.setAttribute("type", "date");
                            dueI.setAttribute("name", "dueDate");
                            titleI.setAttribute("id", "formDueDate");
                            form.appendChild(dueI);

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

                        
                        const subBtn = document.createElement("input");
                            subBtn.setAttribute("type", "button");
                            subBtn.setAttribute("value", "Submit");
                            subBtn.setAttribute("id", "subBtn");
                            subBtn.addEventListener('click', () => {
                                new toDos(titleI.value, descI.value, dueI.value, priority.value)
                            });
                            form.appendChild(subBtn);

                        const cancelBtn = document.createElement("input");
                            cancelBtn.setAttribute("type", "button");
                            cancelBtn.setAttribute("value", "Cancel");
                            cancelBtn.setAttribute("id", "cancelBtn");
                            cancelBtn.addEventListener("click", closeForm);
                            form.appendChild(cancelBtn);
                            
                        overBox.appendChild(form);
                    overlay.appendChild(overBox);
                body.appendChild(overlay);

            function newForm() {
                const overlay = document.querySelector(".overlay");
                return overlay.style.display = "block";
            }

            function closeForm() {
                const overlay = document.querySelector(".overlay");
                return overlay.style.display = "none";
            }
            
        body.appendChild(newBtn);
};

//need to define the nameForm things

//mark as complete

//I'd like to make a fade effect


function doms() {
    deleteCard();
    editCard();
    newCard();
};

export default doms;