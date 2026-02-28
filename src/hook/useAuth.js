import { useEffect, useState } from "react";
import apiClient from "../components/services/api-Client";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null; // ✅ fix: was JSON.perse
  };

  const [authTokens, setAuthTokens] = useState(getToken);

  // login
  const loginUser = async (userData) => {
    const response = await apiClient.post("/auth/jwt/create/", userData);
    setAuthTokens(response.data);
    localStorage.setItem("authTokens", JSON.stringify(response.data));
  };

  // logout
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  // fetchUser
  const fetchUserProfile = async () => {
    if (!authTokens?.access) return; 

    try {
      const response = await apiClient.get("/auth/users/me/", {
        
        headers: { Authorization: `JWT ${authTokens.access}` },
      });
      setUser(response.data); // 
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      if (error.response?.status === 401) {
        logoutUser(); 
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [authTokens]); // runs on login/logout

  // registration
  const registerUser = async (userdata) => {
    const response = await apiClient.post("/auth/users/", userdata);
    console.log(response.data);
  };

  return { user, loginUser, logoutUser, registerUser };
};

export default useAuth;
