import { User, UserImg, UserText } from "./UserInfo.styled";

const UserInfo = ({ user }) => {
  const { photoURL, displayName, email } = user;

  return (
    <User>
      <UserImg src={photoURL} alt="avatar" referrerPolicy="no-referrer" />
      <div>
        <UserText>{displayName}</UserText>
        <UserText>{email}</UserText>
      </div>
    </User>
  );
};

export default UserInfo;
