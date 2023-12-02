import { Component } from "react";

export class AddPostForm extends Component {
  state = {
    postTitel: "",
    postDescript: "",
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

  CreatePost = () => {
    const post = {
      id: this.props.postArr.length +1,
      title: this.state.postTitel,
      description: this.state.postDescript,
      liked: false,
    };
    this.props.addNewPost(post);
    console.log(post);
  };

  render() {
    return (
      <div className="CreatePost">
        <h2>Добавить пост</h2>
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
