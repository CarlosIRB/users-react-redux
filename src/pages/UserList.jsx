import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/usersSlice";
import styled from "styled-components";

// Estilos
const UserListContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const UserItem = styled.li`
  background-color: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserUl = styled.ul`
  padding: 0;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #c0392b;
    transition: background-color 0.3s ease;
  }
`;

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <UserListContainer>
      <Title>User List</Title>
      <UserUl>
        {users.map((user) => (
          <UserItem key={user.id}>
            <span>
              {user.name} ({user.user})
            </span>
            <DeleteButton onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </DeleteButton>
          </UserItem>
        ))}
      </UserUl>
    </UserListContainer>
  );
};

export default UserList;
