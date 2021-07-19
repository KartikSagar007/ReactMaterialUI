import React from 'react';
import SeperatorComp from './seperatorComp';


class Togglecomp extends React.Component{
    constructor(){
        super();
        this.state = {
            show: true,
            count: 42
        }
    }
    incrementCount= () => {
        this.setState({
            count:this.state.count+1
        })
    }
    decrementCount= () => {
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <div>
                    <h2 className="counter">Counter: {this.state.count}</h2>
                    <button className="counter-button"  title={"increment"} onClick={this.incrementCount} >Increase</button>
                    <button className="counter-button"  title={"decrement"} onClick={this.decrementCount} >Decrease</button>
                </div>
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