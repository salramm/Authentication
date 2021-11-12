import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const League = ({ league }) => {
    return (
        <div>
            <Fragment>
                <h2 className="my-2">You league</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>League</th>
                            <th className="hide-sm">Title</th>
                            <th className="hide-sm">Years</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{ league }</tbody>
                </table>
            </Fragment>
        </div>
    )
}

League.propTypes = {
    league: PropTypes.object.isRequired,
}

export default League
