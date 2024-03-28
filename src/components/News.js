import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
const[articles,setArticles] = useState([]);
const[loading,setLoading] = useState(true);
const[page,Setpage] = useState(1);
const[totalResults, setTotalResults] = useState(0)
document.title = props.category;

  const newsUpdate = async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading: true})
    setLoading(true)
    let response = await fetch(url);
    props.setProgress(30)

    let data = await response.json();
    props.setProgress(50)

    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false)
    props.setProgress(100)

  }
  useEffect(() => {
    newsUpdate();
    // eslint-disable-next-line
  }, [])
  
    // async componentDidMount(){
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    //     this.setState({loading: true})
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     this.setState({
    //       articles:data.articles,
    //       totalResults: data.totalResults,
    //        loading: false,

    //     })
    // }
  const  fetchMoreData = async() =>{
      // this.setState({page: page + 1});
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
      Setpage(page +1)
      // this.setState({loading: true})
      // setLoading(true)
      let response = await fetch(url);
      let data = await response.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults)
      // this.setState({
      //   articles:articles.concat(data.articles),
      //   totalResults:data.totalResults ,
      //   loading:false,
      // })
    };

    // handlePrevClick= async()=>{
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
      // let response = await fetch(url);
      // let data = await response.json();
      // this.setState({
      //   page: this.state.page - 1,
      //   articles:data.articles
      // })
    //   this.setState({page: this.state.page - 1})
    //   this.newsUpdate()
    // }
    // handleNextClick= async()=>{
      // if(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)){}else{
      //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
      //   let response = await fetch(url);
      //   let data = await response.json();
      //   this.setState({
      //     page: this.state.page + 1,
      //     articles:data.articles,
      //   })
      // }
    //   this.setState({page: this.state.page + 1 })
    //   this.newsUpdate()
    // }
    return (
      <>
      <div className='container' style={{paddingTop: "4rem",}}>
      <h2 style={{textAlign:"center",lineHeight: "1rem"}}>NewsApp - Top Headlines</h2>
                <h3 style={{textAlign:"center"}}>designed by Mir Murtaza Bashir</h3>
      </div>
                {loading && <Spinner/>}
                <InfiniteScroll
                          dataLength={articles.length}
                          next={fetchMoreData}
                          hasMore={articles.length !== totalResults}
                          loader={<Spinner/>}
                >
                  <div className="container">
                  <div className="row">
         {articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} title={element.title?element.title.slice(0,45):""} publish={element.publishedAt} description={element.description? element.description.slice(0,88):""} imgUrl={element.urlToImage} url={element.url}/>
            </div>
            })}
        </div>
                  </div>
        {/* <div className="container d-flex justify-content-between py-3">
        <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-success">prev &#8592;</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.PageSize) } onClick={this.handleNextClick} className="btn btn-success">Next &#8594;</button>
      </div> */}
      </InfiniteScroll>
      </>
    )
}
News.defaultProps={
  country: "in",
  pageSize: 8,
  category: "general"
}
News.propTypes={
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string,
}
export default News;