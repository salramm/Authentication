import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentLeague } from '../../actions/league';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { DashboardActions } from './DashboardActions';


const Dashboard = ({ getCurrentProfile, getCurrentLeague, auth: { user }, profile: {profile, loading}, league: { league } }) => {
    useEffect(() => {
        getCurrentProfile();
        getCurrentLeague();
    }, []);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">
            Dashboard
        </h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome {user && user.name} your league  
        </p>
        {profile == null ? (<Fragment>
            <DashboardActions/> </Fragment>) : (<Fragment> 
            <p> You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className="btn btn-primary my-1">
                Create League
            </Link>
            <Link to='/create-team' className="btn btn-primary my-1">
                Create Team
            </Link>
        </Fragment>) }
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentLeague: PropTypes.func.isRequired,
    league: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    league: state.league
})

export default connect(mapStateToProps, { getCurrentProfile, getCurrentLeague }) (Dashboard);
