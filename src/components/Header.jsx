import React, { useEffect } from "react";
import { USER_LOGO_URL } from "../utils/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../slice/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const auth = getAuth();

  const location = useLocation().pathname;

  const handleSignOut = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-10 py-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-40" src="/Netflix_Logo_RGB.png" alt="logo" />
      <div className="flex items-center px-5 py-4">
        {location == "/browse" && (
          <img className="h-10" src={USER_LOGO_URL} alt="user-icon" />
        )}

        {location == "/browse" && (
          <div className="ml-2 text-white">
            <p>{user?.displayName}</p>
          </div>
        )}
        <div className="pl-1">
          {location == "/browse" && (
            <button className="pl-2 text-white" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
