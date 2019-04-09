import React from 'react';
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, Component</h1>;
//     }
// }

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
export default Welcome 