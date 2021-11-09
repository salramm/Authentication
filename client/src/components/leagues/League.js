import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCurrentLeague } from '../../actions/league'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

const League = ({getCurrentLeague, league: { league }}) => {
    useEffect(() => {
        getCurrentProfile();
        getCurrentLeague();
    }, [] );

    return (
    <Fragment>
        <h1 className="large text-primary"> Howdy this is home page {league.league} </h1>

        <p> this team has been </p>
    </Fragment>
    )
}


League.propTypes = {
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

export default connect(mapStateToProps, { getCurrentProfile, getCurrentLeague})(League)
