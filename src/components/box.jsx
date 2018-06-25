import React from 'react';
import 'wired-elements';
import Toggle from './buttons';
import Toggle2 from './button2';
import Toggle3 from './button3';
class Linebox extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { elevation:2 };
    }


    render() {
        return (
            <wired-card elevation="3">
                <p>Hello this is Mert </p>
                <Toggle> </Toggle>
                <Toggle2> </Toggle2>

                <Toggle3> </Toggle3>



            </wired-card>



            )
    }
}
export default Linebox;
