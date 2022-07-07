import { login } from '@taghub/api';
import { useEffect, useState } from 'react';
import AuthError from './components/AuthError';
import Dashboard from './components/Dashboard';
function App() {

  const [accessKey, setAccessKey] = useState(null);

  useEffect(() => {
    async function loginUser() {
      const res = await login('careers@tag-hub.com', 'oXDjVhS8UYqVix3E9AFi', { consumerKey: 'f880711b92da47c28549d6cdc280d654', init: true })
      setAccessKey(res.accessKey);
    }
    loginUser();
  }, [])

  return (
    <div className="App">
      <div className='nav-header'> 
        Item Explorer
      </div>
      <div>
        {accessKey ? <Dashboard /> : <AuthError/>}
      </div>
    </div>
  );
}

export default App;
