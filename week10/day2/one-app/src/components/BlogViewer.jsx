import { useEffect, useState } from "react";

function BlogViewer() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div className="blog">
      <div className="sidebar">
        {posts.map((p) => (
          <p key={p.id} onClick={() => setSelected(p)}>
            {p.title}
          </p>
        ))}
      </div>

      <div className="content">
        {selected && (
          <>
            <h2>{selected.title}</h2>
            <p>{selected.body}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogViewer;
