import React from 'react';

class Intro extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="title1">
                <h1>Dis my portfolio</h1>
                <p>Hello my name is Ege Noor and this is a crappy collection of things i have made.</p>
            </div>
        )
    }
}

module.exports = Intro;