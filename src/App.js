import React, {Component} from 'react';
import './App.css';
import Table from "./Table/Table";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch("https://bitbucket.org/GuestOne/goodline-test-task/raw/aa16bc87df8355deef678f4b69a2b6d9fe0f9832/frontend/data.json")
            .then(response => response.json())
            .then(data => {
                this.setState({data})
            })
    }

    render() {
        return (
            <div className='wrapper'>
                <Table
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default App;
