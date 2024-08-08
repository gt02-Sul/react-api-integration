import { useState } from "react";

export const useCreateUser = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (event) => {
    try {
      event.preventDefault()
      const formData = Object.fromEntries(new FormData(event.target).entries());
  
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      await response.json()
      
      onSuccess()
    } catch (error) {
      setError(error)
    }
  }

  return {
    loading,
    error,
    createUser,
  }
}
