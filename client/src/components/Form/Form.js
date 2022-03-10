
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
        𝘚𝘪𝘨𝘯 𝘐𝘯 𝘵𝘰 𝘤𝘳𝘦𝘢𝘵𝘦 𝘺𝘰𝘶𝘳 𝘰𝘸𝘯 𝘮𝘦𝘮𝘰𝘳𝘪𝘦𝘴 <br/> 𝘢𝘯𝘥 𝘵𝘰 𝘪𝘯𝘵𝘦𝘳𝘢𝘤𝘵 𝘸𝘪𝘵𝘩 𝘰𝘵𝘩𝘦𝘳'𝘴 𝘮𝘦𝘮𝘰𝘳𝘪𝘦𝘴.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : '𝐂𝐫𝐞𝐚𝐭𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐦𝐞𝐦𝐨𝐫𝐲'}</Typography>
        <TextField name="title" variant="outlined" label="Ｔｉｔｌｅ" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Ｍｅｓｓａｇｅ" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Ｔａｇｓ (comma seperated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />Select your image</div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Ｓｕｂｍｉｔ</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Ｃｌｅａｒ</Button>
      </form>
    </Paper>
  );
};

export default Form;