import axios from "axios";
import { useEffect, useState } from "react";

const REST_API_BASE_URL = 'http://localhost:8080/api/users';

export const listUsers = () => axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL, user);

// Example component to fetch and display users
const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await listUsers();
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        const newUser = { name: 'New User', email: 'newuser@example.com' };
        try {
            const response = await createUser(newUser);
            setUsers([...users, response.data]);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <button onClick={handleAddUser}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
