import React, {Component} from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';

class GalleryModal extends Component {
    getInitialState() {
        return {show: false};
    }

    showModal() {
        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false});
    }

    render(){
        return(
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal}>
                Launch demo modal
                </Button>
            <Modal
            show = {this.state.show}
            onHide = {this.hideModal}
            dialogClassName="book-moreinfo"
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
            </Modal.Header>
            
            </Modal>
            </ButtonToolbar>
        )
    }
}