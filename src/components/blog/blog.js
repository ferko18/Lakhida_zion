import React, {Component} from 'react'
import { database } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import _ from 'lodash'


import blogActions from '../../store/blog/blogActions'



class Blog extends Component {
    
    // const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    //     await props.blogActions(values);
    //           props.history.push("/");
    //     if (props.error) setStatus(props.error);
    //     setSubmitting(false);

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         title: '',
    //         body: ''
    //     }

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.renderBlogs = this.renderBlogs.bind(this);
    // }


    // handleChange(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleSubmit(e){
    //     e.preventDefault();
      
    //     const Blog = {
    //         title: this.state.title,
    //         body: this.state.body
    //     }

    //     this.props.saveBlogs(Blog);

    //     // database.push(Blog);

    //    // console.log("blog submitted");
    // }

    // componentDidMount(){
    //     // database.on('value', (snapshot) => {
    //     //   this.setState({
    //     //     notes: snapshot.val()});
          
          
    //     // });
      
    //     this.props.getBlogs();
    //   }

    //
// renderBlogs(){
//     return _.map(this.props.blogs, (blog, key) => {
//        return(
//          <div key="key">
//                <h2>{blog.title}</h2>
//                <p>{blog.body}</p>
//                <button className="btn btn-danger btn-sx" onClick={()=> this.props.deleteBlogs(key)}>Delete</button>
//          </div>
//        )
//     })
  
//   }

    render(){

    
    
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input 
                                 type="text"
                                 name="title"
                                 placeholder="Title..."
                                 className="form-control no-border"
                                 required
                                />

                                <textarea 
                                 type="text"
                                 name="body"
                                 placeholder="Body..."
                                 className="form-control no-border"
                                 required
                                />
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = ({ firebase, blog }) => ({
    firebase,
    blog,
    error: blog.error,
    loading: blog.loading,
   // isLoaded: firebase.contact.isLoaded
    
  });



// function mapStateToProps(state, blog){
//     return{
//         blog: state.blog

// }

// }

export default connect(mapStateToProps, {blogActions}) (Blog);