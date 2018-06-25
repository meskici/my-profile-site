import React from 'react';
import 'wired-elements';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
    }


    render() {
        return (
            <wired-button elevation="3">

            </wired-button>);
    }
}
export default Toggle;
