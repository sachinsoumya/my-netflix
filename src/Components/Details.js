import React from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { database } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { addMyMovieList } from "../Utils/movieSlice";

const Details = ({
  original_title,
  overview,
  popularity,
  runtime,
  release_date,
  genres,
  adult,
  production_companies,
  id,
  poster_path,
}) => {
  const user = useSelector((store) => store.user);
  const myMovieList = useSelector((store) => store.movies.myMovieList);
  const dispatch = useDispatch();
  console.log(user);
  const collectionRef = collection(database, `${user.email} collection`);

  const getData = async () => {
    const querySnapshot = await getDocs(collectionRef);
    console.log(querySnapshot);

    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return data;
  };

  const handleSubmit = async () => {
    const data = await getData();

    console.log(data);

    const flag = data.some((obj) => obj.movieId === id);

    console.log(flag);
    if (!flag) {
      try {
        const docRef = await addDoc(collectionRef, {
          movieId: id,
          path: poster_path,
        });
        console.log("Document written with ID: ", docRef);
        const storedData = await getData();

        dispatch(addMyMovieList(storedData));
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      const filteredData = data.filter((item) => item.movieId === id);

      await deleteDoc(
        doc(database, `${user.email} collection`, filteredData[0].id)
      );

      const storedData = await getData();
      dispatch(addMyMovieList(storedData));
    }
  };

  console.log(original_title);
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4 grid-cols-1 font-medium">
      <div className="col-span-2">
        <div className="flex justify-between lg:w-2/4 md:w-3/4 w-full text-gray-500">
          <div>{release_date}</div>
          <div>
            {Math.floor(runtime / 60)}h{" "}
            {Math.floor(runtime - (Math.floor(runtime / 60) * 3600) / 60)}m
          </div>
          <div className="border border-white p-1">
            {adult ? "U/A 18+" : "U/A 16+"}
          </div>
          <div className=" relative">
            <button
              onClick={handleSubmit}
              className="text-white cursor-pointer border border-white rounded-full p-1 bg-transparent  hover:bg-neutral-700 group "
            >
              {myMovieList ? (
                myMovieList.some((item) => item.movieId === id) ? (
                  <CheckIcon className="size-7" />
                ) : (
                  <PlusIcon className="size-7" />
                )
              ) : (
                <PlusIcon className="size-7" />
              )}
              {/* <PlusIcon className="size-7" /> */}

              <div class="absolute -top-14 -left-full scale-0 w-28 rounded bg-white p-2 text-xs text-black group-hover:scale-100">
               Add to my list
              </div>

              {/* <div
                id="tooltip-hover"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Tooltip content
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div> */}
            </button>
          </div>
          {/* <div>{ original_title}</div> */}
        </div>
        <div className="py-2">{overview}</div>
      </div>

      <div>
        <div>
          <span className="text-gray-500 ">Genres:</span>
          {genres.map((item, index) => (
            <span key={item.id} className="px-2">
              {item.name},
            </span>
          ))}
        </div>

        <div>
          <span className="text-gray-500 ">Production company:</span>
          {production_companies.map((item, index) => (
            <span key={item.id} className="px-2">
              {item.name},
            </span>
          ))}
        </div>

        <div>
          <span className="text-gray-500 ">Popularity:</span>
          <span className="px-2">{popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
