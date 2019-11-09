import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {

    render() {
        if (this.props.isLoggedIn) {
            return (
                <Jumbotron>
                    <h1>Welcome back {this.props.firstName} {this.props.lastName}</h1>
                    <p>Welcome to the Stock Tracker App</p>
                    <p>
                        <Button variant="primary">View Dashboard</Button>
                    </p>
                </Jumbotron>
            );
        } else {
            return (
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>This is the Stock Tracker App.</p>
                    <p>
                        <Button variant="primary">Get Started</Button>
                    </p>
                </Jumbotron>
            );
        }
    }
}

export default Header;