import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  color: #555;
  font-size: 16px;
  margin: 8px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #e74c3c;
    transition: background-color 0.3s ease;
  }
`;

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirigir a login si no hay usuario
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <ProfileContainer>
      <Title>Profile</Title>
      <InfoText><strong>Id:</strong> {user.id}</InfoText>
      <InfoText><strong>Name:</strong> {user.name}</InfoText>
      <InfoText><strong>User:</strong> {user.user}</InfoText>
      <InfoText><strong>Password:</strong> {user.password}</InfoText>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </ProfileContainer>
  );
};

export default Profile;
