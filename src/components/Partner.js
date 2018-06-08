import React, {Component} from 'react';

class Partner extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.partner.name}</td>
                <td>{this.props.partner.company.toString()}</td>
                <td>{this.props.partner.code}</td>
                <td>{this.props.partner.email}</td>
                <td>{this.props.partner.phone}</td>
            </tr>
        )
    }
}

export default Partner;