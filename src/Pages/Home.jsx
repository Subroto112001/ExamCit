import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isVerfied, setisVerfied] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user.emailVerified) {
        setisVerfied(user.emailVerified);
      } else {
        alert("please verify your email");
        navigate("/login");
      }
    });
  }, []);

  const handleimageUpload = () => {
    cloudinary.openUploadWidget(
      {
        cloudName: "df8qz4g9h",
        uploadPreset: "ChatAppFile",
        sources: [
          "local",
          "url",
          "camera",
          "dropbox",
          "unsplash",
          "google_drive",
          "shutterstock",
          "image_search",
          "gettyimages",
          "istock",
        ],
        googleApiKey: "AIzaSyAykP0egZO9VbeFAJ8hBJE5td7ho2gcOXY",
        searchBySites: ["all", "cloudinary.com"],
        searchByRights: true,
      },
      (err, result) => {
        if (err) {
          throw new Error("Failed to upload image ");
        }
        console.log(result.info.secure_url);

        update(ref(db, `users/${userData.userKey}`), {
          profile_picture: result?.info?.secure_url,
        });
      }
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://upload-widget.cloudinary.com/latest/global/all.js`;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  // console.log(window.cloudinary); 

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <h1>imageUpload</h1>
        <button className="bg-blue-400 px-3 py-2 rounded cursor-pointer" onClick={handleimageUpload}>
          imageUpload
        </button>
      </div>
    </div>
  );
}

export default Home