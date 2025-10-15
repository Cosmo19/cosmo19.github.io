"use client";

import { useState } from "react";
import PhotoAlbum, { RenderImageContext, RenderImageProps } from "react-photo-album";
import "react-photo-album/masonry.css";
import Image from "next/image";

const photos = [
    // Georg Jensen
    { src: "/selected-works/sw_1.jpg", width: 2000, height: 1500, category: "George Jensen", desc: "A classic Georg Jensen piece." },
    { src: "/selected-works/sw_2.jpg", width: 1920, height: 2560, category: "George Jensen", desc: null },
    { src: "/selected-works/sw_3.jpg", width: 1920, height: 2560, category: "George Jensen", desc: null },
    { src: "/selected-works/sw_4.jpg", width: 1920, height: 2560, category: "George Jensen", desc: null },
    { src: "/selected-works/sw_5.jpg", width: 2000, height: 1500, category: "George Jensen", desc: null },
    { src: "/selected-works/sw_6.jpg", width: 2000, height: 1500, category: "George Jensen", desc: null },
    { src: "/selected-works/sw_7.jpg", width: 2000, height: 1500, category: "George Jensen", desc: null },
    { src: "/selected-works/sw_8.jpg", width: 2000, height: 1500, category: "George Jensen", desc: null },

    // Viva La Vulva
    { src: "/selected-works/sw_1_1.jpg", width: 1200, height: 589, category: "Viva La Vulva", desc: null },
    { src: "/selected-works/sw_1_2.jpg", width: 1208, height: 1137, category: "Viva La Vulva", desc: null },
    { src: "/selected-works/sw_1_3.jpg", width: 2560, height: 1810, category: "Viva La Vulva", desc: null },
    //{ src: "/selected-works/sw_1_4.jpg", width: 2560, height: 2560, category: "Viva La Vulva", desc: null },

    // SW 2
    { src: "/selected-works/sw_2_1.jpg", width: 2048, height: 2560, category: "SW 2", desc: null },
    { src: "/selected-works/sw_2_2.jpg", width: 1170, height: 2080, category: "SW 2", desc: null },

    // Lexus
    { src: "/selected-works/sw_3_1.jpg", width: 1920, height: 2560, category: "Lexus", desc: null },
    { src: "/selected-works/sw_3_2.jpg", width: 2560, height: 1829, category: "Lexus", desc: null },
    { src: "/selected-works/sw_3_3.jpg", width: 1920, height: 2560, category: "Lexus", desc: null },

    // Misc
    { src: "/selected-works/sw_4_1.jpg", width: 2560, height: 1707, category: "Misc", desc: null },
    { src: "/selected-works/sw_12.jpg", width: 2560, height: 1707, category: "Misc", desc: null },

    // SW 5
    { src: "/selected-works/sw_5_1.jpg", width: 2560, height: 1707, category: "SW 5", desc: null },
    { src: "/selected-works/sw_5_2.jpg", width: 1536, height: 2048, category: "SW 5", desc: null },
    { src: "/selected-works/sw_5_3.jpg", width: 1709, height: 2560, category: "SW 5", desc: null },
    { src: "/selected-works/sw_5_4.jpg", width: 2560, height: 1709, category: "SW 5", desc: null },

    // SW 6
    { src: "/selected-works/sw_6_1.jpg", width: 1707, height: 2560, category: "SW 5", desc: null },
    { src: "/selected-works/sw_6_2.jpg", width: 1709, height: 2560, category: "SW 5", desc: null },

    // SW 7
    { src: "/selected-works/sw_7_1.jpg", width: 2000, height: 1500, category: "SW 7", desc: null },
    
    // EQT Ventures
    { src: "/selected-works/sw_8_1.jpg", width: 2560, height: 1708, category: "EQT Ventures", desc: null },
    { src: "/selected-works/sw_8_2.jpg", width: 2560, height: 1708, category: "EQT Ventures", desc: null },
    { src: "/selected-works/sw_8_3.jpg", width: 2560, height: 1708, category: "EQT Ventures", desc: null },

    // SW 9
    { src: "/selected-works/sw_9_1.jpg", width: 1920, height: 2560, category: "SW 9", desc: null },
    { src: "/selected-works/sw_9_2.jpg", width: 1920, height: 2560, category: "SW 9", desc: null },

    { src: "/selected-works/sw_10.jpg", width: 2560, height: 2560, category: "SW 10", desc: null },

    { src: "/selected-works/sw_11_2.jpg", width: 2048, height: 1365, category: "SW 11", desc: null },
    { src: "/selected-works/sw_11_3.jpg", width: 2048, height: 1365, category: "SW 11", desc: null },
    { src: "/selected-works/sw_11_4.jpg", width: 2048, height: 1365, category: "SW 11", desc: null },

    { src: "/selected-works/sw_11.jpg", width: 2048, height: 1365, category: "SW 11", desc: null },

    { src: "/selected-works/sw_12_1.jpg", width: 2048, height: 1365, category: "SW 12", desc: null },
    { src: "/selected-works/sw_12_2.jpg", width: 2048, height: 1365, category: "SW 12", desc: null },
    { src: "/selected-works/sw_12_3.jpg", width: 2048, height: 1365, category: "SW 12", desc: null },
    { src: "/selected-works/sw_12_4.jpg", width: 1067, height: 1600, category: "SW 12", desc: null },
    { src: "/selected-works/sw_12_5.jpg", width: 1067, height: 1600, category: "SW 12", desc: null },

    { src: "/selected-works/sw_13.jpg", width: 1338, height: 892, category: "SW 13", desc: null },

    { src: "/selected-works/sw_14.jpg", width: 1200, height: 628, category: "SW 14", desc: null },
    { src: "/selected-works/sw_14_1.jpg", width: 1800, height: 2400, category: "SW 14", desc: null },
    { src: "/selected-works/sw_14_2.jpg", width: 1800, height: 2400, category: "SW 14", desc: null },

    { src: "/selected-works/sw_15.jpg", width: 2048, height: 1365, category: "", desc: null },
    { src: "/selected-works/sw_16.jpg", width: 2048, height: 2048, category: "", desc: null },
    { src: "/selected-works/sw_17.jpg", width: 1836, height: 1377, category: "", desc: null },
    { src: "/selected-works/sw_18.jpg", width: 2048, height: 2560, category: "", desc: null },
    { src: "/selected-works/sw_19.jpg", width: 2560, height: 1920, category: "", desc: null },
    { src: "/selected-works/sw_20.jpg", width: 2400, height: 1597, category: "", desc: null },
    { src: "/selected-works/sw_21.jpg", width: 2560, height: 1861, category: "", desc: null },
    { src: "/selected-works/sw_22_1.jpg", width: 1100, height: 1371, category: "", desc: null },
    { src: "/selected-works/sw_23.jpg", width: 2200, height: 1467, category: "", desc: null },
    { src: "/selected-works/sw_23_1.jpg", width: 2400, height: 1600, category: "", desc: null },
    { src: "/selected-works/sw_24_2.jpg", width: 1708, height: 2560, category: "", desc: null },
    { src: "/selected-works/sw_24.jpg", width: 1440, height: 1800, category: "", desc: null },
    { src: "/selected-works/sw_25_1.jpg", width: 2560, height: 1920, category: "", desc: null },
    { src: "/selected-works/sw_25.jpg", width: 2560, height: 1933, category: "", desc: null },
    { src: "/selected-works/sw_26.jpg", width: 2560, height: 1920, category: "", desc: null },
    { src: "/selected-works/sw_27_1.jpg", width: 1920, height: 1280, category: "", desc: null },
    { src: "/selected-works/sw_27.jpg", width: 1920, height: 1280, category: "", desc: null },
    { src: "/selected-works/sw_28.jpg", width: 1920, height: 2560, category: "", desc: "Exhibition A." },
];

