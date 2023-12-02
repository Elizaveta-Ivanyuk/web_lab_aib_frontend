import { posts } from "../../shared/dataProject";
import { Component } from "react"
import { PostIteam } from "./components/PostIteam";
import "./mainApp.css";

export class Blog extends Component {

    state ={
        postArr:posts
    };

    likePost = pos =>{
        const temp = [...this.state.postArr];
        temp[pos].liked = !temp[pos].liked

        console.log(temp)

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
        <div className="PostList">
          <h1>Посты</h1>
          <div className="posts">{listPosts}</div>
        </div>
        </>
        );
  }
};