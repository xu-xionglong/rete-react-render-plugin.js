import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


class ReactNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let inputs = this.props.node.inputs;
        let reactInputs = [];
        inputs.forEach((input, key, map) => {
            reactInputs.push((
                <div className="input">
                    <span className="socket input-socket input" ref={ (element) => {this.props.bindSocket(element, "input", input)} }></span>
                    <div className="input-title">{input.key}</div>
                </div>
            ));

        });
        let outputs = this.props.node.outputs;
        let reactOutputs = [];
        outputs.forEach((output, key, map) => {
            reactOutputs.push((
                <div className="output">
                    <div className="output-title">{output.key}</div>
                    <div className="socket output" ref={ (element) => {this.props.bindSocket(element, "output", output)} }></div>
                </div>
            ));
        });
        let controls = this.props.node.controls;
        let reactControls = [];
        controls.forEach((control, key, map) => {
            reactControls.push((
                <div className="control" ref={ (element) => {this.props.bindControl(element, control)} }>
                {control.template}
                </div>
            ));
        });
        return (
            <div className="node">
                <div className="title">
                    {this.props.node.name}
                </div>
                {reactInputs}
                {reactOutputs}
                {reactControls}
            </div>
        );
    }
}

function createNode(editor, { el, node, component, bindSocket, bindControl }) {
    return ReactDOM.render(
        <ReactNode 
            node={node}
            bindSocket={bindSocket}
            bindControl={bindControl}
        />,
        el
    );
}


function install(editor, params) {
    editor.on('rendernode', ({ el, node, component, bindSocket, bindControl }) => {
        if (component.render && component.render !== 'react') return;
        let reactNode = createNode(editor, { el, node, component, bindSocket, bindControl });
    });

    editor.on('rendercontrol', ({ el, control }) => {
        

    });

    editor.on("connectioncreated connectionremoved", connection => {
        
    });
    editor.on("nodeselected", () => {

    });  
}

export default {
    name: 'rete-react-render',
    install
}