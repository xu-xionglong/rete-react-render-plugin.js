import React from 'react';
import ReactDOM from 'react-dom';


class ReactNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let inputs = this.props.node.inputs;
        let reactInputs = [];
        inputs.forEach((input, key, map) => {
            reactInputs.push((<div ref={ (element) => {this.props.bindSocket(element, "input", input)} }>{input.key}</div>));

        });
        let outputs = this.props.node.outputs;
        let reactOutputs = [];
        outputs.forEach((output, key, map) => {
            reactOutputs.push((<div ref={ (element) => {this.props.bindSocket(element, "output", output)} }>{output.key}</div>))
        });
        return (
            <div>
                {this.props.node.name}
                {reactInputs}
                {reactOutputs}
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
        if (control.render && control.render !== 'react') return;

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