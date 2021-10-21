function Search() {
  const search = async (data) => {
    try {
      await fetch("/.netlify/functions/search", {
        method: "POST",
        body: JSON.stringify({ query: "cats" }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input type="text" value="something"></input>
      <button onClick={search}>search</button>
    </div>
  );
}
export default Search;
