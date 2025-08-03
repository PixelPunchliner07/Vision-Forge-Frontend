import { createContext, useEffect, useCallback, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendURL = import.meta.env.VITE_BACKENDURL;
  const navigate = useNavigate();

  const loadCreditData = useCallback(async () => {
    if (!token) return;
    try {
      const { data } = await axios.get(`${backendURL}/api/user/credits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.sucess) {
        setCredit(data.credits);
        setUser(data.user);
      } else {
        toast.error(data.message || "Failed to load credits");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }, [backendURL, token]);

  const generateImage = async (prompt)=>{
    try {
      const {data} = await axios.post(backendURL+'/api/image/generateimage',{prompt},{headers:{token}});

      if(data.sucess){
        loadCreditData(); 
        return data.resultImage;
      }
      else{
        toast.error(data.message);
        loadCreditData();

        if(data.creditBalance == 0){
          navigate('/buy')
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const logout = ()=>{
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  }

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token, loadCreditData]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditData,
    logout,
    generateImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
