import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
//import styles from "./PostComments.module.scss";
import styled from "styled-components";

const PostCommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin: 2% auto;

  form {
    width: 100%;
  }

  input {
    width: 100%;
    font-size: 1.6rem;
  }
`;

const TextP = styled.p`
  margin: 1% 0 1%;
  padding: 1%;
`;
const CommentIconsDiv = styled.div`
  font-size: 1.6rem;
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class PostComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      likes: props.dUsr.likes
    };
  }

  resetString = () => {
    this.setState({
      commentText: ""
    });
  };

  handleChange = event => {
    this.setState({ commentText: event.target.value });
  };

  handleLike = e => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
    //this.setState({
    //likes: this.state.likes + 1
    //})
  };
  render() {
    console.log(this.props.dUsr.likes);
    return (
      //<div className={styles.PostComments}>
      <PostCommentsDiv>
        {/*<div className={styles.CommentIcons}>*/}
        <CommentIconsDiv>
          <FontAwesomeIcon onClick={this.handleLike} icon={faHeart} />
          {this.state.likes}
          <FontAwesomeIcon icon={faComment} />
        </CommentIconsDiv>
        {this.props.dUsr.comments.map((com, index) => (
          <React.Fragment key={index}>
            {/*<p className={styles.text}>{com.text}</p>*/}
            <TextP>{com.text}</TextP>
          </React.Fragment>
        ))}
        <p>{this.props.dUsr.timestamp}</p>
        <form
          onSubmit={e =>
            this.props.handleComment(
              e,
              this.props.index,
              this.state.commentText,
              this.resetString
            )
          }
        >
          <input
            value={this.state.commentText}
            type="text"
            placeholder="Add a Comment..."
            onChange={this.handleChange}
          />
        </form>
      </PostCommentsDiv>
    );
  }
}

export default PostComments;
