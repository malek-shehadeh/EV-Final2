//////////////////////////////////////
import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

  const purchasedParts = [
    {
      id: 1,
      name: "EV Battery Pack",
      date: "2024-07-15",
      image: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Electric Motor",
      date: "2024-07-20",
      image: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Charging Port",
      date: "2024-07-25",
      image: "/api/placeholder/100/100",
    },
  ];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setName(data.user.username);
      setEmail(data.user.email);
      if (data.user.profileImage) {
        setImageUrl(`http://localhost:5000${data.user.profileImage}`);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    if (password) formData.append("password", password);
    if (imageFile) {
      formData.append("profileImage", imageFile);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.user.profileImage) {
        setImageUrl(`http://localhost:5000${data.user.profileImage}`);
      }
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img
                src={imageUrl}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full object-cover"
              />
              <label
                htmlFor="profile-picture"
                className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
              >
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  id="profile-picture"
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Profile
            </button>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
          <ul className="space-y-4">
            {purchasedParts.map((part) => (
              <li key={part.id} className="flex items-center space-x-4">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{part.name}</h3>
                  <p className="text-sm text-gray-500">{part.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
        <p>
          Keep your profile up to date to receive personalized recommendations
          for electric car parts!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
