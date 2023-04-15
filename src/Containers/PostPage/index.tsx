import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../store/posts/effects';
import {
  getPostByIdIsError,
  getPostByIdIsLoading,
  getPostByIdIsSuccess,
  getPostByIdSelector,
} from '../../store/posts/selectors';

export const PostPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(getPostByIdSelector);
  const isSuccess = useSelector(getPostByIdIsSuccess);
  const isError = useSelector(getPostByIdIsError);
  const isLoading = useSelector(getPostByIdIsLoading);

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
    <>
      {isError && <span>Error</span>}
      {isSuccess && post && (
        <div>
          <span>{`Hi i am post number - ${params.id ?? ''} `}</span>
          <span>{post.title}</span>
          <span>{post.body}</span>
        </div>
      )}
      {isLoading && <span>Loading</span>}
    </>
  );
};
