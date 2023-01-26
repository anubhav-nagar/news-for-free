import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // constructor(){
  //     super();
  //     this.setState = {
  //         article: []
  //     }
  // }
  // async componentDidMount(){
  //     const url='https://newsapi.org/v2/top-headlines?country=in&apiKey=8daeb504c9a64b5fb20544ecbe737306';
  //     // let data = await fetch(url)
  //     // let parsedData = await data.json();

  //     // fetch(url)
  //     // .then((res)=>res.json())
  //     // .then((res)=>{
  //     //     // console.log(res)
  //     //     console.log(res.articles.slice(0,1))
  //     //     this.setState= {article:res.articles.slice(0,1)}
  //     // })

  //     try{
  //         const res = await fetch(url);
  //         const articles = await res.json();
  //         console.log(articles);
  //         this.setState= {articles: articles};
  //         console.log(articles);
  //     }catch(err){
  //         console.log(err);
  //     }
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotal] = useState(0);
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const res = await fetch(url);
    const parsedRes = await res.json();
    setArticles(parsedRes.articles);
    setTotal(parsedRes.totalResults);
    setPage(page+1);
    // console.log(props.state.articles);
  };
  useEffect(() => {
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const res = await fetch(url);
    let parsedRes = await res.json();
    setArticles(articles.concat(parsedRes.articles));
    setTotal(parsedRes.totalResults);
  };

  return (
    <>
        <h3 style={{marginTop: '67px', marginLeft: '8%'}}>Top headlines</h3>
        {/* {loading && <Spinner />} */}
        {/* {console.log("Total: "+totalResults)}
        {console.log("Length: "+articles.length)} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles ? (articles.length < totalResults-1) : false}
          loader={
            <h4>
              <Spinner />
            </h4>
          }
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    {/* {console.log(element.url)} */}
                    <NewsItem
                      title={element.title}
                      desc={element.description}
                      url={element.url}
                      imageUrl={element.urlToImage}
                      author={element.author ? element.author : "unknown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
    </>
  );
};

export default News;
