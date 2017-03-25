import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

class Layout extends React.Component {
    render(){
        return(
            <h1>Test react</h1>
        );
    }   
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
