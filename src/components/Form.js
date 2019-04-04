import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { addArticle } from '../redux/actions';

const Form = ({ foundBadWords, addArticle }) => {
  const [title, setTitle] = useState("");  

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = uuidv1()
    addArticle({ title, id })
    setTitle("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            placeholder="Enter title"
            onChange={handleChange}
        />
      </div>
      <div>
        { foundBadWords ? <p>Bad words found.</p> : "" }      
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  )
}

const mapStateToProps = (state) => (
  { foundBadWords: state.foundBadWords }
)

const mapDispatchToProps = (dispatch) => (
  { addArticle: article => dispatch(addArticle(article))}
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);