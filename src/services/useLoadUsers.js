import { useState } from "react";

export const useLoadUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const loadUsers = async () => {
      setLoading(true)
      setError(null)
  
      try {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()
        
        setUsers(data)
      } catch (error) {
        setError(error)
      }
    
      setLoading(false)
    }
  
    return {
        users,
        usersLoading: loading,
        usersLoadingError: error,
        loadUsers,
    }
}

