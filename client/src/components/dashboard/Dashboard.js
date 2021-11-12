import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentLeague } from '../../actions/league';
import { getCurrentTeam } from '../../actions/team';
import Spinner from '../layout/Spinner';
import { Link, Redirect } from 'react-router-dom';
import { DashboardActions } from './DashboardActions';
import { LeagueItem } from '../league-form/LeagueItem'
import League from './League'
import headquarters from '../../img/Headquarters.svg'


const Dashboard = ({ getCurrentProfile, getCurrentLeague, auth: { user }, profile: {profile, loading}, league: {league} }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    useEffect(() => {
        getCurrentLeague();
    }, []);

    return loading && league === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">
            Dashboard
        </h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcom to your profile {user && user.name}
        </p>
        
        { league !== null ? (<Fragment>
            <DashboardActions/> This is a home page of your {league.league}
            </Fragment>) : (<Fragment>  has not
            <p> Let's setup your League</p>
            <Link to='/create-league' className="btn btn-primary my-1">
                Create League
            </Link>
            <Link to='/create-team' className="btn btn-primary my-1">
                Join League
            </Link>
        </Fragment>) }
            <img src={headquarters} style={{ width: '400px', margin: 'auto', display: 'block'}} 
        alt='Loading...' />
    </Fragment>
    
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    league: PropTypes.object.isRequired,
    getCurrentLeague: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    league: state.league,
    // team: state.team
})

export default connect(mapStateToProps, { getCurrentProfile, getCurrentLeague }) (Dashboard);
