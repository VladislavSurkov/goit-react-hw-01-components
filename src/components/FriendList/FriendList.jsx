import PropTypes from 'prop-types';
import { Container, Friend, ConditionOnline, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <ConditionOnline type={isOnline.toString()}>
              {isOnline}
            </ConditionOnline>
            <img src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </Container>
  );
}

FriendList.propTypes = {
  friends:  PropTypes.arrayOf (PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired
};
