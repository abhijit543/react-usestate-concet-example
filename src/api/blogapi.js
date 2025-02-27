import { useState, useEffect } from "react";

const MyBlog = () => {
  let [allblog, setBlogs] = useState([]);
  let [blogid, setblogid] = useState("");
  let [blogtitle, setTitle] = useState("");
  let [blogdetails, setDetails] = useState("");

  const getBlog = () => {
    fetch("http://localhost:1234/blogapi")
      .then((response) => response.json())
      .then((blogArray) => {
        setBlogs(blogArray.reverse());
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  const save = () => {
    let url = "http://localhost:1234/blogapi";
    let mymethod = "POST";

    if (blogid !== "") {
      url = `http://localhost:1234/blogapi/${blogid}`;
      mymethod = "PUT";
    }

    let postdata = {
      headers: { "Content-Type": "application/json", auth: "123456" },
      method: mymethod,
      body: JSON.stringify({ title: blogtitle, details: blogdetails }),
    };

    fetch(url, postdata)
      .then((response) => response.json())
      .then(() => {
        getBlog();
        setTitle("");
        setDetails("");
        setblogid("");
      });
  };

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
        alert(bloginfo.title + "Deleted ....");
        getBlog();
      });
  };

  return (
    <section>
      <h1>API-Based CRUD Operation</h1>
      <p>
        <input type="text" placeholder="Blog title" size={100} onChange={(e) => setTitle(e.target.value)} value={blogtitle} />
      </p>
      <p>
        <textarea rows="5" cols="103" placeholder="Blog details" onChange={(e) => setDetails(e.target.value)} value={blogdetails}></textarea>
      </p>
      <p>
        <button onClick={save}>{blogid ? "Update Blog" : "Post Blog"}</button>
      </p>
      <div id="bloglist">
        {allblog.map((blog) => (
          <div className="myblog" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.details}</p>
            <button onClick={() => editBlog(blog)}>Edit</button>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBlog;
