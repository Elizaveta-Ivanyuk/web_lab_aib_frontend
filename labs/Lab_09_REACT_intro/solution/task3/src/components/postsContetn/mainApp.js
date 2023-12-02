import { posts } from "../../shared/dataProject";
import { Component } from "react"
import { PostIteam } from "./components/PostIteam";
import "./mainApp.css";
import { AddPostForm } from "./components/AddPostForm";

export class Blog extends Component {

    state ={
        postArr:posts
    };

    likePost = pos =>{
        const temp = [...this.state.postArr];
        temp[pos].liked = !temp[pos].liked

        this.setState({
            postArr: temp
        })
    }
    
    DelPost = pos =>{
        if(window.confirm('Удалить пост?')){
            const temp = [...this.state.postArr];
            temp.splice(pos, 1);

            this.setState({
                postArr: temp
            })
        }
    }

    addNewPost = (post) =>{
        const temp = [...this.state.postArr];
        temp.push(post);

        this.setState({
            postArr: temp
        })
    }
  
  render(){
   const listPosts = this.state.postArr.map((item,pos) => {
        return (
          <PostIteam
            key={item.id}
            titel={item.title}
            description={item.description}
            likePost={() => this.likePost(pos)}
            DeletPost={() => this.DelPost(pos)}
            like={item.liked}
          />
        );
      });
    return (
        <>
        <AddPostForm postArr={this.state.postArr} addNewPost={this.addNewPost}/>
        
        <div className="PostList">
          <h1>Посты</h1>
          <div className="posts">{listPosts}</div>
        </div>
        </>
        );
  }
};