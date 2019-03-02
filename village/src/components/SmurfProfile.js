import React, {Fragment} from 'react';



class SmurfProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: this.props.smurfs,
            smurfProfile: this.props.activeSmurf,
            targetSmurf: []
        }
    }

    // CDM sends the id used as the profile 'id' to App.js
    componentDidMount() {
        this.props.setSmurfProfile(this.props.match.params.id);
    }

    addCurrentSmurf = () => {
        this.setState({
            smurfs: this.props.smurfs
        })
    }

    displaySmurf = (allSmurfs) => {
        const smurfArr = allSmurfs.map(smurf => {
            if(smurf.id === parseInt(this.props.activeSmurfID,0)) {
                return (
                    <Fragment key={smurf.id}>

                        <h3>{smurf.name}'s Profile</h3>
                        <h4>{smurf.age} smurf years old</h4>
                        <h4>{smurf.height} tall</h4>

                    </Fragment>
                )
            }
            return '';
        })
        return smurfArr
    }

    render () {
        return (
            <Fragment>
                <section className='smurf-profile' >

                    {this.displaySmurf(this.props.smurfs)}
                    
                </section>
            </Fragment>
        )
        
    }
}

export default SmurfProfile
