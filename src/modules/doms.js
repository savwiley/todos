//create delete button on cards
function deleteCard() {
    const cards = document.querySelectorAll(".card");
        cards.forEach(function del(e) {
            const delBtn = document.createElement("input");
                delBtn.setAttribute("id", "delete");
                delBtn.setAttribute("type", "button");
                delBtn.setAttribute("value", "X");
                delBtn.addEventListener('click', e.remove);
                e.appendChild(delBtn);
                console.log(e);
        })
}

//create edit button on cards (the hard part)

//create form



function doms() {
    deleteCard();
};

export default doms;