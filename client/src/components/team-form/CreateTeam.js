import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTeam } from '../../actions/team'

const CreateTeam = ({createTeam, history}) => {

    const [formData, setFormData] = useState ({
        name: '',
        description: '',
        hometown: '',
        manager: '',
        logo: '',
        arena: ''
    });

    const {name, description, manager, hometown, arena, logo} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value })

    const onSubmit = e => { e.preventDefault()
        createTeam(formData, history)
};

return (
    <Fragment>
        <h1 className="large text-primary" > Create your Team </h1>
        <p className="lead">
            <i className="fas fa-user"></i>
            Let's get some info to help your team stand out
        </p>
        <form className="form" onSubmit={e => onSubmit(e)} >
            <div className="form-group">
                <input type="text" placeholder="Your Team Name" 
                name="name" value={name} onChange={e => {onChange(e)}} />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Your team description"
                name="description" value={description} onChange={e => {onChange(e)}} />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Your team HomeTown" 
                name="hometown" value={hometown} onChange={e => {onChange(e)}} />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Team Manager"
                name="manager" value={manager} onChange={e => {onChange(e)}} />
            </div>

            <div className="form-group">
                <input type="text"  placeholder="Team logo" 
                name="logo" value={logo} onChange={e=>{onChange(e)}}  />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Your Arena"
                name="arena" value={arena} onChange={e => {onChange(e)}} />
            </div>

            <input type="submit" className="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        </form>

    </Fragment>
)

}

CreateTeam.propTypes = {
    createTeam: PropTypes.func.isRequired,
}

export default connect (null, {createTeam}) (withRouter(CreateTeam))