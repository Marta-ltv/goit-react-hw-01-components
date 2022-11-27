import PropTypes from 'prop-types'
import css from './FriendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
    <li className={css.item}>
    <span className={css.status}>{isOnline}</span>
    <img className={css.friend_avatar} src={avatar} alt="User avatar" width = '48px' />
    <p className={css.name}>{name}</p>
    </li>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};