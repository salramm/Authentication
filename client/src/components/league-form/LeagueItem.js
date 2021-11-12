import React, { Fragment, useEffect} from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCurrentLeague } from '../../actions/league'

export const LeagueItem = ({getCurrentLeague, league: {league}}) => {
    useEffect(() => {
        getCurrentLeague()
    }, [] )


    return (
        <div>
            Hello this is a League Item
        </div>
    )
}

LeagueItem.propTypes = {
    getCurrentLeague: PropTypes.func.isRequired,
    league: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    league: state.league
})

export default connect(mapStateToProps, {getCurrentLeague}) (LeagueItem)