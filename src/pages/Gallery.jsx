import React, { useState, useEffect, useCallback } from "react";
import { galleryPhotos } from "./galleryPhotos";

export default function Gallery() {

  const isMobile = window.innerWidth < 768;
  const BATCH = isMobile ? 12 : 20;

  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [viewMode, setViewMode] = useState("image");
  const [visibleCount, setVisibleCount] = useState(BATCH);
  const [openedFolder, setOpenedFolder] = useState(null);

  useEffect(() => {
    const sorted = [...galleryPhotos].sort(
      (a,b)=> new Date(b.date) - new Date(a.date)
    );
    setPhotos(sorted);
  }, []);

  const nextPhoto = useCallback(() => {
    setCurrentIndex(p => (p + 1) % photos.length);
  }, [photos]);

  const prevPhoto = useCallback(() => {
    setCurrentIndex(p => (p - 1 + photos.length) % photos.length);
  }, [photos]);

  useEffect(() => {
    const k = e => {
      if(currentIndex===null) return;
      if(e.key==="ArrowRight") nextPhoto();
      if(e.key==="ArrowLeft") prevPhoto();
      if(e.key==="Escape") setCurrentIndex(null);
    };
    window.addEventListener("keydown",k);
    return()=>window.removeEventListener("keydown",k);
  },[currentIndex,nextPhoto,prevPhoto]);

  const grouped = photos.reduce((acc,p)=>{
    const year = new Date(p.date).getFullYear();
    if(!acc[year]) acc[year]={};
    p.tags.forEach(t=>{
      if(!acc[year][t]) acc[year][t]=[];
      acc[year][t].push(p);
    });
    return acc;
  },{});

  const sortedYears = Object.keys(grouped)
    .map(Number)
    .sort((a,b)=>b-a);

  return (
    <section className="gallery-section">

      <div className="gallery-header">
  <h2 className="gallery-title">Gallery</h2>

  <div className="gallery-view-toggle">
    <button
      className={viewMode === "image" ? "active" : ""}
      onClick={() => setViewMode("image")}
    >
      🖼 Images
    </button>
    <button
      className={viewMode === "folder" ? "active" : ""}
      onClick={() => setViewMode("folder")}
    >
      📁 Folders
    </button>
  </div>
</div>


{/* IMAGE VIEW */}
{viewMode==="image" && (
<>
<div className="gallery-masonry">
{photos.slice(0,visibleCount).map((p,i)=>(
  <div key={i} className="gallery-item" onClick={()=>setCurrentIndex(i)}>
    <img src={p.src} alt={p.title}/>
  </div>
))}
</div>

{visibleCount < photos.length && (
<div className="load-more-wrap">
<button className="load-more-amber"
 onClick={()=>setVisibleCount(v=>v+BATCH)}>
 Load More Photos
</button>
</div>
)}
</>
)}

{/* FOLDER VIEW */}
{viewMode==="folder" && !openedFolder && (
<div className="folder-grid-view">
{sortedYears.map(year =>
Object.keys(grouped[year]).map(tag=>{
 const list = grouped[year][tag];
 return(
 <div key={year+tag} className="folder-tile"
  onClick={()=>{setOpenedFolder({year,tag,list});setVisibleCount(BATCH);}}>
   <img src={list[0].src} className="folder-cover"/>
   <div className="folder-meta">
     <h4>{year}</h4>
     <p>{tag.toUpperCase()}</p>
     <span>{list.length} photos</span>
   </div>
 </div>
)}) )}
</div>
)}

{viewMode==="folder" && openedFolder && (
<>
<div className="folder-header">
<button onClick={()=>setOpenedFolder(null)}>← Back</button>
<h3>{openedFolder.year} / {openedFolder.tag}</h3>
</div>

<div className="gallery-masonry">
{openedFolder.list.slice(0,visibleCount).map((p,i)=>(
<div key={i} className="gallery-item" onClick={()=>setCurrentIndex(i)}>
<img src={p.src}/>
</div>
))}
</div>

{visibleCount < openedFolder.list.length && (
<div className="load-more-wrap">
<button className="load-more-amber"
 onClick={()=>setVisibleCount(v=>v+BATCH)}>
 Load More
</button>
</div>
)}
</>
)}

{/* VIEWER */}
{currentIndex!==null && photos[currentIndex] && (
<div className="viewer-overlay">
<button className="viewer-close" onClick={()=>setCurrentIndex(null)}>✕</button>
<button className="viewer-left" onClick={prevPhoto}>❮</button>
<div className="viewer-content">
<img src={photos[currentIndex].src} className="viewer-photo"/>
<div className="viewer-meta">
  <h3 className="viewer-title-pro">
    {photos[currentIndex].title}
  </h3>

  <p className="viewer-subtitle">
    {new Date(photos[currentIndex].date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>

  <div className="viewer-tags-pro">
    {photos[currentIndex].tags.map((tag, i) => (
      <span key={i} className="tag-chip">#{tag}</span>
    ))}
  </div>
</div>

</div>
<button className="viewer-right" onClick={nextPhoto}>❯</button>
</div>
)}

</section>
);
}
