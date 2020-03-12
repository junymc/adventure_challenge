import React from 'react'
import Adventure from './Adventure'
import { connect } from 'react-redux'

class Adventures extends React.Component {


// adventures is array of hash
    render() {
        
        const adventures = this.props.adventures.adventures.map(adventure => (
            <Adventure key={Math.random()} 
                    id={adventure.id}
                    name={adventure.name}
                    category={adventure.category}
                    cost={adventure.cost}
                    time={adventure.time}
                    duration={adventure.duration}
                    description={adventure.description}
                    scratch={adventure.scratch}
                    scratchAdventure={adventure.scratchAdventure}/>
        ))

        return (
            <div className="horizontal-scroll-wrapper squares">
                    { adventures }
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

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);