import { requests } from "../agent";

import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_REQUEST,
  BLOG_POST_ERROR,
  BLOG_POST_RECEIVED,
  BLOG_POST_LIST_ADD,
  BLOG_POST_UNLOAD,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_UNLOAD,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_REQUEST,
  USER_PROFILE_ERROR,
  USER_SET_ID,
  IMAGE_DELETED,
  IMAGE_UPLOADED,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_ERROR,
  IMAGE_DELETE_REQUEST,
  COMMENT_ADDED,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_CONFIRMATION_SUCCESS,
  USER_REGISTER_COMPLETE,
  BLOG_POST_FORM_UNLOAD,
  CONCERT_REQUEST,
  CONCERT_LIST_REQUEST,
  CONCERT_LIST_ERROR,
  CONCERT_LIST_RECEIVED,
  CONCERT_ERROR,
  CONCERT_RECEIVED,
  CONCERT_UNLOAD,
} from "./constants";

export const blogPostListFetch = () => {
  return (dispatch) => {
    dispatch(blogPostListRequest());
    return requests
      .get("/actualites")
      .then((response) => dispatch(blogPostListReceived(response)))
      .catch((error) => dispatch(blogPostListError(error)));
  };
};

export const blogPostListRequest = () => ({
  type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
  type: BLOG_POST_LIST_ERROR,
  error,
});

export const blogPostListReceived = (data) => ({
  type: BLOG_POST_LIST_RECEIVED,
  data,
});

export const blogPostRequest = () => ({
  type: BLOG_POST_REQUEST,
});

export const blogPostError = (error) => ({
  type: BLOG_POST_ERROR,
  error,
});

export const blogPostReceived = (data) => ({
  type: BLOG_POST_RECEIVED,
  data,
});

export const blogPostUnload = () => ({
  type: BLOG_POST_UNLOAD,
});

export const blogPostFetch = (id) => {
  return (dispatch) => {
    dispatch(blogPostRequest());
    return requests
      .get(`/actualites/${id}`)
      .then((response) => dispatch(blogPostReceived(response)))
      .catch((error) => dispatch(blogPostError(error)));
  };
};

export const blogPostAdd = (title, content, images = []) => {
  return (dispatch) => {
    return requests
      .post("/actualites", {
        title,
        content,
        slug: title && title.replace(/ /g, "-").toLowerCase(),
        images: images.map((image) => `/api/images/${image.id}`),
      })
      .catch((error) => {
        if (401 === error.response.status) {
          return dispatch(userLogout());
        } else if (403 === error.response.status) {
          console.log("You do not have rights to publish blog posts!");
        }
      });
  };
};

export const blogPostFormUnload = () => ({
  type: BLOG_POST_FORM_UNLOAD,
});

export const concertFetch = (id) => {
  return (dispatch) => {
    dispatch(concertRequest());
    return requests
      .get(`/concerts/${id}`)
      .then((response) => dispatch(concertReceived(response)))
      .catch((error) => dispatch(concertError(error)));
  };
};

export const concertListFetch = () => {
  return (dispatch) => {
    dispatch(concertListRequest());
    return requests
      .get("/concerts")
      .then((response) => dispatch(concertListReceived(response)))
      .catch((error) => dispatch(concertListError(error)));
  };
};

export const concertRequest = () => ({
  type: CONCERT_REQUEST,
});

export const concertListRequest = () => ({
  type: CONCERT_LIST_REQUEST,
});

export const concertListError = (error) => ({
  type: CONCERT_LIST_ERROR,
  error,
});

export const concertListReceived = (data) => ({
  type: CONCERT_LIST_RECEIVED,
  data,
});

export const concertError = (error) => ({
  type: CONCERT_ERROR,
  error,
});

export const concertReceived = (data) => ({
  type: CONCERT_RECEIVED,
  data,
});

export const concertUnload = () => ({
  type: CONCERT_UNLOAD,
});

export const commentListRequest = () => ({
  type: COMMENT_LIST_REQUEST,
});

export const commentListError = (error) => ({
  type: COMMENT_LIST_ERROR,
  error,
});

