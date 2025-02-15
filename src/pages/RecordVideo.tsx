import { useEffect, useState } from "react";
import { CallAPI } from "../utils/common";
import { useAuth } from "../components/AuthContext";

const RecordedVideos = () => {
  const [videos, setVideos] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await CallAPI("GET", `/records?userId=${user?.id}`, {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        if (response.status === 200) {
          setVideos(response.data);
        }
      } catch (error) {
        console.error("Error fetching recorded videos:", error);
      }
    }

    fetchVideos();
  }, [user]);

  const handleDelete = async (videoId:any) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;
    try {
      const response = await CallAPI("DELETE", `/records/${videoId}`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      if (response.status === 200) {
        setVideos(videos.filter((video:any) => video?.id !== videoId));
        alert("Video deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Failed to delete video.");
    }
  };

  return (
    <div className="recorded-videos">
      <h1>Recorded Videos</h1>
      {videos.length === 0 ? (
        <p>No recorded videos found.</p>
      ) : (
        <ul>
          {videos.map((video:any) => (
            <li key={video.id}>
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.name} - {new Date(video.createdAt).toLocaleString()}</p>
              <button onClick={() => handleDelete(video.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecordedVideos;
