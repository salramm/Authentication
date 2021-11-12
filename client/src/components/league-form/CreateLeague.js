import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLeague } from '../../actions/league';

const CreateLeague = ({createLeague, history}) => {

    const [formData, setFormData] = useState ({
        league: '',
        description: '',
        headquarters: '',
        commissioner: '',
        rules: ''
    });

    const {league, description, headquarters, commissioner, rules} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        createLeague(formData, history)
    }


    return (
        <Fragment>
            <h1 className="large text-primary"> Create Your League</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some infomration to make your league stand out
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Your League Name" name="league"
                    value={league} onChange={e => onChange(e)}></input>
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

CreateLeague.propTypes = {
    createLeague: PropTypes.func.isRequired,
}

export default connect(null, {createLeague}) (withRouter (CreateLeague));