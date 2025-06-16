import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "../redux/actionTypes";
import { useDispatch } from "react-redux";

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        {
          theme: "outline",
          size: "large",
        }
      );
    }
  }, []);

  const handleCredentialResponse = async (response) => {
    dispatch({ type: SIGNIN_REQUEST });
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: response.credential }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.user);
        localStorage.setItem("role", data.role);

        dispatch({
          type: SIGNIN_SUCCESS,
          payload: {
            token: data.token,
            user: data.user,
            role: data.role,
          },
        });

        navigate("/");
      } else {
        dispatch({
          type: SIGNIN_FAILURE,
          payload: data.message || "Google login failed",
        });
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Google login failed", err);
      alert("Google login failed");
    }
  };

  return <div id="google-signin"></div>;
};

export default GoogleLoginButton;
