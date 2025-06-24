import Cookies from 'js-cookie';
import api from './api';

export const authService = {
  // Login
  login: async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      const { user, token } = response.data;
      
      if (!user.isAdmin) {
        throw new Error('ไม่มีสิทธิ์เข้าถึงระบบแอดมิน');
      }
      
      Cookies.set('adminToken', token, { expires: 1 }); // 1 day
      return { user, token };
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: () => {
    Cookies.remove('adminToken');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!Cookies.get('adminToken');
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/user/profile');
      return response.data.user;
    } catch (error) {
      throw error;
    }
  }
};