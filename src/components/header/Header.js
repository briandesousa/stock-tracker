import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {

    render() {
        if (this.props.isLoggedIn) {
            return (
                <Jumbotron>
                    <h4>Stock Tracker App</h4>
                    <h1>Welcome back {this.props.firstName} {this.props.lastName}</h1>
                </Jumbotron>
            );
        } else {
            return (
                <Jumbotron>
                    <h4>Stock Tracker App</h4>
                    <h1>Welcome!</h1>
                    <p><Button variant="primary">Get Started</Button></p>
                </Jumbotron>
            );
        }
    }
}

export default Header;