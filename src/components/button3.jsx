import React from 'react';
import 'wired-elements';

class Toggle3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
    }


    render() {
        return (
            <wired-button elevation="1">
              Eskici
            </wired-button>);
    }
}
export default Toggle3;
