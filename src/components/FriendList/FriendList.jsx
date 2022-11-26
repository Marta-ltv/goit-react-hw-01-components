import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem';


export const FriendList = ({ friends }) => {
    return (
            <ul class="friend-list">{friends.map(friend => (
                <FriendListItem key={friend.id} class="item">
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

