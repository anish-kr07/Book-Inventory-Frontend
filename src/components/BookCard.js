import React from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import  MakeStyles  from '@material-ui/core/styles';
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
import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import Icon from '@material-ui/core/Icon';
// import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import '../App.css';

export default class BookCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            bookPrice:this.props.data.price,
            bookQuantity:this.props.data.quantity,
            show:false,
            disabled:true,
            changeEditButtonTOSave:false,
            view:this.props.view,
            screen:"EditBook"
        };
        this.updateBookInfo = this.updateBookInfo.bind(this);
    }

    updateBookInfo(){
        // this.props.updateBookInfo(book);
        this.setState({disabled:false})
    }
    editBookInfoToAddToStore(){
        this.setState({disabled:false,screen:"AddBook"})
        this.setState({view:"EditBook"})
        this.setState({changeEditButtonTOSave:true})

    }

    updateBookInfoCancel(){

       this.state.screen =="AddBook"? this.setState({disabled:true,view:"AddBook",bookPrice:this.props.data.price,
                                    bookQuantity:0})
                                    :this.setState({disabled:true, changeEditButtonTOSave:false,bookPrice:this.props.data.price,
                                    bookQuantity:this.props.data.quantity})
    }

    afterSaveEffect(){
        this.setState({disabled:true, changeEditButtonTOSave:false})
    }

    deleteBook(){
        axios.delete("http://localhost:8080/deleteBook/"+this.props.data.id)
        .then(rsp => {
            this.setState({bookList:rsp.data})
            this.handleClose()
        })
    }
    
    handleClose() {
        this.setState({ show: false },()=>{
          window.location.reload()
        });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      _onChangeDispatecherPrice =(e)=>{
        this.setState({changeEditButtonTOSave:true})
        this.setState({bookPrice:e.slice(3)})
      }

      _onChangeDispatecherQuantity =(e)=>{
        this.setState({changeEditButtonTOSave:true})
        this.setState({bookQuantity:e})
      }

      saveData(){
        let book  ={}
        book.price=this.state.bookPrice;
        book.quantity = this.state.bookQuantity;
        if(this.props.data.id){
            axios.put("http://localhost:8080/editBook/"+this.props.data.id, book)
                .then(rsp =>{
                    this.afterSaveEffect();
                    window.location.reload()

                })
        }else{
            book.imageLinks = this.props.data.imageLinks
            book.title = this.props.data.title
            book.description = this.props.data.description
            book.authors = this.props.data.authors
            axios.post("http://localhost:8080/addBook/", book)
            .then(rsp =>{
                this.afterSaveEffect();
                //  window.location.reload()
            })
        }
    }

    render(){

        let editButton = "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        let saveButton = "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
        let cancelButton = "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        let deleteButton = "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        let buttonsForEditBook = <div>
                                    <Button
                                            onClick={() =>this.updateBookInfo()}
                                            id="editButton"
                                            > <IconButton  color="primary">
                                                <SvgIcon>
                                                    <path d={editButton} />
                                                </SvgIcon>
                                            </IconButton>
                                    </Button>
                                    <Button 
                                            id="deleteButton"
                                            onClick={()=>{this.deleteBook()}}
                                        > <IconButton aria-label="Delete" color="primary">
                                                <SvgIcon>
                                                    <path d={deleteButton} />
                                                </SvgIcon>
                                            </IconButton>
                                    </Button>
                                </div>
          let buttonsForAddBook = <div>
                                        <Button
                                        id="addtoStore"
                                         variant="contained" color="primary" style={{margin:'1em',textAlign:'right'}}  
                                         onClick={()=>this.editBookInfoToAddToStore()}>
                                            Add to Store
                                        </Button>
                                    </div>
        let buttonsForSaveChanges = <div>
                                        <Button
                                            id="saveButton"
                                            onClick={() =>this.saveData()}
                                            > 
                                                <IconButton  color="primary">
                                                    <SvgIcon>
                                                        <path d={saveButton} />
                                                    </SvgIcon>
                                                </IconButton>
                                        </Button>
                                        <Button
                                            id="cancelButton"
                                            onClick={() =>this.updateBookInfoCancel()}
                                            > 
                                                <IconButton  color="primary">
                                                    <SvgIcon>
                                                        <path d={cancelButton} />
                                                    </SvgIcon>
                                                </IconButton>
                                        </Button>
                                    </div>

        let footerButtons= this.state.view === "EditBook" ? this.state.changeEditButtonTOSave? buttonsForSaveChanges : buttonsForEditBook : buttonsForAddBook
        return (
            <div className="create-student">
                <div>
                <Card className="cardWhole">
                    <CardHeader
                        id="cardTitle"
                        title={this.props.data.title}
                        subheader={"By "+(this.props.data.authors && this.props.data.authors.join(", "))}
                    />
                    <CardMedia
                        className="cardMedia"
                        image={this.props.data.imageLinks && this.props.data.imageLinks.smallThumbnail}
                        // height="500"
                    />
                    <CardContent  className="cardDescription">
                        <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.data.description && this.props.data.description.substring(0,150)+"..."}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <TextField
                            required
                            id="book-price"
                            label="Price :"
                            value = { "Rs "+ this.state.bookPrice}
                            margin="normal"
                            disabled={this.state.disabled}
                            onChange={()=>{this._onChangeDispatecherPrice(event.target.value)}}
                        />
                        <TextField
                            required
                            id="book-quantity"
                            label="Quantity :"
                            value = {this.state.bookQuantity}
                            margin="normal"
                            disabled={this.state.disabled}
                            onChange={()=>{this._onChangeDispatecherQuantity(event.target.value)}}
                        />
                    </CardContent>
                    <CardContent>
                        {footerButtons}
                    </CardContent>
                </Card>
                </div>
                {/* <Popover
                id="deletBookPopUp"
                open={this.state.show}
                // anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
                }}
                transformOrigin={{
                vertical: "top",
                horizontal: "center"
                }}
            >
                <Typography className="">
                The content of the Popover.
                </Typography>
            </Popover> */}
            </div>
        )}
}
