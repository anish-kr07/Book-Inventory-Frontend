import React from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../App.css';


export default class BookCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }

    render(){
        return (
            <div className="create-student">
                {/* <h1>{this.props.title}</h1> */}
                {/* <form>
                    <img 
                        src="http://books.google.com/books/content?id=twlUtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" 
                     />
                     <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </form> */}
                <div>
                <Card >
                    <CardHeader
                        title="The Subtle art of Not Giving A F*ck"
                        subheader="By Anish"
                    />
                    <CardMedia
                        className="media"
                        image="http://books.google.com/books/content?id=twlUtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <label>Price : Rs 280/-</label>
                        <br />
                        <label>Quantity :10</label>
                    </CardContent>
                    <CardContent>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </CardContent>
                </Card>
                </div>
            </div>
        )}
}
