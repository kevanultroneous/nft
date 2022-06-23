import Slider from "react-slick";
import styles from "@/styles/ext.module.css";
import { Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
const Ext = () => {
  const ary = ["k1", "k2", "k3", "k4", "k5", "k6"];
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    // beforeChange: (current, next) =>
    //   console.log({ before: "before", oldSlide: current, activeSlide: next }),
    afterChange: (current) => {
      ary.indexOf(ary[ary.length - 1]) === current ? 2 : null;
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 3,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          cssEase: "linear",
        },
      },
    ],
  };
  useEffect(() => {
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "wheel",
      function () {
        var lastScrollTop = 0;
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          sliderRef.current.slickPrev();
        } else {
          sliderRef.current.slickNext();
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  });
  const sliderRef = useRef();
  return (
    <div>
      <p>
        A Centralized Trading platform for Spot trading, OTC desk, and P2P
        Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-c lock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly.
      </p>
      <p>
        A Centralized Trading platform for Spot trading, OTC desk, and P2P
        Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly.
      </p>
      <div className={styles.SliderContainer}>
        <Slider {...settings} ref={sliderRef}>
          {ary.map((v, i) => (
            <div className={styles.Main}>
              <div className={styles.Box}>
                <p>{v}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <p>
        A Centralized Trading platform for Spot trading, OTC desk, and P2P
        Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly.
      </p>
      <p>
        A Centralized Trading platform for Spot trading, OTC desk, and P2P
        Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly.
      </p>
      <p>
        A Centralized Trading platform for Spot trading, OTC desk, and P2P
        Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly. A Centralized Trading platform for Spot trading, OTC desk, and
        P2P Trading. Offers world-class trading technology, robust legal and
        compliance solutions, and round-the-clock support. Automate trades
        without involving a central authority and connect buyers and sellers
        directly.
      </p>
    </div>
  );
};
export default Ext;
