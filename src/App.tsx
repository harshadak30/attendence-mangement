// import React from 'react'
// import LoginPage from './Auth/LoginPage'
// const App = () => {
//   return (
//     <div>
//       {/* <h1>hello </h1> */}
//       <LoginPage/>
//     </div>
//   )
// }

// export default App
import React from 'react';
import AppRouter from './router/AppRouter';
import type { User } from './types/type';
import './App.css';

const App: React.FC = () => {
  // This would typically come from your auth context or API
  const user: User = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'employee', // Change this to test different roles: 'employee', 'super_admin', 'master_admin'
  };

  return (
    <div className="App">
      <AppRouter user={user} />
    </div>
  );
};

 export default App
