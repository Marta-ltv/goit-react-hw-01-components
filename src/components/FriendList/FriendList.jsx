import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css'


export const FriendList = ({ friends }) => {
    return (
            <ul className={css.friend_list}>{friends.map(friend => (
                <FriendListItem key={friend.id} className={css.item}>
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                    name={friend.onLine}
                </FriendListItem>
            ))}
  
            </ul>

    );
};

FriendList.propTypes = {
  
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,})).isRequired,
}