export default function Gallery() {
    const [category, setCategory] = useState("All");
    const [modalPhoto, setModalPhoto] = useState<null | typeof photos[0]>(null);

    // View Transitions API for modal open/close
    function openModal(photo: typeof photos[0]) {
        if (document.startViewTransition) {
            document.startViewTransition(() => setModalPhoto(photo));
        } else {
            setModalPhoto(photo);
        }
    }

    function closeModal() {
        if (document.startViewTransition) {
            document.startViewTransition(() => setModalPhoto(null));
        } else {
            setModalPhoto(null);
        }
    }

    const filtered = category === "All" ? photos : photos.filter((p) => p.category === category);

    function renderNextImage(
        { alt = "", title, sizes }: RenderImageProps,
        { photo, width, height }: RenderImageContext
    ) {
        const src = typeof photo === "string" ? photo : (photo as any).src ?? "";
        let wrapper: HTMLDivElement | null = null;

        return (
            <div
                ref={(el) => { wrapper = el; }}
                style={{
                    width: "100%",
                    position: "relative",
                    cursor: "pointer"
                }}
                className="gallery-photo overflow-hidden"
                onClick={() => openModal(photo as any)}
            >
                <img
                    src={src}
                    alt={alt || "Gallery image"}
                    title={title}
                    width={width}
                    height={height}
                    style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
                    onLoad={() => wrapper?.classList.add("loaded")}
                />
            </div>
        );
    }

    return (
        <div className="p-4 flex flex-col md:flex-row gap-6">
            {/* Sticky sidebar for categories */}
            <div className="md:sticky md:top-24 md:self-start md:w-36 z-10">
                <h3 className="font-light text-center mb-4">Filters</h3>
                <div className="flex flex-row md:flex-col gap-2 mb-4">
                    {[
                        "All",
                        "George Jensen",
                        "Viva La Vulva",
                        "EQT Ventures",
                        "Lexus",
                        "Misc"
                    ].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-3 py-3 rounded text-xs w-full text-center ${
                                category === cat
                                    ? "bg-black text-white"
                                    : "bg-gray-100 hover:bg-gray-300"
                            }`}
                            style={{ cursor: "pointer" }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1">
                {/* CSS for the fade/slide-in animation (ease-in) */}
                <style>{`
                    .gallery-photo {
                        opacity: 0;
                        transition: opacity 800ms cubic-bezier(.4,0,.2,1), transform 600ms cubic-bezier(.4,0,.2,1);
                        will-change: opacity, transform;
                    }
                    .gallery-photo.loaded {
                        opacity: 1;
                    }
                `}</style>

                <PhotoAlbum
                    layout="masonry"
                    photos={filtered}
                    render={{ image: renderNextImage }}
                    spacing={20}
                    columns={2}
                    componentsProps={{ container: { style: { marginBottom: 10 } } }}
                />

                {/* Modal for enlarged image */}
                {modalPhoto && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <div
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-8 right-8 text-white text-3xl p-2 transition z-[101]"
                                onClick={closeModal}
                                aria-label="Close"
                                type="button"
                            >
                                &times;
                            </button>
                            <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center">
                                <ModalImage photo={modalPhoto} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Add this component inside Gallery.tsx (below your Gallery function)
function ModalImage({ photo }: { photo: typeof photos[0] }) {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center" style={{ minHeight: 300 }}>
            <div className="flex-1 flex items-center justify-center w-full h-full">
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
                <Image
                    src={photo.src}
                    alt={photo.category}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                    className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setLoaded(true)}
                />
            </div>
            {/* Description below the image, only if not null */}
            {photo.desc !== null && (
                <div className="mt-8 mb-10 text-center text-white bg-black/50 text-md max-w-2xl px-2 py-1 opacity-90">
                    {photo.desc}
                </div>
            )}
        </div>
    );
}