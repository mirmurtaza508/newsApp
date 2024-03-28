import React from 'react'

const  NewsItem =(props)=> {
  
      let {title,description,imgUrl,url, publish,author,source} = props;
    return (
      <div className="container my-3" >
        <div className="card" style={{background: "black", color: "white",width: "18rem"}}>
          <div className="w-100%" style={{display:"flex", justifyContent: "end",position: "absolute",right: "0"}}>
          <span className="badge rounded-pill bg-danger" style={{zIndex: "1"}}>
          {source}
          </span>
          </div>
         <img src={!imgUrl? "https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-9561127-7706458.png":imgUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{description}...</p>
           <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(publish).toGMTString()}</small></p>
           <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary" style={{color:"white",background: "black",}}>Read More</a>
         </div>
       </div>
      </div>
    )
  }
  export default NewsItem
