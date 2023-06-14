// import React, { useState, useEffect, createContext } from 'react';
// import './Lhakhang.css';
// import NavigationLink from '../Components/NavigationLink';
// import Footer from './Footer';

// const PAGE_SIZE = 8; // Number of photos to display per page

// export default function Lhakhang() {
//   const [loadedPhotos, setLoadedPhotos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const urlParams = new URLSearchParams(window.location.search);
//   const postId = urlParams.get('postId');

//   useEffect(() => {
//     async function loadPhotos() {
//       const response = await fetch('http://localhost:8000/lhakhang');
//       const photos = await response.json();
//       setLoadedPhotos(photos);
//       setTotalPages(Math.ceil(photos.length / PAGE_SIZE));
//     }
//     loadPhotos();
//   }, []);

//   const selectedPhoto = loadedPhotos.find(
//     (photo) => photo.id.toString() === postId
//   );

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const startIndex = (currentPage - 1) * PAGE_SIZE;
//   const visiblePhotos = loadedPhotos.slice(
//     startIndex,
//     startIndex + PAGE_SIZE
//   );

//   return (
//     <>
//       <NavigationLink />
//       <div className="App">
//         {selectedPhoto ? (
//           <div className="selected-photo">
//             <h1>{selectedPhoto.lhakhang_name}</h1>
//             <img
//               src={`http://localhost:8000/${selectedPhoto.images[0]}`}
//               alt={selectedPhoto.title}
//               width="500px"
//               height="350px"
//             />
//             <p>{selectedPhoto.lhakhang_detail}</p>
//             <p>
//               <b>Location</b>
//             </p>
//             <p>{selectedPhoto.location}</p>
//           </div>
//         ) : (
//           <>
//             <div className={`blogposts ${loadedPhotos.length === 0 ? 'no-content' : ''}`}>
//               {visiblePhotos.map((photo) => (
//                 <a key={photo.id} href={`?postId=${photo.id}`} className="lhakhang">
//                   <img
//                     src={`http://localhost:8000/${photo.images[0]}`}
//                     height="200"
//                     width="200"
//                     alt={photo.lhakhang_name}
//                   />
//                   <div className="content">
//                     <h4>{photo.lhakhang_name}</h4>
//                   </div>
//                 </a>
//               ))}
//             </div>
//             <div className="pagination">
//               <button
//                 onClick={handlePreviousPage}
//                 disabled={currentPage === 1}
//               >
//                 &lt; Previous
//               </button>
//               <div className="page-numbers">
//                 {currentPage > 2 && (
//                   <>
//                     <button onClick={() => setCurrentPage(1)}>1</button>
//                     <span>...</span>
//                   </>
//                 )}
//                 {currentPage > 1 && (
//                   <button onClick={() => setCurrentPage(currentPage - 1)}>
//                     {currentPage - 1}
//                   </button>
//                 )}
//                 <button className="active">{currentPage}</button>
//                 {currentPage < totalPages && (
//                   <button onClick={() => setCurrentPage(currentPage + 1)}>
//                     {currentPage + 1}
//                   </button>
//                 )}
//                 {currentPage < totalPages - 1 && (
//                   <>
//                     <span>...</span>
//                     <button onClick={() => setCurrentPage(totalPages)}>
//                       {totalPages}
//                     </button>
//                   </>
//                 )}
//               </div>
//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//               >
//                 Next &gt;
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import './Lhakhang.css';
import NavigationLink from '../Components/NavigationLink';
import Footer from './Footer';

const PAGE_SIZE = 8; // Number of photos to display per page

export default function Lhakhang() {
  const [loadedPhotos, setLoadedPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('postId');

  useEffect(() => {
    async function loadPhotos() {
      const response = await fetch('http://localhost:8000/lhakhang');
      const photos = await response.json();
      setLoadedPhotos(photos);
      setTotalPages(Math.ceil(photos.length / PAGE_SIZE));
    }
    loadPhotos();
  }, []);

  const selectedPhoto = loadedPhotos.find(
    (photo) => photo.id.toString() === postId
  );

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visiblePhotos = loadedPhotos.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  return (
    <>
      <NavigationLink />
      <div className="App">
        {selectedPhoto ? (
          <div className="selected-photo">
            <h1>{selectedPhoto.lhakhang_name}</h1>
            <img
              src={`http://localhost:8000/${selectedPhoto.images[0]}`}
              alt={selectedPhoto.title}
              width="100%"
              height="auto"
            />
            <p>{selectedPhoto.lhakhang_detail}</p>
            <p>
              <b>Location</b>
            </p>
            <p>{selectedPhoto.location}</p>
          </div>
        ) : (
          <>
            <div
              className={`blogposts ${
                loadedPhotos.length === 0 ? 'no-content' : ''
              }`}
            >
              {visiblePhotos.map((photo) => (
                <a
                  key={photo.id}
                  href={`?postId=${photo.id}`}
                  className="lhakhang"
                >
                  <img
                    src={`http://localhost:8000/${photo.images[0]}`}
                    height="200"
                    width="200"
                    alt={photo.lhakhang_name}
                  />
                  <div className="content">
                    <h4>{photo.lhakhang_name}</h4>
                  </div>
                </a>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                &lt; Previous
              </button>
              <div className="page-numbers">
                {currentPage > 2 && (
                  <>
                    <button onClick={() => setCurrentPage(1)}>1</button>
                    <span>...</span>
                  </>
                )}
                {currentPage > 1 && (
                  <button onClick={() => setCurrentPage(currentPage - 1)}>
                    {currentPage - 1}
                  </button>
                )}
                <button className="active">{currentPage}</button>
                {currentPage < totalPages && (
                  <button onClick={() => setCurrentPage(currentPage + 1)}>
                    {currentPage + 1}
                  </button>
                )}
                {currentPage < totalPages - 1 && (
                  <>
                    <span>...</span>
                    <button onClick={() => setCurrentPage(totalPages)}>
                      {totalPages}
                    </button>
                  </>
                )}
              </div>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}


