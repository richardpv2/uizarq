import { useState, useEffect, useContext } from "react";
import ContextLoaded from "../ContextLoaded.ts";
import styles from "../styles/Gallery.module.css";
import baguettebox from "baguettebox.js/dist/baguetteBox.min.js";
import SliderButton from "../assets/img/home/gallery/buttonSlider.svg";
import "baguettebox.js/dist/baguetteBox.min.css";
import { useLocation } from "react-router-dom";

interface galleryItemsI {
  rowPosition: number;
  items:
    | {
        position: number;
        type: "img";
        file: string;
        gridColumns: number;
      }[]
    | {
        position: number;
        type: "slider";
        file: string[];
        gridColumns: number;
      }[]
    | {
        position: number;
        type: "iframe";
        src: string;
        gridColumns: number;
      }[]
    | {
        position: number;
        type: "video";
        file: string;
        gridColumns: number;
      }[];
  height: {
    "+960": string;
    "-960": string;
  };
}
[];

// array que en el futuro sera cargado desde el servidor
const galleryItems: galleryItemsI[] = [
  {
    rowPosition: 1,
    items: [
      {
        position: 1,
        type: "img",
        file: "../assets/img/home/gallery/1.jpg",
        gridColumns: 18,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 2,
    items: [
      {
        position: 1,
        type: "img",
        file: "../assets/img/home/gallery/2.jpg",
        gridColumns: 7,
      },
      {
        position: 2,
        type: "img",
        file: "../assets/img/home/gallery/3.jpg",
        gridColumns: 11,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 3,
    items: [
      {
        position: 1,
        type: "slider",
        file: [
          "../assets/img/home/gallery/4.jpg",
          "../assets/img/home/gallery/4_1.jpg",
        ],
        gridColumns: 10,
      },
      {
        position: 2,
        type: "slider",
        file: [
          "../assets/img/home/gallery/5.jpg",
          "../assets/img/home/gallery/5_1.jpg",
        ],
        gridColumns: 8,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 4,
    items: [
      {
        position: 1,
        type: "iframe",
        src: "https://kuula.co/share/collection/7vDJ2?logo=1&info=1&fs=1&vr=0&sd=1&gyro=0&thumbs=1",
        gridColumns: 18,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 5,
    items: [
      {
        position: 1,
        type: "video",
        file: "../assets/video/gallery/7.mp4",
        gridColumns: 6,
      },
      {
        position: 2,
        type: "video",
        file: "../assets/video/gallery/8.mp4",
        gridColumns: 6,
      },
      {
        position: 3,
        type: "video",
        file: "../assets/video/gallery/9.webm",
        gridColumns: 6,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 6,
    items: [
      {
        position: 1,
        type: "video",
        file: "../assets/video/gallery/10.webm",
        gridColumns: 18,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 7,
    items: [
      {
        position: 1,
        type: "img",
        file: "../assets/img/home/gallery/11.jpg",
        gridColumns: 11,
      },
      {
        position: 2,
        type: "img",
        file: "../assets/img/home/gallery/12.jpg",
        gridColumns: 7,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 8,
    items: [
      {
        position: 1,
        type: "img",
        file: "../assets/img/home/gallery/13.jpg",
        gridColumns: 9,
      },
      {
        position: 2,
        type: "img",
        file: "../assets/img/home/gallery/14.jpg",
        gridColumns: 9,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 9,
    items: [
      {
        position: 1,
        type: "video",
        file: "../assets/video/gallery/15.mp4",
        gridColumns: 18,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 10,
    items: [
      {
        position: 1,
        type: "img",
        file: "../assets/img/home/gallery/16.jpg",
        gridColumns: 10,
      },
      {
        position: 2,
        type: "img",
        file: "../assets/img/home/gallery/17.jpg",
        gridColumns: 8,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
  {
    rowPosition: 11,
    items: [
      {
        position: 1,
        type: "img",
        file: "../assets/img/home/gallery/18.png",
        gridColumns: 18,
      },
    ],
    height: { "+960": "calc(100vh - 60px)", "-960": "50vh" },
  },
];

const autoPlay = false;

function Gallery() {
  const path = useLocation().pathname;
  const [stateMediaMenos960, setMediaMenos960] = useState({
    matches: window.innerWidth > 960,
  });
  const { stateLoaded } = useContext(ContextLoaded)!;

  const items: JSX.Element[][] = [];
  const gap = 10;
  const columns = 18;

  for (let index = 1; index < galleryItems.length; index++) {
    const item = galleryItems.find((element) => element.rowPosition === index);
    const elementsOfItem: JSX.Element[] = [];

    item?.items.forEach((element, i) => {
      switch (element.type) {
        case "img":
          const source: string = new URL(element.file, import.meta.url).href;
          elementsOfItem.push(
            <a
              key={i}
              href={source}
              style={{
                gridColumn: "span " + element.gridColumns,
                height: stateMediaMenos960.matches
                  ? item.height["+960"]
                  : item.height["-960"],
              }}
            >
              <img
                src={source}
                alt=""
                style={{
                  height: stateMediaMenos960.matches
                    ? item.height["+960"]
                    : item.height["-960"],
                }}
              />
            </a>
          );
          break;
        case "slider":
          const source1: string = new URL(element.file[0], import.meta.url)
            .href;
          const source2: string = new URL(element.file[1], import.meta.url)
            .href;
          elementsOfItem.push(
            <div
              key={i}
              className={styles.sliderGalleryContainer}
              style={{
                gridColumn: "span " + element.gridColumns,
                height: stateMediaMenos960.matches
                  ? item.height["+960"]
                  : item.height["-960"],
              }}
            >
              <div
                className={styles.draggableSliderContainer}
                style={{
                  gridColumn: "span " + element.gridColumns,
                  maxWidth: `calc((${100}vw / ${columns}) * ${
                    element.gridColumns
                  } - ${gap}px)`,
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    height: stateMediaMenos960.matches
                      ? item.height["+960"]
                      : item.height["-960"],
                  }}
                >
                  <img
                    draggable="false"
                    style={{
                      width: `calc((${100}vw / ${columns}) * ${
                        element.gridColumns
                      } - ${gap}px)`,
                    }}
                    src={source1}
                    alt=""
                  />
                </div>
                <button onMouseDown={MouseDown} onTouchStart={TouchStart}>
                  <img
                    draggable="false"
                    className={styles.draggableSliderBttn}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src={SliderButton}
                    alt=""
                  />
                </button>
              </div>
              <img
                draggable="false"
                src={source2}
                style={{
                  gridColumn: "span " + element.gridColumns,
                  height: stateMediaMenos960.matches
                    ? item.height["+960"]
                    : item.height["-960"],
                }}
                alt=""
              />
            </div>
          );
          break;
        case "iframe":
          elementsOfItem.push(
            <iframe
              key={i}
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              title="Uizarq embed iframe"
              src={element.src}
              style={{
                border: "none",
                width: "100%",
                gridColumn: "span " + element.gridColumns,
                height: stateMediaMenos960.matches
                  ? item.height["+960"]
                  : item.height["-960"],
              }}
            />
          );
          break;
        case "video":
          const sourceVideo: string = new URL(element.file, import.meta.url)
            .href;
          elementsOfItem.push(
            stateLoaded.View ? (
              <video
                key={i}
                muted
                loop
                autoPlay={autoPlay}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  gridColumn: "span " + element.gridColumns,
                  height: stateMediaMenos960.matches
                    ? item.height["+960"]
                    : item.height["-960"],
                }}
              >
                <source src={sourceVideo} />
              </video>
            ) : (
              <h1 key={i}>Loading...</h1>
            )
          );
          break;
        default:
          break;
      }
    });
    items.push(elementsOfItem);
  }
  useEffect(() => {
    const MediaListener = window.matchMedia("(min-width: 960px)");
    MediaListener.addEventListener("change", setMediaMenos960);
    return () => MediaListener.removeEventListener("change", setMediaMenos960);
  }, []);

  useEffect(() => {
    baguettebox.run("." + styles.gallery);
    return () => baguettebox.destroy();
  }, [path]);

  return <div className={styles.gallery}>{items}</div>;
}

function MouseDown(e: any) {
  let targetParentNode = e.target.parentNode.parentNode;
  function MouseMove(e: any) {
    targetParentNode.style.width =
      e.clientX - targetParentNode.getBoundingClientRect().x + "px";
  }
  function MouseUp() {
    window.removeEventListener("mousemove", MouseMove);
    window.removeEventListener("mouseup", MouseUp);
  }
  window.addEventListener("mousemove", MouseMove);
  window.addEventListener("mouseup", MouseUp);
}

function TouchStart(e: any) {
  let targetParentNode = e.target.parentNode;
  function touchMove(e: any) {
    targetParentNode.style.width =
      e.changedTouches[0].clientX -
      targetParentNode.getBoundingClientRect().x +
      "px";
  }
  function touchEnd() {
    window.removeEventListener("touchmove", touchMove);
    window.removeEventListener("touchend", touchEnd);
  }
  window.addEventListener("touchmove", touchMove);
  window.addEventListener("touchend", touchEnd);
}

export default Gallery;