export const commentListReceived = (data) => ({
  type: COMMENT_LIST_RECEIVED,
  data,
});

export const commentListUnload = () => ({
  type: COMMENT_LIST_UNLOAD,
});

export const commentListFetch = (id) => {
  return (dispatch) => {
    dispatch(commentListRequest());
    return requests
      .get(`/actualites/${id}/comments`)
      .then((response) => dispatch(commentListReceived(response)))
      .catch((error) => dispatch(commentListError(error)));
  };
};

export const commentAdd = (comment, blogPostId) => {
  return (dispatch) => {
    return requests
      .post("/comments", {
        content: comment,
        actualite: `/api/actualites/${blogPostId}`,
      })
      .then((response) => dispatch(commentAdded(response)))
      .catch((error) => {
        if (401 === error.response.status) {
          return dispatch(userLogout());
        }
      });
  };
};

export const commentAdded = (comment) => ({
  type: COMMENT_ADDED,
  comment,
});

export const userLoginAttempt = (username, password) => {
  return (dispatch) => {
    return requests
      .post("/login_check", { username, password }, false)
      .then((response) =>
        dispatch(
          userLoginSuccess(response.token, response.id),
          console.log("response here", response)
        )
      )

      .catch((error) => {
        console.log("Login failed");
      });
  };
};
export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST,
  };
};
export const userProfileError = (userId) => {
  return {
    type: USER_PROFILE_ERROR,
    userId,
  };
};

export const userProfileReceived = (userId, userData) => {
  return {
    type: USER_PROFILE_RECEIVED,
    userData,
    userId,
  };
};

export const userProfileFetch = (userId) => {
  return (dispatch) => {
    dispatch(userProfileRequest());
    return requests
      .get(`/users/${userId}`, true)
      .then((response) => dispatch(userProfileReceived(userId, response)))
      .catch(() => dispatch(userProfileError(userId)));
  };
};

export const userSetId = (userId) => {
  return {
    type: USER_SET_ID,
    userId,
  };
};

export const userRegisterSuccess = () => {
  return {
    type: USER_REGISTER_SUCCESS,
  };
};

export const userRegister = (
  name,
  username,
  password,
  retypedPassword,
  mail
) => {
  return (dispatch) => {
    return requests
      .post(
        "/users",
        { name, username, password, retypedPassword, mail },
        false
      )
      .then(() => dispatch(userRegisterSuccess()))
      .catch((error) => {
        console.log("Registration failed");
      });
  };
};

export const userConfirmationSuccess = () => {
  return {
    type: USER_CONFIRMATION_SUCCESS,
  };
};

export const userRegisterComplete = () => {
  return {
    type: USER_REGISTER_COMPLETE,
  };
};

export const userConfirm = (confirmationToken) => {
  return (dispatch) => {
    return requests
      .post("/users/confirm", { confirmationToken }, false)
      .then(() => dispatch(userConfirmationSuccess()))
      .catch((error) => {
        console.log("Confirmation token is invalid");
      });
  };
};

export const imageUploaded = (data) => {
  return {
    type: IMAGE_UPLOADED,
    image: data,
  };
};

export const imageUploadRequest = () => {
  return {
    type: IMAGE_UPLOAD_REQUEST,
  };
};

export const imageUploadError = () => {
  return {
    type: IMAGE_UPLOAD_ERROR,
  };
};

export const imageUpload = (file) => {
  return (dispatch) => {
    dispatch(imageUploadRequest());
    return requests
      .upload("/images", file)
      .then((response) => dispatch(imageUploaded(response)))
      .catch(() => dispatch(imageUploadError));
  };
};

export const imageDeleteRequest = () => {
  return {
    type: IMAGE_DELETE_REQUEST,
  };
};

export const imageDelete = (id) => {
  return (dispatch) => {
    dispatch(imageDeleteRequest());
    return requests
      .delete(`/images/${id}`)
      .then(() => dispatch(imageDeleted(id)));
  };
};

export const imageDeleted = (id) => {
  return {
    type: IMAGE_DELETED,
    imageId: id,
  };
};
