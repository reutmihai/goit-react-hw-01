import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

const isProduction = process.env.NODE_ENV === 'production';
export const App = () => {
  return (
    <>
      <BrowserRouter basename={isProduction ? '/goit-react-hw-01' : '' }>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />
      </BrowserRouter>
    </>
  );
};
