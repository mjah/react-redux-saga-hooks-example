import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions';

const Post = ({ getData, articles }) => {
  useEffect(() => {
    getData()
  }, [])

  return (
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => (
  { articles: state.remoteArticles.slice(0, 10) }
)

const mapDispatchToProps = (dispatch) => (
  { getData: () => dispatch(getData()) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Post);