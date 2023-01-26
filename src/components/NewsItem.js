import React from 'react'

export default function NavItem(props) {
    return (
      <div className='my-2'>
        <div className="card"  >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{marginLeft: '-30px', zIndex: '1'}} >
          {props.source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={props.imageUrl?props.imageUrl:'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} className="card-img-top" alt="..." style={{maxHeight: '225px'}}/>
        <div className="card-body">
            <h5 className="card-title">{props.title?props.title.slice(0,45):""}... </h5>
            <p className="card-text">{props.desc?props.desc.slice(0,80):""}...</p>
            <p className="card-text"><small className="text-muted">Author: {props.author} on {new Date(props.date).toGMTString()}</small></p>
            <a href={props.url} target='_blank' rel="noreferrer" className="btn btn-primary  btn-sm">Read More</a>
        </div>
        </div>
      </div>
    )
}
