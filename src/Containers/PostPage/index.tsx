import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../store/posts/effects';

export const PostPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => {
    navigate('/posts/5657');
  };

  const goForward = () => {
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getPostById(params.id));
    }
  }, []);

  return (
    <div>
      <span>{`Hi i am post number - ${params.id ?? ''} `}</span>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
    </div>
  );
};
