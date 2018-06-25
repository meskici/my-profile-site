import React from 'react';
import 'wired-elements';
import Toggle from './buttons';
class Linebox extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { elevation:2 };
    }


    render() {
        return (
            <wired-card elevation="3">
                <p>Hello this is Mert </p>
                <Toggle> 1</Toggle>
                <Toggle>2 </Toggle>

                <Toggle>3 </Toggle>



            </wired-card>



            )
    }
}
export default Linebox;