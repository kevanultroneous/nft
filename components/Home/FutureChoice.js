import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/FutureChoice.module.css";
import { useEffect } from "react";
import AOS from "aos";
import { Col, Image, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
const FutureChoice = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.FutureChoiceContainer}>
      <Row>
        <Col xl={7}>
          <div className={styles.CardBg}>
            <Row>
              <Col xl={12}>
                <h5 className={styles.CardTitle}>
                  <span style={{ color: "#7E7F91" }}>
                    Be a part of Future’s
                  </span>
                  <br />
                  Choice & Live it with us!
                </h5>
              </Col>
            </Row>
            <Row className={styles.ProfileContainer}>
              <Col xl={10}>
                <div className={styles.CardProfile}>
                  <div>
                    <Image src="/assets/images/model.png" />
                  </div>
                  <div className={styles.CardProfileDetailContainer}>
                    <p className={styles.CardProfileName}>Hayen Phan</p>
                    <p className={styles.CardProfileDOB}>10th June 2022</p>
                  </div>
                </div>
              </Col>
              <Col>
                <Image src="/assets/images/right-sb.svg" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={5}>
          <div className={styles.MainHungry}>
            <div className={styles.HungryCard}>
              <h5 className={styles.HungryHeading}>Hungry for more?</h5>
              <p className={styles.HungryParagraph}>
                Read more articles on our blog.
              </p>
              <ActionButton text={"Visit Blog Page"} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FutureChoice;
