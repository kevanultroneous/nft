import { Col, Row } from "react-bootstrap";
import ActionButtonV2 from "./ActionButtonV2";
import styles from "@/styles/components/SoftwareDevelopment.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";
const SoftwareDevelopment = (props) => {
  return (
    <Row className={styles.SoftwareDevelopmentExpertsRow}>
      <Col xl={6} xs={6} md={6} className="p-0">
        <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
          <div className={styles.HomeMiniLine} />
          <span className={styles.HomeSmallHeading}>{props.text}</span>
        </div>
      </Col>
      <Col
        xl={6}
        md={6}
        xs={6}
        className={styles.SoftwareDevelopmentExpertsBtnCol}
      >
        <ActionButtonV2
          href={"/contact-us"}
          text={
            <>
              <span className={styles.TextBtn}>Explore Product </span>
              <HiOutlineExternalLink />
            </>
          }
        />
      </Col>
    </Row>
  );
};

export default SoftwareDevelopment;
