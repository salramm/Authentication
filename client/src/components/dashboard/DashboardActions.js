import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


export const DashboardActions = ({team}) => {
    return ( <div class="dash-buttons">
      { team !== null ? ( <Fragment>
        <Link to="/invite-friends" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> Invite Friends</Link>
        <Link to="/team" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> Team Home</Link>
      </Fragment>) : ( <Fragment>
        <Link to="/create-team" class="btn btn-light">
          <i class="fas fa-user-circle text-primary"></i> Create Team</Link>
        <Link to="/invite-friends" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> Invite Friends</Link> 
          </Fragment>
      )}
      <Link to="/league" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> League Home</Link> 
      </div>
    )
}
