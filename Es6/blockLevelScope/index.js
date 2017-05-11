/**
 * Created by kalpana on 08/05/17.
 */

function blockLevelScope(parm = 'default param') {
    if(parm) {
        let parm = 'block param';
    }

    return parm;
}

var containerElm = document.getElementById('container');
containerElm.innerHTML = blockLevelScope();