import React, {Component} from 'react';
import Partner from "./Partner";

class PartnerList extends Component {
    constructor(props) {
        super(props);
        this.state = {partners: []};
    }

    componentDidMount() {
        fetch('http://192.168.99.100:8080/partners')
            .then(response => response.json())
            .then(data => this.setState({partners: data}));
    }

    render() {
        let partners = this.state.partners.map(partner =>
            <Partner key={partner.id} partner={partner}/>
        );

        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Is company</th>
                    <th>Code</th>
                    <th>Email address</th>
                    <th>Phone number</th>
                </tr>
                {partners}
                </tbody>
            </table>
        )
    }
}

export default PartnerList;