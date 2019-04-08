import j from 'jquery'
export default function () {
    let element = j('<div></div>')
    element.html(_.join(['Hello', 'webpack','webpack-dev-server'], ' '))

    return element.get(0)

}



