import {toDos, storage} from "./modules/init";
import runDoms from "./modules/doms";
import {newCard} from "./modules/forms";
import projectsRun from "./modules/projects";
import {storageProj} from "./modules/projects";



const run = (() => {
    runDoms();
    toDos;
    //localStorage.clear();
    storage();
    newCard();
    projectsRun();
    storageProj();
})();