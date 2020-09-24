import React from 'react'
import { Container } from '@material-ui/core';

const Listing = (props) => {
    const id = props.match.params.id
    const listing = props.listings[id]

    return (
        <Container maxWidth="sm">
            <h2>{listing.name}</h2>
            <h3>{listing.address}</h3>
            <h3>{listing.hours}</h3>
            <p>{listing.description}</p>
        </Container>
    )
}

export default Listing