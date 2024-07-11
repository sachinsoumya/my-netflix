import React, { useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { database } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addMyMovieList } from "../Utils/movieSlice";

// import { IMG_CDN } from "../Utils/constant";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Shimmer from "./Shimmer";

const MyList = () => {
  useEffect(() => {
    user && getDoc();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myMovieLists = useSelector((store) => store.movies.myMovieList);

  const user = useSelector((store) => store.user);
  // console.log(user);
  const collectionRef =
    user && collection(database, `${user.email} collection`);

  const getDoc = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      // console.log(querySnapshot);

      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      // console.log(data);
      dispatch(addMyMovieList(data));
    } catch (err) {
      navigate("/error", { state: err });
    }
  };

  const deleteListItem = async (id) => {
    await deleteDoc(doc(database, `${user.email} collection`, id));

    getDoc();
    // dispatch(addMyMovieList(storedData));
  };
  // const querySnapshot = await getDocs(collectionRef);
  // console.log(querySnapshot);

  // const data = querySnapshot.docs.map((doc) => {
  //   return doc.data();
  // });

  // console.log(data);
  return (
    myMovieLists && (
      <div className="pt-36 bg-black  h-screen overflow-y-scroll">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4 justify-items-center relative">
          {myMovieLists.map((item) => (
            <div className="relative" key={item.id}>
              <MovieCard
                posterPath={item.path}
                movieId={item.movieId}
                key={item.id}
              />
              <div
                className="absolute -top-2 right-0 cursor-pointer"
                onClick={() => deleteListItem(item.id)}
              >
                {" "}
                <XMarkIcon className="size-7 text-white border border-white bg-black rounded-full " />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default MyList;
