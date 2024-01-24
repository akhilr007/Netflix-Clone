import React, { useEffect } from "react";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../utils/firebase.config";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        signOutUser().then(() => {
          dispatch(removeUser());
          navigate("/");
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
};

export default Body;
