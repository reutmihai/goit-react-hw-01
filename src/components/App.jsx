import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import user from '../user.json';
export const App = () => {
  return (
    <>
      <BrowserRouter basename="/reutmihai/goit-react-hw-01">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </BrowserRouter>
    </>
  );
};
