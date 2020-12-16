import {toDos, storage} from "./modules/init";
import runDoms from "./modules/doms";
import {newCard} from "./modules/forms";
import projectsRun from "./modules/projects";
import {storageProj} from "./modules/projects";



const run = (() => {
    runDoms();
    toDos;
    storage();
    newCard();
    projectsRun();
    storageProj();
})();



try {
    run;
} catch (e) {
    if (e instanceof RangeError) {
        localStorage.clear();
        location.reload();
    } else {
        throw e;
    }
};

