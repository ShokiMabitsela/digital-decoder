import React, { useState, useRef, useEffect } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook

// Register the required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale);

const DashboardContent = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", status: "inactive" },
    { id: 2, name: "Jane Smith", status: "inactive" },
    { id: 3, name: "Alice Johnson", status: "active" },
    { id: 4, name: "Bob Brown", status: "inactive" },
  ]);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Tutorial", status: "inactive", date: "2024-11-27" },
    { id: 2, title: "CSS Tricks", status: "inactive", date: "2024-11-26" },
    { id: 3, title: "JavaScript Basics", status: "active", date: "2024-11-25" },
  ]);

  const [showFullUsers, setShowFullUsers] = useState(false);
  const [showFullBlogs, setShowFullBlogs] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const data = {
    labels: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    datasets: [
      {
        label: "Number of Posts",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the chart instance
      }
    };
  }, []);

  const toggleUserStatus = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "active" ? "inactive" : "active" }
          : user
      )
    );
  };

  const toggleBlogStatus = (id: number) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id
          ? { ...blog, status: blog.status === "active" ? "inactive" : "active" }
          : blog
      )
    );
  };

  const deleteBlog = (id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  // Function to navigate to the full users page
  const goToUsersPage = () => {
    navigate("/users"); // Change this path to the actual route for users page
  };

  // Function to navigate to the full blogs page
  const goToBlogsPage = () => {
    navigate("/blogs"); // Change this path to the actual route for blogs page
  };

  return (
    <div>
      {/* Graph Section */}
      <div className="mb-10 h-[30vh] w-[100vw]">
        <h3 className="text-xl text-center font-bold mb-4">Monthly Post Statistics</h3>
        <Chart type="bar" data={data} ref={chartRef} />
      </div>

      {/* New Users Section */}
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-4">New Users Needing Activation</h3>
        <table className="w-full text-left border-collapse border border-white">
          <thead>
            <tr className="bg-[#b0764d] text-white">
              <th className="p-2 border border-white">Name</th>
              <th className="p-2 border border-white">Status</th>
              <th className="p-2 border border-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, showFullUsers ? users.length : 2).map((user) => (
              <tr
                key={user.id}
                className={`${
                  user.status === "inactive" ? "bg-slate-50 opacity-100 text-black" : ""
                }`}
              >
                <td className="p-2 border border-white">{user.name}</td>
                <td className="p-2 border border-white">{user.status}</td>
                <td className="p-2 border border-white">
                  <button
                    onClick={() => toggleUserStatus(user.id)}
                    className={`px-3 py-1 text-white rounded ${
                      user.status === "active" ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {user.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!showFullUsers && (
          <button
            onClick={() => setShowFullUsers(true)}
            className="mt-4 px-4 py-2 text-white bg-[#b0764d] rounded"
          >
            Show All Users
          </button>
        )}
        {showFullUsers && (
          <button
            onClick={goToUsersPage}
            className="mt-4 px-4 py-2 text-white bg-[#b0764d] rounded"
          >
            Go to Users Page
          </button>
        )}
      </div>

      {/* New Blogs Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">New Blogs</h3>
        <table className="w-full h-10 text-left border-collapse border border-white">
          <thead>
            <tr className="bg-[#b0764d] text-white">
              <th className="p-2 border border-white">Title</th>
              <th className="p-2 border border-white">Date</th>
              <th className="p-2 border border-white">Status</th>
              <th className="p-2 border border-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.slice(0, showFullBlogs ? blogs.length : 2).map((blog) => (
              <tr key={blog.id}>
                <td className="p-2 border border-white">{blog.title}</td>
                <td className="p-2 border border-white">{blog.date}</td>
                <td className="p-2 border border-white">{blog.status}</td>
                <td className="p-2 border border-white flex gap-2">
                  <button
                    onClick={() => toggleBlogStatus(blog.id)}
                    className={`px-3 py-1 text-white rounded ${
                      blog.status === "active" ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {blog.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="px-3 py-1 text-white bg-gray-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!showFullBlogs && (
          <button
            onClick={() => setShowFullBlogs(true)}
            className="mt-4 px-4 py-2 text-white bg-[#b0764d] rounded"
          >
            Show All Blogs
          </button>
        )}
        {showFullBlogs && (
          <button
            onClick={goToBlogsPage}
            className="mt-4 px-4 py-2 text-white bg-[#b0764d] rounded"
          >
            Go to Blogs Page
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
