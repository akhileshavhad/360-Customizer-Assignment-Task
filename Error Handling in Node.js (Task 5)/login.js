async function loginUser(email, password) {
    try {
      
      const user = await findUserByEmail(email);
      if (!user) {
        
        return { success: false, message: 'User not found', status: 404 };
      }
  
      
      const isPasswordValid = await verifyPassword(user, password);
      if (!isPasswordValid) {
        
        return { success: false, message: 'Invalid password', status: 401 };
      }
  
      
      return { success: true, user };
    } catch (error) {
      
      console.error('Error during login:', error);
      return { success: false, message: 'An internal error occurred', status: 500 };
    }
  }
  