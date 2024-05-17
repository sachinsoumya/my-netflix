import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/Error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black px-2 py-2 z-40 w-screen flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44 "
      />

      {user && (
        <div className="flex justify-between flex-nowrap w-2/12">
          <div className="w-2/4">
            <img src={user.photoURL} alt="user-icon" />
          </div>

          <button
            className="text-black border-black  bg-red-700 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
