import { useRef, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Bannerlist from "./Bannerlist";

const Banner = () => {
  const firstPage = 0;
  const [lastPage, setLastPage] = useState(3);
  const state = useSelector((state) => state.banner.content);
  const record = state.slice(firstPage, lastPage);
  const [isLoading, setIsLoading] = useState(false);
  const loader = useRef(null);

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
  );
};

export default Banner;
