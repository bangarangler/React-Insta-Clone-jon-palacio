import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import styles from "./PostComments.module.scss";

class PostComments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentText: ""
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
  render() {
    return (
      <div className={styles.PostComments}>
        <div className={styles.CommentIcons}>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
        </div>
        {this.props.dUsr.comments.map((com, index) => (
          <React.Fragment key={index}>
            <p className={styles.text}>{com.text}</p>
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
      </div>
    );
  }
}

export default PostComments;
