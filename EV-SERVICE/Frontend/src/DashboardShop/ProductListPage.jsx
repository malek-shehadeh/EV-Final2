///////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "react-modal";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Edit,
  X,
} from "lucide-react";

Modal.setAppElement("#root");

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      const response = await axios.get("http://localhost:5000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Swal.fire("Error", "Failed to fetch products", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("shopOwnerToken");
        await axios.delete(`http://localhost:5000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(products.filter((product) => product._id !== id));
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire("Error", "Failed to delete the product", "error");
      }
    }
  };

  const handleUpdate = (product) => {
    setEditingProduct({ ...product });
    setSelectedImages(
      product.images.map((img) => ({
        file: null,
        preview: `http://localhost:5000/${img}`,
      }))
    );
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("shopOwnerToken");
      const formData = new FormData();
      formData.append("name", editingProduct.name);
      formData.append("description", editingProduct.description);
      formData.append("price", editingProduct.price);
      formData.append("category", editingProduct.category);

      selectedImages.forEach((image, index) => {
        if (image.file) {
          formData.append("images", image.file);
        } else {
          formData.append("existingImages", image.preview.split("/").pop());
        }
      });

      const response = await axios.put(
        `http://localhost:5000/api/products/${editingProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(
        products.map((p) => (p._id === editingProduct._id ? response.data : p))
      );
      setIsEditModalOpen(false);
      Swal.fire("Updated!", "The product has been updated.", "success");
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error", "Failed to update the product", "error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedImages([...selectedImages, ...newImages]);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) =>
        prevIndex === (product.images?.length || 0) - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? (product.images?.length || 0) - 1 : prevIndex - 1
      );
    };

    return (
      <motion.div
        className="bg-green-100 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-102"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-w-16 aspect-h-12 h-48 sm:h-56 md:h-48 lg:h-52 xl:h-48">
          {product.images && product.images.length > 0 ? (
            <>
              <motion.img
                key={currentImageIndex}
                src={`http://localhost:5000/${product.images[currentImageIndex]}`}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {product.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="bg-green-800 bg-opacity-50 text-white rounded-full p-1 ml-2 hover:bg-opacity-70 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-green-800 bg-opacity-50 text-white rounded-full p-1 mr-2 hover:bg-opacity-70 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-green-300" />
          )}
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-green-700 mb-1">
            Category: {product.category}
          </p>
          <p className="text-xs sm:text-sm text-green-700 mb-1">
            Price: ${Number(product.price).toFixed(2)}
          </p>
          <p className="text-xs sm:text-sm text-green-600 mb-3 line-clamp-3">
            {product.description}
          </p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => handleUpdate(product)}
              className="text-green-900 hover:text-green-700 p-1.5 sm:p-2 rounded-full bg-green-200 transition-colors"
            >
              <Edit size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button
              onClick={() => handleDelete(product._id)}
              className="text-red-600 hover:text-red-500 p-1.5 sm:p-2 rounded-full bg-green-200 transition-colors"
            >
              <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-green-100 p-3 sm:p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-green-900">
            Product List
          </h1>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full sm:w-64 bg-white text-green-700 placeholder-green-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-green-400"
              size={18}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
          {Array.from({
            length: Math.ceil(filteredProducts.length / productsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-2 sm:px-3 py-1 rounded text-sm sm:text-base ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-white text-green-700 hover:bg-green-300"
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 sm:p-6 rounded-lg shadow-xl w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto"
          overlayClassName="fixed inset-0 bg-green-900 bg-opacity-75"
        >
          <div className="relative">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-900 pr-8">
              Edit Product
            </h2>
            <button
              className="absolute top-0 right-0 text-green-500 hover:text-green-700 transition-colors"
              onClick={() => setIsEditModalOpen(false)}
            >
              <X size={24} />
            </button>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editingProduct?.name || ""}
                  onChange={handleInputChange}
                  className="w-full bg-green-100 border-green-300 rounded-md text-green-900 focus:ring-green-500 focus:border-green-500 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={editingProduct?.description || ""}
                  onChange={handleInputChange}
                  className="w-full bg-green-100 border-green-300 rounded-md text-green-900 focus:ring-green-500 focus:border-green-500 p-2"
                  rows="3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={editingProduct?.price || ""}
                    onChange={handleInputChange}
                    className="w-full bg-green-100 border-green-300 rounded-md text-green-900 focus:ring-green-500 focus:border-green-500 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={editingProduct?.category || ""}
                    onChange={handleInputChange}
                    className="w-full bg-green-100 border-green-300 rounded-md text-green-900 focus:ring-green-500 focus:border-green-500 p-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  Images
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="w-full text-sm text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.preview}
                        alt={`Selected ${index}`}
                        className="w-full aspect-square object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </motion.div>
  );
};

export default ProductListPage;
