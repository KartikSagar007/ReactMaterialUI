import React from 'react';
import Togglecomp from './toggleComp';
import SeperatorComp from './seperatorComp';
import SeperatorClassComp from './seperatorClass'
import SeperatorFuncComp from './seperatorFuncComp'

class Demos extends React.Component{
    /* constructor(){
        super();
    } */
    render(){
        return(
            <div>
                <hr></hr>
                All Demos below -
                <Togglecomp />
                {/* <ClassComp /> */}
                <SeperatorComp />
                <SeperatorClassComp />
                <SeperatorFuncComp />
                <hr></hr>
            </div>
        );
    }
}
export default Demos;
