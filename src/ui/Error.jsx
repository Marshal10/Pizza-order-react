import { useNavigate } from "react-router-dom";

function Error() {
  const errorMsg = "Failed to fetch";
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMsg}</p>
      <button onClick={() => navigate(-1)}>&larr; Go Back</button>
    </div>
  );
}

export default Error;
