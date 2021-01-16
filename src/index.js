import {toDos, storage} from "./modules/init";
import runDoms from "./modules/doms";
import {newCard} from "./modules/forms";
import projectsRun, {storageProj} from "./modules/projects";



const run = (() => {
    runDoms();
    toDos;
    storage();
    newCard();
    projectsRun();
    storageProj();
})();