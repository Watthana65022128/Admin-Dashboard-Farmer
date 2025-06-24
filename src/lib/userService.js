import api from './api';

export const userService = {
  // Get all users
  getAllUsers: async () => {
    try {
      const response = await api.get('/admin/users');
      return response.data.users;
    } catch (error) {
      throw error;
    }
  },

  // Ban user
  banUser: async (userId, reason) => {
    try {
      const response = await api.post('/admin/users/ban', {
        userId,
        reason
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Unban user
  unbanUser: async (userId) => {
    try {
      const response = await api.post('/admin/users/unban', {
        userId
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};