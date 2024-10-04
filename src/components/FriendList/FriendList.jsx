import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles['friend-list']}>
        {friends.map(friend => (
          <li key={friend.id} className={styles['friend-item']}>
            <span
              className={`${styles.status} ${friend.isOnline ? styles.online : styles.offline}`}
            >
              ●
            </span>
            <img
              className={styles['friend-avatar']}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles['friend-name']}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
