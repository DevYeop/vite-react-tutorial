import { useState } from 'react';
import './App.css';
import './Test.css';

interface User {
  name: string;
  age: number;
}

// Props 타입 정의
interface UserInfoProps {
  user: User;
}

// 컴포넌트에 Props 타입 적용
const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const user: User = {
    name: 'user',
    age: 33,
  };

  function MyButton() {
    return <button>I'm a button</button>;
  }

  const MyButton2 = () => {
    return <button>I'm a button2</button>;
  };

  return (
    <div>
      <MyButton />
      <MyButton2 />
      <UserInfo user={user} />
      {/* <img
        className="avatar"
        src="https://image.msscdn.net/thumbnails/images/prd_img/20240806/4298658/detail_4298658_17254282117044_big.png?w=1200"
      /> */}
    </div>
  );
};

export default App;
