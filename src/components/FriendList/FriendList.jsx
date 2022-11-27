import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css'


export const FriendList = ({ friends }) => {
    return (
            <ul className={css.friend_list}>{friends.map(friend => (
          <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        ></FriendListItem>
            ))}
            </ul>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};