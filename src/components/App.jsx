import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';

const isProduction = process.env.NODE_ENV === 'production';
export const App = () => {
  return (
    <>
      <BrowserRouter basename={isProduction ? '/goit-react-hw-01' : ''}>
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
        <TransactionHistory items={transactions} />;
      </BrowserRouter>
    </>
  );
};
