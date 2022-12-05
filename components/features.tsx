import Image from "next/image";
import FeatureImg from "/public/assets/img/woman-w-phone.png";
import FeaturesLineImg from "/public/assets/img/features-line.svg";
import styles from "../styles/features.module.scss";
import BgCircleAmin from "./bgCircleAmin";
import AllCircleAmin from "./allCircleAmin";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <div data-aos="zoom-in" className={styles.feature}>
          Instant Transfer
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-offset="150"
          className={styles.feature}
        >
          Low Fees
        </div>
        <div
          className={styles.feature}
          data-aos="zoom-in"
          data-aos-offset="150"
          data-aos-delay="500"
        >
          Best Rates
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-offset="200"
          className={styles.feature}
        >
          Safe and Secure
        </div>
        <div data-aos="zoom-in" className={styles.feature}>
          24-hour Help Center{" "}
        </div>
        <Image
          data-aos="fade-in"
          data-aos-delay="1200"
          src={FeaturesLineImg}
          alt="line through"
          className={styles.lines}
        />
      </div>
      <div className={styles.featureImg}>
        <Image
          src={FeatureImg}
          alt="woman pressing phone"
          width={421}
          height={562}
        />
      </div>
    </div>
  );
}
