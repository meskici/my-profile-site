import React from 'react';
import 'wired-elements';

class Toggle2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
    }


    render() {
        return (
            <wired-button elevation="2">
              Mert
            </wired-button>);
    }
}
export default Toggle2;
