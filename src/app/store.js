import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
<<<<<<< HEAD
import userReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
    notifications: notificationsReducer
=======

export default configureStore({
  reducer: {
    posts: postsReducer
>>>>>>> parent of 320a4d2 (starting on async thunks)
  }
})