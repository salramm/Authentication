import React, {Fragment} from 'react'
import hero from '../../img/Basketball Player.svg'
import headquarters from '../../img/Headquarters.svg'
import { Link } from 'react-router-dom';
import commissioner from '../../img/Comissioner.svg'



export const League = ({ league }) => {
    return (
            <Fragment> 
            <h1 style={{justifyContent: 'center', display: 'flex', marginTop: '20px', marginBottom: '30px'}}> {league.league} </h1>
                <div class="hero" style={{justifyContent: 'center', display: 'flex'}}>
                    <img src={hero} style={{ width: '530px', margin: 'auto', display: 'block'}} alt='Loading...' />
                </div>

                <div style={{width:'100%', textAlign:'center'}} >
                    <div style="headquarters_split" style={{backgroundColor:'#f8f8f8', display: 'flex', justifyContent: 'space-between', paddingBottom:'20px'}}>
                        <img src={headquarters} style={{width:'450px', marginLeft:'200px', marginTop:'50px'}} />
                        <div style={{marginRight: '200px', marginTop: '150px', marginLeft:'100px'}}>
                        <h1>Headquarters </h1>
                        <p>Headquartered in {league.headquarters} {league.league} is the first of its kind
                            virtual fantasy basketball league</p>
                        </div>
                    </div>
                <div class="commissioner" style={{display: 'flex', justifyContent: 'space-between'}}>
                <img src={commissioner} style={{width:'450px', marginLeft:'200px', marginTop:'50px'}} />
                        <div style={{marginRight: '200px', marginTop: '150px', marginLeft:'100px'}}>
                        <h1>Headquarters </h1>
                        <p>Headquartered in {league.commissioner} {league.league} is the first of its kind
                            virtual fantasy basketball league</p>
                        </div>
                </div>

                </div>
            </Fragment>
    )
};