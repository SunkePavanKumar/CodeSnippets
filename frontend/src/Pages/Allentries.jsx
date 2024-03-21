import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Allentries = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const endpoint = `${import.meta.env.VITE_BACKEND_URI}/snippet`;

        const response = await axios.get(endpoint);
        setSnippets(response.data.data);
      } catch (error) {
        console.error("Error fetching snippets:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Language</th>
            <th className="px-4 py-2">Stdin</th>
            <th className="px-4 py-2">Source Code</th>
            <th className="px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{snippet.username}</td>
              <td className="border px-4 py-2">{snippet.language}</td>
              <td className="border px-4 py-2">{snippet.stdin}</td>
              <td className="border px-4 py-2">
                {snippet.code.substring(0, 100)}
              </td>
              <td className="border px-4 py-2">{snippet.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" flex items-center justify-center mt-8 ">
        <div className=" w-32 p-3 hover:bg-blue-400 text-white rounded-full bg-blue-700">
          <Link to={"/home"}>Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Allentries;
