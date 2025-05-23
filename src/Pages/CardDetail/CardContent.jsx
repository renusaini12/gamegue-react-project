import React, { useState, useRef } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-4.png";
import product5 from "../../assets/product-5.png";
import product6 from "../../assets/product-6.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const CardContent = () => {
  const thumbnails = [product1, product2, product1];
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [zoomStyle, setZoomStyle] = useState({});
  const [showZoom, setShowZoom] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const rect = container.getBoundingClientRect();

    // Calculate cursor position relative to container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage position
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Update cursor position for lens
    setCursorPosition({ x, y });

    // Update zoom position for preview
    setZoomPosition({
      x: -x * 2 + rect.width / 2,
      y: -y * 2 + rect.height / 2,
    });

    // For simple zoom effect
    setZoomStyle({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
    setZoomStyle({});
  };

  const [activeTab, setActiveTab] = useState("specifications");

  const reviews = [
    {
      id: 1,
      author: "Linda Heyes",
      rating: 4,
      date: "March 15, 2024",
      content:
        "Lorem ipsum dolor sit amet, in illud possit consequuntur pri. Pro vidit iriure id. Ex has gubergren hendrerit, duo ceteros habemus delicata no,",
    },
    {
      id: 2,
      author: "Philip King",
      rating: 3,
      date: "March 15, 2024",
      content:
        "Idque dolorum mandamus mei te. An nibh putant suavitate est, sea regione fabulas deterruisset cu.",
    },
    {
      id: 3,
      author: "Amanda",
      rating: 4,
      date: "March 15, 2024",
      content:
        "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked.",
    },
    {
      id: 4,
      author: "Ervin Arlington",
      rating: 4,
      date: "March 15, 2024",
      content:
        "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others.",
    },
    {
      id: 5,
      author: "Patrick M. Newman",
      rating: 4,
      date: "March 15, 2024",
      content:
        "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
    },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "SteelSeries Arctis Nova Pro Wireless Gaming Headset",
      price: "₹271.96",
      rating: 4,
      image: product3,
    },
    {
      id: 2,
      name: "Antec RGB mATX Mini Tower Gaming Case",
      price: "₹51.11",
      rating: 3.5,
      image: product4,
    },
    {
      id: 3,
      name: "AULA Mechanical Gaming Keyboard with Rainbow Backlight",
      price: "₹770.76",
      rating: 4.5,
      image: product5,
    },
    {
      id: 4,
      name: "750W Corsair RM800x 90 PLUS Gold Modular",
      price: "₹664.70",
      rating: 3,
      image: product6,
    },
  ];

  const crumbs = [
    { name: "Home", to: "/", title: "Go to Home." },
    { name: "Our Games", to: "/our-games", title: "Go to Products." },
    {
      name: "Multiplayers Games",
      to: "/our-games",
      title: "Go to the SteelSeries Brands archives.",
    },
  ];

  const specification = [
    {
      title: "GENERAL",
      specs: [
        ["Connectivity", "2.4GHz Stellar Wireless via USB-A Receiver"],
        ["Bluetooth", "5.1"],
        ["Cable", "None"],
        ["Battery", "1 or 2 AA alkaline batteries"],
        ["Switches", "ROCCAT® Titan Switch Optical, 100M click life cycle"],
        ["USB Report Rate", "1,000 Hz"],
        ["On-board memory", "1 Profile"],
        ["Software", "ROCCAT Swarm"],
      ],
    },
    {
      title: "SENSOR",
      specs: [
        ["Sensor", "ROCCAT® Owl-Eye 19K Optical Sensor"],
        ["Lift-off Distance", "Adjustable"],
        ["Acceleration", "50g"],
        ["Min DPI", "50"],
        ["Max DPI", "19,000"],
      ],
    },
    {
      title: "DIMENSIONS",
      specs: [
        ["Product Dimensions", "5.20 x 3.23 x 1.69in / 13.2 x 8.2 x 4.3cm"],
        ["Weight", "96g (without batteries), 119g (with one battery)"],
      ],
    },
    {
      title: "COMPATIBILITY",
      specs: [
        ["OS", "Windows® 7 and above (software support)"],
        ["Port", "USB 2.0 (or higher)"],
        ["Internet", "For driver software"],
      ],
    },
  ];

  return (
    <>
      <div className="w-full bg-[#0c0c35]">
        <div className="mx-auto px-2 sm:px-2 md:px-6 lg:px-10 py-8">
          <div className="breadcrumb-listItem text-base sm:text-sm md:text-xl lg:text-2xl font-serif tracking-[1px] text-gray-600 flex flex-wrap items-center gap-x-2 gap-y-1 pb-5">
            {crumbs.map((crumb, index) => (
              <span key={index} className="flex items-center">
                {!crumb.current ? (
                  <Link
                    to={crumb.to}
                    title={crumb.title}
                    className="text-white hover:underline"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-gray-400">{crumb.name}</span>
                )}
                {index < crumbs.length - 1 && (
                  <span className="mx-2 text-gray-500">/</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col gap-8 items-center justify-between">
            {/* Product Section */}
            <div className="flex sm:flex-col-reverse lg:w-1/2 sm:w-full lg:flex-row gap-10 mb-12">
              {/* Thumbnails */}
              <div className="flex flex-row lg:flex-col md:flex-row gap-4 lg:gap-6 items-center justify-center">
                {thumbnails.map((thumb, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 sm:w-20 sm:h-20 lg:w-28 lg:h-28 border rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === thumb ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(thumb)}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image with Zoom */}
              <div className="relative flex-1 rounded-lg overflow-hidden">
                <div
                  className="relative"
                  ref={imageContainerRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={selectedImage}
                    alt="Selected Product"
                    className={`w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-contain transition-transform duration-300 ${
                      showZoom ? "cursor-zoom-in" : ""
                    }`}
                    style={zoomStyle}
                  />

                  {/* Zoom Lens */}
                  {showZoom && (
                    <div
                      className="absolute w-28 h-28 border-2 border-white bg-white bg-opacity-30 pointer-events-none"
                      style={{
                        left: `${cursorPosition.x - 50}px`,
                        top: `${cursorPosition.y - 50}px`,
                        display: cursorPosition.x === 0 ? "none" : "block",
                      }}
                    />
                  )}

                  <button className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full shadow-md">
                    <MagnifyingGlassIcon className="h-6 w-6 sm:h-4 sm:w-4 lg:w-8 lg:h-8 text-blue-600 hover:text-red-500" />
                  </button>
                </div>

                {/* Zoom Preview */}
                {showZoom && (
                  <div
                    className="absolute left-full ml-4 w-[600px] h-[600px] bg-white border border-gray-300 hidden lg:block z-50"
                    style={{
                      backgroundImage: `url(${selectedImage})`,
                      backgroundSize: `${
                        imageContainerRef.current?.offsetWidth * 6
                      }px ${imageContainerRef.current?.offsetHeight * 6}px`,
                      backgroundPosition: `${zoomPosition.x}px ${zoomPosition.y}px`,
                    }}
                  />
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 p-5 sm:p-1 space-y-6 sm:space-y-4 md:space-y-2 lg:space-y-8">
              <h1 className="text-3xl sm:text-2xl lg:text-6xl font-bold text-white font-sans tracking-wide">
                PlayStation 5 DualSense Wireless Controller
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-6 w-6 sm:h-6 sm:w-6 lg:w-8 lg:h-8 ${
                          star <= 3.75 ? "text-[#db79de]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium font-serif">
                    3.75 (4 reviews)
                  </span>
                </div>
                <span className="bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] py-2 px-6 text-white text-base sm:text-lg lg:text-2xl rounded-md font-serif">
                  In Stock
                </span>
              </div>

              <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-serif">
                There are many variations of passages of Lorem Ipsum
                available...
              </p>

              <p className="text-2xl sm:text-xl lg:text-3xl font-semibold text-white font-sans">
                ₹310.97 – ₹935.37
              </p>

              <button className="w-full sm:w-auto px-10 py-3 text-white text-base sm:text-sm md:text-sm lg:text-xl uppercase font-bold font-serif rounded-md bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] hover:brightness-110 transition duration-300">
                Add to cart
              </button>

              {/* Product Meta */}
              <div className="border-t border-gray-600 pt-6 text-gray-400 text-base sm:text-lg lg:text-xl font-serif space-y-3">
                <p>
                  <span className="font-medium">Brand:</span> SteelSeries
                </p>
                <p>
                  <span className="font-medium">Category:</span> Gaming
                  Controllers
                </p>
                <p>
                  <span className="font-medium">Tags:</span> promotion, Store
                </p>
                <p>
                  <span className="font-medium">SKU:</span>{" "}
                  rustic-copper-clock-85226975
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pb-4 mt-2 md:mt-4 lg:mt-8"></div>

          {/* Tabs Section */}
          <div className="mb-12">
            <div className="w-full">
              <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pb-2">
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`py-2 px-2 border-b-2 font-serif tracking-wide text-lg sm:text-2xl lg:text-3xl transition duration-200 ${
                    activeTab === "specifications"
                      ? "border-purple-700 text-white font-semibold"
                      : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-2 px-2 border-b-2 font-serif tracking-wide text-lg sm:text-2xl lg:text-3xl transition duration-200 ${
                    activeTab === "reviews"
                      ? "border-purple-700 text-white font-semibold"
                      : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"
                  }`}
                >
                  Reviews (5)
                </button>
              </nav>
            </div>

            <div>
              {/* Specifications Tab */}
              {activeTab === "specifications" && (
                <div className="bg-[#0c0c35]">
                  <div className="text-center p-6 sm:p-8 md:p-10">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold tracking-wide mb-6">
                      Specifications
                    </h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full divide-y divide-gray-700 ">
                      <tbody className="divide-y divide-gray-700">
                        {specification.map((section, index) => (
                          <tr key={index}>
                            <th className="px-4 sm:px-2 py-4 sm:py-5 text-left whitespace-nowrap lg:text-center text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold  text-white font-serif align-top w-1/3">
                              {section.title} :
                            </th>
                            <td className="px-4 sm:px-2 py-4 text-base sm:text-base md:text-lg lg:text-2xl font-sans tracking-wide text-gray-400">
                              <ul className="list-disc pl-4 sm:pl-5 space-y-2">
                                {section.specs.map(([key, value], i) => (
                                  <li key={i}>
                                    <strong>{key}:</strong> {value}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div className="bg-[#0c0c35] px-3 py-8">
                  <h2 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 text-center text-white tracking-wide">
                    Customer Reviews
                  </h2>

                  <div className="container mx-auto flex flex-col lg:flex-row gap-8 mb-8">
                    <div className="w-full lg:w-1/2 bg-slate-50 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl sm:text-2xl lg:text-6xl font-serif text-black font-bold">
                            3.75
                          </span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarIcon
                                key={star}
                                className={`h-6 w-6 lg:h-8 lg:w-8 sm:h-6 sm:w-6 ${
                                  star <= 3.75
                                    ? "text-red-500"
                                    : "text-gray-500"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-center space-y-4 mt-4">
                        <p className="text-xl sm:text-2xl font-sans font-semibold text-gray-900">
                          5 verified ratings
                        </p>
                        <button className="px-6 py-3 rounded-md text-white text-2xl sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] hover:brightness-110">
                          Write a review
                        </button>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <div key={rating} className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <span className="mr-1 text-xl sm:text-lg lg:text-2xl text-white">
                                {rating}
                              </span>
                              <StarIcon className="h-6 w-6 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-[#db7ede]" />
                            </div>
                            <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#a346a7]"
                                style={{
                                  width: `${
                                    rating === 3
                                      ? "20%"
                                      : rating === 4
                                      ? "80%"
                                      : "0%"
                                  }`,
                                }}
                              ></div>
                            </div>
                            <span className="text-lg sm:text-lg lg:text-2xl text-gray-400">
                              ({rating === 3 ? 1 : rating === 4 ? 4 : 0})
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-b border-gray-200 w-3/4 mb-8 mx-auto"></div>

                  <div className="space-y-6 container mx-auto">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="pb-6 flex sm:flex-col lg:flex-row md:flex-row items-start gap-4"
                      >
                        <div className="text-gray-400 mt-1">
                          <FaUserCircle className="w-14 h-14 sm:w-10 sm:h-10 lg:w-14 lg:h-14" />
                        </div>
                        <div className="flex-1">
                          <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarIcon
                                key={star}
                                className={`h-6 w-6 sm:w-4 sm:h-4 lg:w-8 lg:h-8 ${
                                  star <= review.rating
                                    ? "text-[#db7ede]"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="font-bold text-xl sm:text-lg lg:text-2xl tracking-wide text-white">
                              {review.author}
                            </h4>
                            <p className="text-lg sm:text-sm lg:text-2xl text-gray-400">
                              {review.date}
                            </p>
                          </div>
                          <p className="text-gray-400 text-lg sm:text-sm lg:text-2xl font-serif tracking-wide">
                            {review.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-b border-gray-200 w-3/4 mb-8 mx-auto"></div>

                  <div className="mt-8 container mx-auto pb-10">
                    <h3 className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-6 text-white tracking-wide">
                      Write A Review
                    </h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xl sm:text-lg lg:text-2xl text-gray-400"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 bg-[#1a1a2e] rounded-md px-4 py-3 text-lg sm:text-lg lg:text-xl placeholder-gray-50"
                            placeholder="Name *"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xl sm:text-lg lg:text-2xl text-gray-400"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 bg-[#1a1a2e] rounded-md px-4 py-3 text-lg sm:text-lg lg:text-xl placeholder-gray-50"
                            placeholder="Email *"
                          />
                        </div>
                        <div>
                          <label className="block text-xl sm:text-lg lg:text-2xl text-gray-400">
                            Your rating *
                          </label>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                className="text-gray-300 hover:text-[#db7ede]"
                              >
                                <StarIcon className="h-6 w-6 lg:h-8 lg:w-8 sm:h-4 sm:w-4" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="comment"
                          className="block text-xl sm:text-lg lg:text-2xl text-gray-400"
                        >
                          Your review *
                        </label>
                        <textarea
                          id="comment"
                          rows="4"
                          className="w-full border bg-[#1a1a2e] rounded-md p-2 text-lg lg:text-xl placeholder-gray-50"
                          placeholder="Your review *"
                        ></textarea>
                      </div>

                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="save-info"
                          className="h-5 w-5 sm:h-5 sm:w-5 lg:w-8 lg:h-8 mt-1"
                        />
                        <label
                          htmlFor="save-info"
                          className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-serif"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>

                      <button className="px-6 py-3 rounded-md text-white text-lg sm:text-sm lg:text-2xl font-bold bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] hover:brightness-110">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-12  mx-auto">
            {/* Heading */}
            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold mb-6">
              Related products
            </h3>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="relative group bg-[#1a1a2e]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain p-4"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 bg-[#1e1e30] space-y-5">
                    <h3 className="font-medium font-sans text-white text-xl md:text-xl lg:text-2xl mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`h-5 w-5 md:h-6 md:w-6 lg:w-8 lg:h-8 ${
                              star <= product.rating
                                ? "text-[#db7ede]"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm lg:text-xl text-white">
                        5 reviews
                      </span>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-semibold text-xl lg:text-2xl text-white">
                        {product.price}
                      </span>
                      <button className="relative group px-5 py-2 md:px-6 md:py-3 rounded-md text-white tracking-wide text-base md:text-sm lg:text-lg font-bold font-serif overflow-hidden transition duration-500 z-10 bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] hover:opacity-90 active:scale-[0.98]">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;
