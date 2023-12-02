import { posts } from "../../shared/dataProject";
import { Component } from "react"
import { PostIteam } from "./components/PostIteam";
import "./mainApp.css";
import { AddPostForm } from "./components/AddPostForm";

export class Blog extends Component {

    state ={
        postArr:posts,
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
    
    givearr = () =>{
      
    const arr = [];
      for(var i =0; i<this.state.postArr.length; i++){
        arr.push(this.state.postArr[i].tag);
      }
      return new Set(arr);
      
    }

    filtredArr = (tag) =>{
      this.setState({
        postArr: this.state.postArr.filter(el => el.tag === tag)
      })
    }

    resArr = () =>{
      this.setState({
            postArr: this.state.postArr
        })
    }

    
   
  
  render(){
    let arr = this.givearr();
    let arr1 = [];
    arr.forEach(element => {
      
      arr1.push(element);
    });
    
    const listTag = () =>{
      return arr1.map((arr1) => <button type="button" value={arr1} onClick={() => this.filtredArr(arr1)}>{arr1}</button>);
    }
   const listPosts = this.state.postArr.map((item,pos) => {
        return (
          <PostIteam
            key={item.id}
            titel={item.title}
            description={item.description}
            likePost={() => this.likePost(pos)}
            DeletPost={() => this.DelPost(pos)}
            like={item.liked}
            tag = {item.tag}
          />
        );
      });

    return (
        <>
        <AddPostForm postArr={this.state.postArr} addNewPost={this.addNewPost}/>
        
        <div className="PostList">
          <h1>Посты</h1>
          <div className="blockTag">
          <h3>Тэги: </h3>
          <div className="">
            <button onClick={() =>  window.location.reload()}>Все</button>
          {listTag()}
          </div>
          </div>
          <div className="posts">{listPosts}</div>
        </div>
        </>
        );
  }
};