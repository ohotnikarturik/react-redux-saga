import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import { Alert } from "./Alert";
// import {Alert} from './Alert'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  
  submitHandler = event => {
    event.preventDefault()
    
    const {title} = this.state

    if (!title.trim()) {
      return  this.props.showAlert('Title of post can\'t be empty')
    }
    
    const newPost = {
      title: title,
      id: Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState({ title: '' })
  }
  
  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
      }}))
  }
  
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert message={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Title of Post</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Create</button>
      </form>
    )
  }
}

//gets actions, then passing data to actions or make action with actions and actions passing data or action to reducer,
// then reducer changing initial sate, also gives props{state} for this PostForm component
const mapDispatchToProps = {
  createPost: createPost,
  showAlert: showAlert
}

//is used for selecting the part of the data from the store that the connected component needs
const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)