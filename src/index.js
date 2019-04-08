import _ from 'lodash';
import j from 'jquery'
function component() {
    // let element = document.createElement('div');
    let element = j('<div></div>')



    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.html(_.join(['Hello', 'webpack'], ' '))

    // return element;
    return element.get(0)
}

document.body.appendChild(component());