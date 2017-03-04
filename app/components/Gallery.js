import React, {Component} from 'react';

class Gallery extends Component {
    render(){
        let altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png';
        let noPrice = 'Not For Sale';
        return(
            
            <div className="book-list-wrapper row">
            {
                this.props.query ? (
                    <h2 className="white-text">Search Results For: {this.props.query}</h2>
                ):null
            }
                
            {
                this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    let {amount} = item.saleInfo.listPrice !== undefined ? item.saleInfo.listPrice : noPrice ;
                    return(
                        <div key={index} className="col-sm-12 col-md-4 col-lg-3 book-column">
                            <a className="book" href={infoLink} target="_blank">
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : altImage} 
                                alt="Book Image"
                                className="book-image"
                                />
                                <div className="book-price white-text">{amount !== undefined ? '$' + amount : noPrice}</div>
                                <div className="book-title white-text">
                                    <h3>{title}</h3>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Gallery;