import PropTypes from 'prop-types';
import { Container, Friend, Online, Offline, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <span>{isOnline ? <Online /> : <Offline />}</span>
            <img src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </Container>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
