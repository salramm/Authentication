import React, {Fragment, useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLeague, getCurrentLeague } from '../../actions/league';
import { getCurrentProfile } from '../../actions/profile';

const EditLeague = ({ createLeague, getCurrentLeague, league: {league, loading}, getCurrentProfile, history}) => {

    const [formData, setFormData] = useState ({
        league_name: '',
        description: '',
        headquarters: '',
        commissioner: '',
        rules: ''
    });

    useEffect(() => {
        getCurrentLeague();

        setFormData({
            league_name: loading || !league.league ? '' : league.league,
            description: loading || !league.description ? '' : league.description,
            headquarters: loading || !league.headquarters ? '' : league.headquarters,
            commissioner: loading || !league.commissioner ? '' : league.commissioner,
            rules: loading || !league.rules ? '' : league.rules,
        })
    }, [loading] )

    const {league_name, description, headquarters, commissioner, rules} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        createLeague(formData, history, true)
    }


    return (
        <Fragment>
            <h1 className="large text-primary"> Create Your League</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some infomration to make your league stand out
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Your League Name" name="league_name"
                    value={league_name} onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="A few words about your league" 
                    name="description" value={description} onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Your League Headquarters"
                    name="headquarters" value={headquarters} onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Your League Commissioner" 
                    name="commissioner" value={commissioner} onChange={e => onChange(e)}></input>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Your League Rules" name="rules"
                    value={rules} onChange={e => onChange(e)}></input>
                </div>

                <input type="submit" className="btn btn-primary my-1"></input>
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

EditLeague.propTypes = {
    createLeague: PropTypes.func.isRequired,
    getCurrentLeague: PropTypes.func.isRequired,
    league: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    league: state.league,
    profile: state.profile
})

export default connect(mapStateToProps, {createLeague, getCurrentLeague, getCurrentProfile}) (withRouter (EditLeague));