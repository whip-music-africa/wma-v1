import React from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends React.Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
        }
    }
    render() {
        return (
            <React.Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors
})

export default connect(mapStateToProps)(withAlert(Alerts));