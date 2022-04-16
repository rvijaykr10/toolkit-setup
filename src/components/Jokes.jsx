import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncJoke } from "../features/JokeSlice";

const Jokes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncJoke());
  }, [dispatch]);

  const { joke, isLoading } = useSelector((state) => state.jokes);
  return <>{isLoading ? "loading..." : <div className="joke">{joke}</div>}</>;
};

export default Jokes;
