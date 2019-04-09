import React from 'react';

class Baba extends React.Component {
    constructor() {
        super();
        this.state = {
            data: new Date(),
            text: 'FCH'

        }
    }
    // upDate() {
    //     this.setState({
    //         data: new Date()
    //     })
    // }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                data: new Date()
            })
        }, 1000)
    }
    render() {
        return (
            <div className='father'>
                地面调温冷暖舒适系统
                {/* <button onClick={() => { this.upDate() }}>upDate</button> */}
                <Welcome newDate={this.state.data} name={this.state.text} />
            </div>
        )
    }
}

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        console.log('我已经在 constructor 里将 props 和 state 初始化好了')
    }
    componentWillMount() {
        console.log('运行到这里的话，说明马上就要运行 render 了')
    }
    render() {
        console.log('嗯，这里是 render')
        return (
            <div className="dynamicUpdateTime">
                <h1>Hello, {this.props.name}</h1>
                <br />
                FCH推广进行时：{this.props.newDate.toString()}
            </div>
        )
    }
    componentDidMount() {

    }
    componentWillReceiveProps() {
    }
    shouldComponentUpdate() {
        return true
    }
    componentWillUpdate() {
        console.log('我要更新组件啦！')
    }
    componentDidUpdate() {
        console.log('更新完毕啦！')
    }
    componentWillUnmount() {
        console.log('要死了')
    }
}

export default Baba
