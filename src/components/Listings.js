import React from 'react'
import cookie from 'cookie'
import { Link } from 'react-router-dom'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'

const cookies = cookie.parse(document.cookie)

const useStyles = makeStyles({
  bold: {
    fontWeight: '600',
  },
  underline: {
    fontWeight: '800',
    textDecoration: 'underline'
  }
});

const Listings = (props) => {

const classes = useStyles();

    return (
        <Container maxWidth="lg" className="car-container">
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow className={classes.bold}>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {
                        cookies["loggedIn"] ?  
                            <TableCell>Delete</TableCell>
                        : null
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((item, idx) => (
                    <TableRow key={item + idx}>
                        <TableCell className={classes.underline} component="th" scope="row"><Link to={`/listing/${idx}`}>{item.name}</Link></TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.hours}</TableCell>
                        <TableCell>{item.address}</TableCell>
                        <TableCell>
                        {
                        cookies["loggedIn"] ?  
                             <DeleteIcon
                                onClick={() => props.removeListing(idx)}
                                className="icon text-red" />
                        : null
                        }
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings