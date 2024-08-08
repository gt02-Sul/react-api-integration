import { useEffect } from 'react'
import './App.css'
import { useLoadUsers } from './services/useLoadUsers'
import { useCreateUser } from './services/useCreateUser';

const App = () => {
  const { users, usersLoading, usersLoadingError, loadUsers } = useLoadUsers();
  const { creatUserLoading, createUserError, createUser } = useCreateUser(loadUsers);

  useEffect(() => {
    loadUsers()
  }, [])
  
  return (
    <>
      <h1>Usuários</h1>
      <form onSubmit={createUser}>
        <label>
          Name <input name="full_name" />
        </label>
        <label>
          E-mail <input name="email" />
        </label>
        <label>
          Senha <input name="password" type="password" />
        </label>
        <button>Salvar</button>
      </form>

      {usersLoading ? 'Loading...' : ''}
      {users.map(user => (
        <div key={user.id} className='card'>
          <p>#{user.id}</p>
          <p>{user.full_name}</p>
          <p>{user.email}</p>
        </div>
      ))}      
    </>
  )
}

export default App
