import React, {Component} from 'react';
import axios from "axios"
const apiService = "https://jsonplaceholder.typicode.com/posts";
class HttpServices extends Component {

    state = {
        posts: []
    }

    handleAdd = async () => {
        let post = {
            title: "new post title",
            body: "new post body",
            id: 101
        }
        const { data: resPost } = await axios.post(apiService, post)
        const posts = [resPost, ...this.state.posts]
        this.setState({ posts })
    }

    handleDelete = async (post) => {
        const posts = this.state.posts.filter((p) => p.id !== post.id)
        this.setState({posts})
        await axios.delete(apiService + `/${post.id}`)
    }

    handleUpdate = async (post) => {
        post.title = "update title"

        const posts = [...this.state.posts]
        const index = posts.indexOf(post)
        posts[index] = { ...post }

        this.setState({ posts })
        await axios.put(apiService + `/${post.id}`,post)
    }


    async componentDidMount() {
        const response = await axios.get(apiService)
        const posts = response.data
        this.setState({ posts: posts })
    }

    handleClear = () => {
        this.setState({ posts: [] })
    }
    handleRefresh = () => {
        this.componentDidMount()
    }

    render() {
        return (
              <div className="row mt-4">
                  <div className="col-md-10 offset-md-1">
                      <button className="btn btn-info" onClick={this.handleAdd}>Add</button>
                      <button className="btn btn-info ml-4" onClick={this.handleClear}>Clear All</button>
                      <button className="btn btn-info ml-4" onClick={this.handleRefresh}>refresh</button>
                      <span className="ml-5">{this.state.posts.length}</span>
                      <table className="table">
                          <thead>
                          <tr>
                              <th>Title</th>
                              <th>Delete</th>
                              <th>Update</th>
                          </tr>
                          </thead>
                          <tbody>
                          {this.state.posts.map((p) =>
                              <tr key={p.id}>
                                  <th>{p.title}</th>
                                  <th>
                                      <button className="btn btn-danger" onClick={() => this.handleDelete(p)}>delete</button>
                                  </th>
                                  <th>
                                      <button className="btn btn-primary" onClick={() => this.handleUpdate(p)}>update</button>
                                  </th>
                              </tr>
                          )}
                          </tbody>
                      </table>
                  </div>
              </div>
        );
    }
}

export default HttpServices;