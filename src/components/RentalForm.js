import React, { useState } from "react";
const RentalForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      price: 0,
      bedrooms: 1,
      description: "",
      available: false,
      nightly: 0,
      weekly: 0,
      monthly: 0,
      imageurl: null, // Changed to null initially to handle file
      city: "",
      state: "",
    });
  
    const [imagePreview, setImagePreview] = useState(null); // To hold the image preview URL
  
    const handleChange = (e) => {
      const { name, type, files } = e.target;
      
      if (type === 'file') {
          const file = files[0];
          setFormData({ ...formData, [name]: file });
          console.log(formData.imageurl);
  
          // Create a preview URL for the uploaded image
          const previewUrl = URL.createObjectURL(file);
          setImagePreview(previewUrl);
      } else {
          setFormData({ ...formData, [name]: e.target.value });
      }
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formDataToSend = new FormData();
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }
      
        // Log the FormData contents
        for (let pair of formDataToSend.entries()) {
          console.log(pair[0]+ ', ' + pair[1]);
        }
      
        try {
          const response = await fetch("https://localhost:7007/api/Rental?apikey=12345", {
            method: "POST",
            body: formDataToSend,
          });
      
          if (response.ok) {
            alert("Property posted successfully!");
            setFormData({
              name: "",
              price: 0,
              bedrooms: 1,
              description: "",
              available: false,
              nightly: 0,
              weekly: 0,
              monthly: 0,
              imageurl: null,
              city: "",
              state: "",
            });
            setImagePreview(null);
          } else {
            throw new Error("Failed to post the property");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-24 border rounded-lg shadow-md bg-white dark:bg-gray-800">
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Post a Rental Property</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Property Name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="bedrooms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bedrooms</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          placeholder="Number of Bedrooms"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Property Description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        ></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available</label>
        <input
          type="checkbox"
          id="available"
          name="available"
          checked={formData.available}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="nightly" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nightly Rate</label>
        <input
          type="number"
          id="nightly"
          name="nightly"
          value={formData.nightly}
          onChange={handleChange}
          placeholder="Nightly Rate"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="weekly" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weekly Rate</label>
        <input
          type="number"
          id="weekly"
          name="weekly"
          value={formData.weekly}
          onChange={handleChange}
          placeholder="Weekly Rate"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="monthly" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Rate</label>
        <input
          type="number"
          id="monthly"
          name="monthly"
          value={formData.monthly}
          onChange={handleChange}
          placeholder="Monthly Rate"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

     
      
      <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    Upload Property Photo
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        name="imageurl"
                        onChange={handleChange}
                        className="hidden"
                    />
                </label>
            </div>

            {/* Show the uploaded image preview */}
            {imagePreview && (
                <div className="mt-4">
                    <img
                        src={imagePreview}
                        alt="Uploaded preview"
                        className="rounded-lg"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            )}


      <div className="mb-5">
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Submit Property
      </button>
    </form>
  </div>
  );
};

export default RentalForm;
