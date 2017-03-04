import React, {Component} from 'react';

class Gallery extends Component {
    render(){
        let altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png';
        return(
            <div className="book-list-wrapper row">
            {
                this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return(
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div key={index} className="book">
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : altImage} 
                                alt="Book Image"
                                className="book-image"
                                />
                                <div className="book-title">
                                    <h3>{title}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Gallery;