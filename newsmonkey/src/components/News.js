import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(props){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5cfdc1d392b34531bb11de8e4d8a3513&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }
  handlePrevClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5cfdc1d392b34531bb11de8e4d8a3513&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
    })
  }
  handleNextClick=async()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5cfdc1d392b34531bb11de8e4d8a3513&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data= await fetch(url)
      let parsedData=await data.json()
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })
    }
  }
  render() {
    return (
      <div className='container my-3'>
           <h1 className='text-center'>News Monkey - Top Headlines</h1>
           {this.state.loading&&<Spinner />}
           <div className='row'>
           {!this.state.loading&&this.state.articles.map((itm)=>{
            return <div className='col-md-4'>
              <NewsItem  key={itm.url} title={itm.title?itm.title:""} description={itm.description?itm.description:""} imageUrl={itm.urlToImage?itm.urlToImage:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} newsUrl={itm.url}/>
           </div>       
           })}  
           </div>
           <div className='container d-flex justify-content-between'>
           <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
           <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           </div>
      </div>
    )
  }
}
