import j from 'jquery'
export default function () {
    let element = j('<div></div>')
    element.html(_.join(['Hello', 'webpack'], ' '))

    return element.get(0)

}



