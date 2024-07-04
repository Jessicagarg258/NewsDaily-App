import React, {useEffect,useState} from 'react'

import Newsitem from './Newsitem'
// import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
       const[articles,setArticles]=useState([])
       const[loading,setLoading]=useState(true)
       const[page,setPage]=useState(1)
       const[totalResults,setTotalResults]=useState(0)
    
       
    
    const updateNews=async()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({loading:true});
      setLoading(true);
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json()
      console.log(parsedData);
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
    }
    useEffect(()=>{
       document.title=`${props.category}-News Daily`;
      updateNews();
      // eslint-disable-next-line
      
    },[])
    // async componentDidMount(){
      // console.log("cdm");
      // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8621ea2a2bd64ac6a6caeefcb228e316&page=1&pageSize=${props.pageSize}`;
      // this.setState({loading:true});
      // let data=await fetch(url);
      // let parsedData=await data.json()
      // console.log(parsedData);
      // this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,
      //   loading:false
      // })
    //   this.updateNews();
    // }

  //  const handlePrevClick=async()=>{
    //     // console.log("previous");
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8621ea2a2bd64ac6a6caeefcb228e316&page=${this.state.page-1 }&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data=await fetch(url);
    //     // let parsedData=await data.json()
    //     // console.log(parsedData);
    //     //  this.setState({
    //     //     page:this.state.page-1,
    //     //     articles: parsedData.articles,
    //     //     loading:false
    //     //   })
      

        // this.setState({page:this.state.page-1});
    //     setPage(page-1);
    //     updateNews();
    // }

  //  const handleNextClick=async()=>{
    //     // console.log("next");
    //     // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){

    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8621ea2a2bd64ac6a6caeefcb228e316&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     //   let data=await fetch(url);
    //     //   let parsedData=await data.json()
    //     //   console.log(parsedData);
    //     //    this.setState({
    //     //       page:this.state.page+1,
    //     //       articles: parsedData.articles,
    //     //       loading:false,
    //     //     })
    //     //   }
        // this.setState({page:this.state.page+1});
    //     setPage(page+1);
    //     updateNews();
    // }
    const fetchMoreData = async() => {
      // this.setState({page:this.state.page+1})
      
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      // this.setState({loading:true});
      setPage(page+1)
      let data=await fetch(url);
      let parsedData= await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      // this.setState({
      //   articles: this.state.articles.concat(parsedData.articles),
      //   totalResults:parsedData.totalResults,
      //   loading:false,
      //  })
    };

  
    return (
      <>
        <h1 className='text-center' style={{margin:"35px 0px",marginTop:"90px"}}>News Daily-Top {props.category} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={<Spinner/>}
           > 

       <div className="container">
           <div className="row">
        {articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
             <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
        })}
        </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-1" onClick={this.handlePrevClick}>&larr;Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)}type="button" className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
     */}
     </>
    );
  }

 News.propTypes={
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string,
   
 };
//  News.defaultProps={
//   country:'in',
//   pageSize:10,
//   category:"general"

//  };
export default News;