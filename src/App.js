import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
<<<<<<< HEAD
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { NotificationsList } from './features/notifications/NotificationsList'
import { UsersList } from './features/users/UsersList'
import { UserPage } from './features/users/UserPage'
=======
>>>>>>> parent of 320a4d2 (starting on async thunks)

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
        <Route exact path="/notifications" component={NotificationsList} />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
<<<<<<< HEAD
          <Route exact path='/posts/:postId' component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
=======
>>>>>>> parent of 320a4d2 (starting on async thunks)
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
