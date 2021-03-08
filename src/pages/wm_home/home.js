import React from 'react';
import Navbar from '../wm_navigation/Navbar';
import BottomNav from '../wm_navigation/BottomNav';
import './styles/home.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loadUser } from '../wm_actions/auth';
// import { loadUsers, updateSentRequest } from '../wm_actions/connects';
import { Redirect } from 'react-router-dom';
import Posts from '../wm_posts/posts';

class Home extends React.Component {
    state = {
        profession: this.props.profession
    }
    async componentDidMount() {
        await this.props.loadUser();
        console.log('This is the Home Page')
        console.log(this.props.profession.length);
        
    }
    static propTypes = {
        users: PropTypes.string,
        profession: PropTypes.array,
        genre: PropTypes.array,
    }
    render() {
        // console.log(this.state.profession)
        // if (this.props.profession.length !== 2) {
        //     window.location.reload(false)

        // }
        if (this.props.profession.length !== 2) {
            return <Redirect to='/completeProfile' />
        }
        return (
            <div>
                <Navbar />
                <Posts />
                <BottomNav />
            </div >
        )
    }
}
const mapStateToProps = state => ({
    profession: state.auth.profession,
})
export default connect(mapStateToProps, { loadUser })(Home);