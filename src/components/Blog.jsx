import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/main.css';

const BlogComponent = ({ onPostAdded }) => {
  const [posts, setPosts] = useState([]);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [reply, setReply] = useState('');

  const handlePost = () => {
    if (topic && description) {
      const newPost = {
        topic,
        description,
        timestamp: new Date().toLocaleString(),
        replies: []
      };

      setPosts([newPost, ...posts]);
      setTopic('');
      setDescription('');

      onPostAdded();
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setDescription(value);
    }
  };
  
  const handleReply = (postIndex) => {
    if (reply) {
      const updatedPosts = [...posts];
      const replyWithTimestamp = {
        content: reply,
        timestamp: new Date().toLocaleString()
      };
      updatedPosts[postIndex].replies.push(replyWithTimestamp); 
      setPosts(updatedPosts);
      setReply('');
    }
  };

  return (
    <Container className="blog-component">
      <h2>Write a New Post</h2>
      <Form className="post-form">
        <Row>
          <Col sm={12}>
            <Form.Control
              type="text"
              placeholder="Enter topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <p>Characters remaining: {200 - description.length}</p>
            <Button onClick={handlePost}>Post</Button>
          </Col>
        </Row>
      </Form>
      <br />
      <h2>Recent Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.topic}</h3>
            <p className="post-content">{post.description}</p>
            <p className="timestamp">Posted at: {post.timestamp}</p>
            <div className="replies">
              {post.replies.map((replyContent, replyIndex) => (
                <div className="reply" key={replyIndex}>
                  <p className="reply-content">{replyContent.content}</p>
                  <p className="reply-timestamp smaller-text">
                    Posted at: {replyContent.timestamp}
                  </p>
                </div>
              ))}
              <div className="reply-form">
                <input
                  type="text"
                  placeholder="Enter your reply"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button onClick={() => handleReply(index)}>Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BlogComponent;
