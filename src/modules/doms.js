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

                        function createForm(nameForm) {
                            const label = document.createElement("label");
                                label.setAttribute("for", `${nameForm}`);
                                label.innerHTML = `${nameForm}: `;
                                form.appendChild(label);
                            if (nameForm == "Priority") {
                                const input = document.createElement("input");
                                    input.setAttribute("type", "radio");
                                    input.setAttribute("name", `${nameForm}`);
                                    form.appendChild(input);
                            } else if (nameForm == "Notes") {
                                const input = document.createElement("textarea");
                                    input.setAttribute("name", `${nameForm}`);
                                    form.appendChild(input);
                            } else {
                            const input = document.createElement("input");
                                input.setAttribute("type", "text");
                                input.setAttribute("name", `${nameForm}`);
                                form.appendChild(input);
                            }
                        };
            
                        createForm("Title");
                        createForm("Description");
                        createForm("Due Date");
                        createForm("Priority");
                        createForm("Notes");
                
                        overBox.appendChild(form);
                    overlay.appendChild(overBox);
                body.appendChild(overlay);
            };
        body.appendChild(newBtn);
};

//title, desc, dueDate, priority, notes

//mark as complete

//I'd like to make a fade effect


function doms() {
    deleteCard();
    editCard();
    newCard();
};

export default doms;