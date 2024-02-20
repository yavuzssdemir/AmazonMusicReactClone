import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const userName = JSON.parse(sessionStorage.getItem("userName"));

  const navigateHandler = (path) => {
    navigate(path);
    setIsModalVisible(false);
  };

  const logout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userName");
    setIsLoggedIn(false);
    navigateHandler("/signin");
  }

  return (
    <section>
      <section
        className="profile-container"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <section className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </section>
        {isLoggedIn && <span className="user-name">{userName}</span>}
      </section>
      {isModalVisible && (
        <section className="auth-modal">
          {isLoggedIn ? (
            <>
              <button onClick={() => navigateHandler("/myprofile")}>My Profile</button>
              <button onClick={logout}>Log Out</button>
            </>
          ) : (
            <>
              <button onClick={() => navigateHandler("/signin")}>
                Sign In
              </button>
              <button onClick={() => navigateHandler("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </section>
      )}
    </section>
  );
}

export default Profile;
