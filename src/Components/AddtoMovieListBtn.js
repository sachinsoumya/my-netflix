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

const AddtoMovieListBtn = ({ id, poster_path }) => {
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
  return (
    <div className="relative">
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
  );
};

export default AddtoMovieListBtn;
