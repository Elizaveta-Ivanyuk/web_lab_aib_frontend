import { Component } from "react";

export class AddPostForm extends Component {
  state = {
    postTitel: "",
    postDescript: "",
    postTag: "",
  };

  handelPostTitelChange = (e) => {
    this.setState({
      postTitel: e.target.value,
    });
  };
  handelpostDescriptChange = (e) => {
    this.setState({
      postDescript: e.target.value,
    });
  };

  handelpostTagChange = (e) => {
    this.setState({
      postTag: e.target.value,
    });
  };

  CreatePost = () => {
    const post = {
      id: this.props.postArr.length +1,
      title: this.state.postTitel,
      description: this.state.postDescript,
      tag: this.state.postTag,
      liked: false,
    };
    this.props.addNewPost(post);
  };

  render() {
    return (
      <div className="CreatePost">
        <h2>Добавить Пост</h2>
        <form action="">
          <div>
            <input
              type="text"
              name="postTitel"
              placeholder="username"
              value={this.state.postTitel}
              onChange={this.handelPostTitelChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="postDescription"
              placeholder="post text"
              value={this.state.postDescript}
              onChange={this.handelpostDescriptChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="postTag"
              placeholder="post tag"
              value={this.state.postTag}
              onChange={this.handelpostTagChange}
            />
          </div>
          <div>
            <button
            onClick={this.CreatePost}
            type="button"
            >
                Добавить
            </button>
          </div>
        </form>
      </div>
    );
  }
}
