import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import NewsList from '../../services/NewsList';
import { newsListLoaded } from '../../redux/actions/actions'

function Main(props) {

    const { loading, news, newsListLoaded } = props

    useEffect(() => {
        const newsList = new NewsList();
        newsList.getAllNews()
          .then(res => newsListLoaded(res))
      }, [newsListLoaded])

    if (loading) {
        return (
            <LoadSpinner />
        )
    }

    // news.map(newsListItem => {
    //     <div className="container center-component">
    //         <h1>НОВОСТНАЯ ЛЕНТА</h1>
    //         <NewsCard key={newsListItem.id} {...newsListItem}/>
    //     </div>
    // })

    return (
        <div className="container center-component">
            <h1>НОВОСТНАЯ ЛЕНТА</h1>
            { news.map(newsListItem => {
                return (
                    <NewsCard key={newsListItem.id} {...newsListItem}/>
                )
            })}
        </div>
    )

}

const mapStateToProps = (store) => {
    return {
        loading: store.loading,
        news: store.news
    }
}

const mapDispatchToProps = {
    newsListLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);