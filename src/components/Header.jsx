import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
class Header extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.setPostData();
  }
  setPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({ posts: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.posts.map((item) => {
          return <Post value={item} />;
        })}
      </React.Fragment>
    );
  }
}

export default Header;
