// This is a mock implementation of authentication functions.
// In a real application, these would interact with a backend API.

interface User {
  email: string;
}

export const login = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ email });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 300);
  });
};

export const register = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ email });
      } else {
        reject(new Error('Invalid input'));
      }
    }, 300);
  });
};

export const logout = async (): Promise<void> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(resolve, 300);
  });
};