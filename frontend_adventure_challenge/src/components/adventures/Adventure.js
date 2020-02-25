import React from 'react'
import EvidencesContainer from '../../containers/EvidenceContainer'
import { connect } from 'react-redux'

class Adventure extends React.Component {
    
    
  render() {
    console.log(this.props)
    const  { name, category, cost, time, duration, scratch, description, id } = this.props
    return (
        <div>
            <ul className="boxed">
                <li className={scratch ? "shown" : "hidden"}> Name: {name} </li>
                <li> Category: {category} </li>
                <li> Cost:{cost} </li>
                <li> Time: {time} </li>
                <li> Duration: {duration} </li>
                <li className={scratch ? "shown" : "hidden"}> Description: {description} </li>
                <button onClick={() => this.props.scratchAdventure(id)}>Challenge!</button>
                {/* <EvidencesContainer adventure={adventure} /> */}
            </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => { 
    return {
        adventures: state.adventures,
        requesting: state.requesting
 }
}

const mapDispatchToProps = dispatch => ({
    scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id })
})


export default connect(mapStateToProps, mapDispatchToProps)(Adventure);

