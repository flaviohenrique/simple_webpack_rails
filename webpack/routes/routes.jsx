// React
import React from 'react';
import { render } from 'react-dom';

// React Router
import { Route, IndexRoute } from 'react-router'

// Pages
import App          from 'components/app.jsx';
import CommentBox   from 'components/comment_box.jsx';
import Home         from 'components/home.jsx';
import Login        from 'components/login.jsx';
import Registration from 'components/registration.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="registration" component={Registration} />
    <Route path="home" component={Home} />
    <Route path="comment" component={CommentBox} />
  </Route>
)
