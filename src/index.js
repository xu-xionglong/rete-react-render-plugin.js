import React from 'react';
import ReactDOM from 'react-dom';

function createNode(editor, { el, node, component, bindSocket, bindControl }) {
	ReactDOM.render(
	  React.createElement('div', null, 'Node'),
	  el
	);    
}

function createControl(editor, { el, control }) {
	ReactDOM.render(
	  React.createElement('div', null, 'Control'),
	  el
	);      
}

function install(editor, params) {
    editor.on('rendernode', ({ el, node, component, bindSocket, bindControl }) => {
        if (component.render && component.render !== 'react') return;
        createNode(editor, { el, node, component, bindSocket, bindControl });
    });

    editor.on('rendercontrol', ({ el, control }) => {
        if (control.render && control.render !== 'react') return;
        createControl(editor, { el, control });
    });
}

export default {
    name: 'rete-react-render',
    install
}