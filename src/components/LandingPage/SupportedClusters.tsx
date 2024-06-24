import styles from "./SupportedClusters.module.css";
import Aws from "./images/aws.svg";
import Azure from "./images/azure.svg";
//@ts-ignore
import gcloud from "./images/gcloud.png";
import Minikube from "./images/minikube.svg";
//@ts-ignore
import kind from "./images/kind.png";

const iconSize = 50;

function SupportedClusters() {
  return (
    <section className={styles.container}>
      <div className={styles.logos}>
        <Azure width={iconSize} height={iconSize} />
        <Aws width={iconSize} height={iconSize} />
        <img
          src={gcloud}
          width={iconSize}
          height={iconSize}
          alt="Google Cloud logo"
        />
        <img src={kind} height={iconSize} alt="Kind logo" />
        <Minikube width={iconSize} height={iconSize} />
        {/* <K8s width={iconSize} height={iconSize} /> */}
        {/* <Openshift width={iconSize} height={iconSize} /> */}
      </div>
      <p className={styles.description}>
        Headlamp works with your favorite Kubernetes flavor
      </p>
    </section>
  );
}

export default SupportedClusters;
