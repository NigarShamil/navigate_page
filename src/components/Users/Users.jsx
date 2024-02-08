import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])
 
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data.slice(0, 6));
    }
    fetchUsers();
  }, []);
 

  return (
    <div className="card_container">
      {users.map((el) => ( 
        <div className="cards" key={el.id}>
          <p>{el.name}</p>
          <p>{el.username}</p>
          <p>{el.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;



