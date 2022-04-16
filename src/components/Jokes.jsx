import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncJoke } from "../features/JokeSlice";

const Jokes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncJoke());
  }, [dispatch]);

  const { joke, isLoading } = useSelector((state) => state.jokes);
  return (
    <div className="joke">
      <h2>CHUCKNORRIS JOKES</h2>
      {isLoading ? "loading..." : <div>{joke}</div>}
    </div>
  );
};

export default Jokes;
