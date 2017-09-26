import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Illustrations</li>
                    <li>Photographs</li>
                    <li>Drawings</li>
                </ul>
            </div>
        )
    }
}

module.exports = List;