import { useSelector, useDispatch } from 'react-redux';
import Chance from 'chance';
import { addUser, deleteUser, clearUser } from './Redux/UserSlice.js';
import './App.css'


function App() {
  const users = useSelector(state => state.user);
  const chance = new Chance();
  const dispatch = useDispatch();

  function handleAddUser() {
    const fullName = chance.name({ middle: true });
    const nameParts = fullName.split(' ');

    
    const [username, firstName, country] = [
      nameParts[0] || '',
      nameParts[1] || '',
      nameParts.slice(2).join(' ') || ''
    ];

    const newUser = {
      id: users.length + 1,
      username,
      firstName,
      country,
      
    };

    dispatch(addUser(newUser));
  }

  function handleDeleteUser(id) {
    dispatch(deleteUser(id));
  }

  function handleClearUser() {
    dispatch(clearUser());
  }

  return (
    <>
      <main>
        <div className="content">
          <section className="main-header grid">
            <h1>Users</h1>
            <button className="button" onClick={handleAddUser}>
              <i className="fa-solid fa-plus"></i>
              <span>Add new user</span>
            </button>
            <button className="button" onClick={handleClearUser}>
              <i className="fa-solid fa-minus"></i>
              <span>Clear All</span>
            </button>
          </section>

          <div className="card">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                 
                  <th>First name</th>
                  
                  <th>middle name</th>
                  <th>last name</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} >
                    <td></td>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.firstName}</td>
                    <td>{user.country}</td>
                    <td onClick={() => handleDeleteUser(user.id)}>Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
