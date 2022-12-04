import { useRef, useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Bannerlist from "./Bannerlist";

const Banner = ({search}) => {
  const firstPage = 0;
  const [lastPage, setLastPage] = useState(3);
  const [content2lastPage, setContent2LastPage] = useState(3);
  const [content3lastPage, setContent3LastPage] = useState(3);
  const state = useSelector((state) => state.banner.content);
  const record = state.slice(firstPage, lastPage).filter((val)=>val.name.toLowerCase().includes(search));
  const imageList = useSelector((state) => state.image.content);
  const contentImageList = useSelector((state) => state.content.content)
  const contentPage2 = imageList.slice(0,content2lastPage).filter((val)=>val.name.toLowerCase().includes(search));
  const contentPage3 = contentImageList.slice(0,content3lastPage).filter((val)=>val.name.toLowerCase().includes(search));
  const [isLoading, setIsLoading] = useState(false);
  const [isContent2Loading, setIsContent2Loading] = useState(false);
  const [isContent3Loading, setIsContent3Loading] = useState(false);
  const loader = useRef(null);
  const content2loader = useRef(null);
  const content3loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    if (state.length === record.length) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const target = entries[0];
    if (target.isIntersecting) {
      setLastPage((prev) => prev + 3);
      setIsLoading(false);
    }
  }, []);

  const handleContent2Observer = useCallback((entries) => {
    if (contentPage2.length === imageList.length) {
      setIsContent2Loading(false);
      return;
    }
    setIsContent2Loading(true);
    const target = entries[0];
    if (target.isIntersecting) {
      setContent2LastPage((prev) => prev + 3);
      setIsContent2Loading(false);
    }
  }, []);

  const handleContent3Observer = useCallback((entries) => {
    if (contentPage3.length === contentImageList.length) {
      setIsContent3Loading(false);
      return;
    }
    setIsContent3Loading(true);
    const target = entries[0];
    if (target.isIntersecting) {
      setContent3LastPage((prev) => prev + 3);
      setIsContent3Loading(false);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };
    setIsContent3Loading(false);
    const observer = new IntersectionObserver(handleContent3Observer, option);
    if (content2loader.current) {
      observer.observe(content3loader.current);
      setIsContent3Loading(false);
    }
    return () => {
      if (content3loader.current) {
        setIsContent3Loading(false);
        observer.unobserve(content3loader.current);
      }
    };
  }, [handleContent3Observer]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };
    setIsContent2Loading(false);
    const observer = new IntersectionObserver(handleContent2Observer, option);
    if (content2loader.current) {
      observer.observe(content2loader.current);
      setIsContent2Loading(false);
    }
    return () => {
      if (content2loader.current) {
        setIsContent2Loading(false);
        observer.unobserve(content2loader.current);
      }
    };
  }, [handleContent2Observer]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };
    setIsLoading(false);
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
      setIsLoading(false);
    }
    return () => {
      if (loader.current) {
        setIsLoading(false);
        observer.unobserve(loader.current);
      }
    };
  }, [handleObserver]);

  return (
    <>
      <div className="banner-container ">
        <div className="banner-title">Romantic Comedy</div>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gap: "30px",
            justifyContent: "center",
            gridTemplateColumns: "repeat(3, 0fr)",
          }}
        >
          {record.map((banner, index) => {
            return (
              <div key={index}>
                <Bannerlist banner={banner} />
              </div>
            );
          })}
          {isLoading && state.length !== record.length && <div>loading...</div>}
          {state.length !== record.length && <div ref={loader} />}
        </div>
      </div>
      <div className="banner-container ">
      <div className="banner-title">Romantic Comedy</div>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gap: "30px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3, 0fr)",
        }}
      >
        {contentPage2.map((banner, index) => {
          return (
            <div key={index}>
              <Bannerlist banner={banner} />
            </div>
          );
        })}
        {isContent2Loading && contentPage2.length !== imageList.length && <div>loading...</div>}
        {contentPage2.length !== imageList.length && <div ref={content2loader} />}
      </div>
    </div>
    <div className="banner-container ">
      <div className="banner-title">Romantic Comedy</div>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gap: "30px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3, 0fr)",
        }}
      >
        {contentPage3.map((banner, index) => {
          return (
            <div key={index}>
              <Bannerlist banner={banner} />
            </div>
          );
        })}
        {isContent3Loading && contentPage3.length !== contentImageList.length && <div>loading...</div>}
        {contentPage3.length !== contentImageList.length && <div ref={content3loader} />}
      </div>
    </div>
    </>
  );
};

export default Banner;
