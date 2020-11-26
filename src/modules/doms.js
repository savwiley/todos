//create delete button on cards
//I'd like to make a fade effect
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

//create form



function doms() {
    deleteCard();
    editCard();
};

export default doms;