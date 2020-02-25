import React from 'react'

class Evidence extends React.Component {
    render() {
       console.log(this.props)
        const { description, image, id, adventureId, deleteEvidence } = this.props
        const evidence = {
                key: Math.random(), 
                id: id,
                description: description,
                image: image,
                adventureId: adventureId,
                deleteEvidence: deleteEvidence 
        }

        return (
            <div>
                <li>
                    {description}
                    {image}
                    <button onClick={() => this.props.deleteEvidence(id)}>X</button>
                </li>
            </div>
        )
    }
}

export default Evidence;