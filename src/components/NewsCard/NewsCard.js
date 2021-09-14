import React from "react";

function NewsCard (props) {

    const { title, text, imgUrl, updatedAt} = props;
    
    const regex = /-/g;

    const date = updatedAt.slice(0,10).replace(regex, ' ')

    return (
        <div className="card news-card">
            <div className="card-body w100 news-card-body">
                <h2 className="card-title news-title">{title}</h2>
                <div className="card-text news-text">{text}</div>
                <div className="card-img news-img className" style={{
                    backgroundImage: `url(http://localhost:5000/${imgUrl})`
                }} />
                <div className="news-date">{date}</div>
            </div>
        </div>
    )
}

export default NewsCard;