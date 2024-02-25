import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d345bd74bca3441eb851e796a3fd2093";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({articles:data.articles})
    }
    constructor(){
        super()
        this.state={
            articles : [],
        }
    }
  render() {
    return (
      <div className="container">
                <h2>MonkeyNews</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description? element.description.slice(0,88):""} imgUrl={element.urlToImage} url={element.url}/>
            </div>
            })}

        </div>
      </div>
    )
  }
}
