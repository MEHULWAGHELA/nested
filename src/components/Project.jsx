import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
    const param = useParams()
    return (
        <div>Project
            {param.id}
        </div>
    )
}

export default Project