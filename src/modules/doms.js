import { toDos } from "./init";

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
            function newForm() {
                const overlay = document.createElement("div");
                    overlay.setAttribute("class", "overlay");
                    const overBox = document.createElement("div");
                        overBox.setAttribute("id", "overlay");

                    //form start
                    const form = document.createElement("form");
                        form.setAttribute("id", "newForm");

                        //function to create inputs
                        function createForm(nameForm, inner, inputType, priValue) {
                            const label = document.createElement("label");
                                label.setAttribute("for", `${nameForm}`);
                                label.innerHTML = `${inner}: `;
                                form.appendChild(label);
                            const input = document.createElement("input");
                                input.setAttribute("type", `${inputType}`);
                                input.setAttribute("name", `${nameForm}`);
                                if (inputType == "radio") {
                                    input.setAttribute("value", `${priValue}`)
                                };
                                form.appendChild(input);
                        };
            
                        createForm("Title", "Title", "text");
                        createForm("Description", "Description", "text");
                        createForm("DueDate", "Due Date", "date");
                        createForm("Priority", "Low", "radio", "low");
                        createForm("Priority", "Medium", "radio", "medium");
                        createForm("Priority", "High", "radio", "high");

                        const subBtn = document.createElement("input");
                            subBtn.setAttribute("type", "button");
                            subBtn.setAttribute("value", "Submit");
                            subBtn.setAttribute("id", "subBtn");
                            form.appendChild(subBtn);



                
                        overBox.appendChild(form);
                    overlay.appendChild(overBox);
                body.appendChild(overlay);
            };
        body.appendChild(newBtn);
};

/*
const subBtn = document.querySelector("#subBtn")
subBtn.addEventListener('click', function() {
    new toDos(Title.value, Description.value, DueDate.value, Priority.value)
}, false);
*/

//need to define the nameForm things

//mark as complete

//I'd like to make a fade effect


function doms() {
    deleteCard();
    editCard();
    newCard();
};

export default doms;