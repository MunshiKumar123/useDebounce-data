import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import useDebounce from "./useDebounce";

const Debaunce = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  // const [typingTimeout, setTypingTimeout] = useState("");

  const handleChange = (evt) => {
    const text = evt.target.value;
    setSearch(text);
    // clearTimeout(typingTimeout);
    // const timeout = setTimeout(() => {
    //   setSearch(text);
    // }, 1000);
    // setTypingTimeout(timeout);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        // console.log(resp.data);
        setPost(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>Debaunce Component</h3>
      <div className="container pt-3">
        <input
          type="text"
          className="p-2"
          placeholder="Search"
          onChange={handleChange}
        />
        <table className="table table-striped mt-2">
          <tbody>
            <tr className="fs-5 table-dark">
              <td>Id</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
            {post
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.title
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase()) ||
                  value.body
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase()) ||
                  value.id.toString().includes(debouncedSearch.toString())
                ) {
                  return value;
                }
              })

              .map((row, i) => {
                return (
                  <tr key={i}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Debaunce;
