import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const MyBlogApi = () => {
  let [allblog, setBlog] = useState([]);
  let [myorder, setOrder] = useState("asc");

  const getBlog = () => {
    fetch("http://localhost:1234/blogapi")
      .then((response) => response.json())
      .then((blogArray) => {
        if (myorder == "asc") {
          blogArray.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
          setBlog(blogArray);
          setOrder("desc");
        } else {
          blogArray.sort((a, b) => {
            return b.title.localeCompare(a.title);
          });
          setBlog(blogArray);
          setOrder("asc");
        }
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  let [blogtitle, setTitle] = useState("");
  let [blogdetails, setDetails] = useState("");

  const save = () => {
    let url = "http://localhost:1234/blogapi";
    let mymethod = "post";

    if (blogid != "") {
      url = "http://localhost:1234/blogapi/" + blogid;
      mymethod = "PATCH";
      setblogid("");
    }

    let postdata = {
      headers: { "content-type": "application/json", auth: "123456" },
      method: mymethod,
      body: JSON.stringify({ title: blogtitle, details: blogdetails }),
    };

    fetch(url, postdata)
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        getBlog(); // reload the list
        setTitle("");
        setDetails("");
      });
  };

  let [blogid, setblogid] = useState("");
  const editBlog = (blog) => {
    setblogid(blog.id);
    setTitle(blog.title);
    setDetails(blog.details);
  };

  const deleteBlog = (id) => {
    let url = "http://localhost:1234/blogapi/" + id;
    let postdata = { method: "delete" };
    fetch(url, postdata)
      .then((response) => response.json())
      .then((bloginfo) => {
        alert(bloginfo.title + " Deleted...");
        getBlog();
      });
  };

  let [keyword, setKeyword] = useState("");
  const PER_PAGE = 3; //displays 3 items/records per page
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(allblog.length / PER_PAGE);

  return (
    <section>
      <h1> Api Based CRUD Operation </h1>
      <p>
        <input type="text" placeholder="blog title" size="100" onChange={(obj) => setTitle(obj.target.value)} value={blogtitle} />
      </p>
      <p>
        <textarea rows="5" cols="103" placeholder="blog details" onChange={(obj) => setDetails(obj.target.value)} value={blogdetails}></textarea>
      </p>
      <p>
        <button onClick={save}> Post Blog </button>
      </p>

      <p align="center">
        Search ... <input type="text" placeholder="Search..." size="40" onChange={(obj) => setKeyword(obj.target.value.toLowerCase())} />
        <select onChange={getBlog}>
          <option> Ascending By Title </option>
          <option> Descending By Title </option>
        </select>
      </p>

      <div id="bloglist">
        {allblog.slice(offset, offset + PER_PAGE).map((blog, index) => {
          if (blog.title.toLowerCase().match(keyword) || blog.details.toLowerCase().match(keyword))
            return (
              <div className="myblog" key={index}>
                <h3> {blog.title} </h3>
                <p> {blog.details} </p>
                <button onClick={() => editBlog(blog)}> Edit </button>
                <button onClick={() => deleteBlog(blog.id)}> Delete </button>
              </div>
            );
        })}
      </div>
      <div id="mypage">
        <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} breakLabel={"..."} pageCount={pageCount} marginPagesDisplayed={2} pageRangeDisplayed={3} onPageChange={handlePageClick} />
      </div>
    </section>
  );
};
export default MyBlogApi;
