import React from 'react';
import SeperatorComp from './seperatorComp';


class Togglecomp extends React.Component{
    constructor(){
        super();
        this.state = {
            show: true
        }
    }
    render(){
        return(
            <div>
                <SeperatorComp />
                
                <div>toggle section - </div>
                {
                    this.state.show ? <h1>HideANDshow</h1> : null
                }
                <button onClick={()=>{this.setState({show : !this.state.show})}}>toggle me</button>
                
                <SeperatorComp />
            </div>
        );
    }
}
export default Togglecomp;