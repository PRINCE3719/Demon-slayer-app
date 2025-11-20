import { useState } from "react";

const Character = () => {

  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [char, setChar] = useState(null);

  const baseurl =
    "https://corsproxy.io/?https://www.demonslayer-api.com/api/v1/characters?name=";

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) {
      setError(true);
      setChar(null);
      return;
    }

    const url = `${baseurl}${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.content || data.content.length === 0) {
          setError(true);
          setChar(null);
          return;
        }

        setChar(data.content[0]);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setChar(null);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col w-full items-center px-4">
      
      {/* Title */}
      <h1 className="text-center pt-10 pb-6 text-4xl font-bold">
        Characters
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-xl mb-10"
        autoComplete="off"
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </div>

          <input
            type="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              block w-full p-4 ps-12 text-lg rounded-full shadow-lg 
              bg-gray-800 border-2 border-blue-600 text-white 
              focus:ring-blue-600 focus:border-blue-600 placeholder-gray-400
            "
            placeholder="Search by name..."
          />

          <button
            type="submit"
            className="
              absolute end-2 bottom-2 text-white bg-blue-600 
              hover:bg-blue-400 focus:ring-4 focus:ring-blue-600 
              font-medium rounded-full text-base px-5 py-2 transition duration-200
            "
          >
            Search
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="text-center">
          <p className="text-lg font-semibold">Character not found...</p>
          <img
            src="https://www.demonslayer-api.com/_next/image?url=%2Ferror.png&w=640&q=75"
            className="h-[40vh] mx-auto"
            alt="Error"
          />
        </div>
      )}

      {/* Character Card */}
      {char && (
        <div
          className="
            bg-blue-300 text-black rounded-xl shadow-lg
            w-full max-w-4xl 
            flex flex-col md:flex-row 
            items-center 
            p-5 gap-5
          "
        >
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={char.img}
              className="w-48 h-auto rounded-lg shadow-md"
              alt={char.name}
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-2/3 space-y-3">
            <p className="font-bold text-2xl">{char.name}</p>
            <p>{char.description}</p>
            <p className="font-bold">{char.affiliation?.name}</p>

            <p>
              <span className="font-bold">Combat Style: </span>
              {char.combat_style
                .map((style) => style.name)
                .join(", ")}
            </p>

            <div className="bg-blue-200 p-3 rounded-md italic border-l-4 border-blue-600">
              “{char.quote}”
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
