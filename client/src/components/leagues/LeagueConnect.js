import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCurrentLeague } from '../../actions/league'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const LeagueConnect = ({getCurrentLeague, profile: { profile, loading }, league: { league }}) => {
    useEffect(() => {
        getCurrentProfile();
        getCurrentLeague();
    }, [] );

    return (
        loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">
            League
        </h1>
        <p className="lead">
        Your league is awesome 
        </p>

        <div style={{"color": "red", "background-color":"red, 0.5",  }}> 
            <p>Hey Buddy</p>
        </div> 

        {profile == null ? (<Fragment> </Fragment>) : (<Fragment> 
            <p> You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className="btn btn-primary my-1">
                Create League
            </Link>
        </Fragment>) }
    </Fragment>
    )
}


LeagueConnect.propTypes = {
    getCurrentLeague: PropTypes.func.isRequired,
    league: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    league: state.league,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, getCurrentLeague})(LeagueConnect)
