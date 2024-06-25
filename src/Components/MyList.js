import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addMyMovieList } from "../Utils/movieSlice";
// import { IMG_CDN } from "../Utils/constant";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  useEffect(() => {
    getDoc();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myMovieLists = useSelector((store) => store.movies.myMovieList);

  const user = useSelector((store) => store.user);
  console.log(user);
  const collectionRef =
    user && collection(database, `${user.email} collection`);

  const getDoc = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      console.log(querySnapshot);

      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      });

      console.log(data);
      dispatch(addMyMovieList(data));
    } catch (err) {
      navigate("/error", { state: err });
    }
  };
  // const querySnapshot = await getDocs(collectionRef);
  // console.log(querySnapshot);

  // const data = querySnapshot.docs.map((doc) => {
  //   return doc.data();
  // });

  // console.log(data);
  return (
    myMovieLists && (
      <div className="pt-36 bg-black md:h-screen  h-full">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4 justify-items-center">
          {myMovieLists.map((item) => (
            <MovieCard
              posterPath={item.path}
              movieId={item.movieId}
              key={item.id}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default MyList;
