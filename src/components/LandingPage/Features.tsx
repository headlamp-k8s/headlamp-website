import Heading from "@theme/Heading";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section
      className={styles.container}
      style={{
        display: "flex",
        justifyContent: "center",
        background: "var(--ifm-color-emphasis-100)",
        marginTop: "3rem",
        padding: "3rem 1rem",
        width: "100%",
      }}
    >
      {fluffLeft}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className={"col col--4"}>
          <Heading as="h2">Adaptable UI & Branding</Heading>
          <p>Create custom experiences with minimal effort</p>
        </div>
        <div className={"col col--4"}>
          <Heading as="h2">RBAC-Based controls</Heading>
          <p>Headlamp adapts to a user’s cluster permissions.</p>
        </div>
        <div className={"col col--4"}>
          <Heading as="h2">Desktop and Web</Heading>
          <p>It can be run as a web app, desktop app, or both.</p>
        </div>
      </div>
      {fluffRight}
    </section>
  );
}

const fluffLeft = (
  <svg
    width="55"
    height="52"
    viewBox="0 0 55 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "1rem" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.015625 40.7024C0.015625 42.0105 0.715312 43.2193 1.85117 43.8733L14.0286 50.8856C15.1645 51.5396 16.5638 51.5396 17.6997 50.8856L29.8771 43.8733C31.013 43.2193 31.7127 42.0105 31.7127 40.7024V26.6778C31.7127 25.3697 31.013 24.1609 29.8771 23.5068L17.6997 16.4946C16.5638 15.8405 15.1645 15.8405 14.0286 16.4946L1.85117 23.5068C0.715312 24.1609 0.015625 25.3697 0.015625 26.6778L0.015625 40.7024Z"
      fill="url(#paint0_linear_34_33993)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.7126 17.9763C31.7126 18.8989 32.2061 19.7514 33.0072 20.2126L41.5952 25.158C42.3963 25.6192 43.3832 25.6192 44.1842 25.158L52.7723 20.2126C53.5734 19.7514 54.0668 18.8989 54.0668 17.9763V8.0856C54.0668 7.16304 53.5734 6.31059 52.7723 5.84928L44.1842 0.903929C43.3832 0.442668 42.3963 0.442668 41.5952 0.903929L33.0072 5.84928C32.2061 6.31059 31.7126 7.16304 31.7126 8.0856L31.7126 17.9763Z"
      fill="url(#paint1_linear_34_33993)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_34_33993"
        x1="-3.95674"
        y1="42.6944"
        x2="37.4926"
        y2="68.7209"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA000" />
        <stop offset="1" stopColor="#FFECB3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_34_33993"
        x1="28.9112"
        y1="19.3812"
        x2="58.143"
        y2="37.7362"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6D3EB3" />
        <stop offset="1" stopColor="#FFE7FF" />
      </linearGradient>
    </defs>
  </svg>
);

const fluffRight = (
  <svg
    width="35"
    height="52"
    viewBox="30 0 35 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ alignSelf: "flex-end" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.7126 17.9763C31.7126 18.8989 32.2061 19.7514 33.0072 20.2126L41.5952 25.158C42.3963 25.6192 43.3832 25.6192 44.1842 25.158L52.7723 20.2126C53.5734 19.7514 54.0668 18.8989 54.0668 17.9763V8.0856C54.0668 7.16304 53.5734 6.31059 52.7723 5.84928L44.1842 0.903929C43.3832 0.442668 42.3963 0.442668 41.5952 0.903929L33.0072 5.84928C32.2061 6.31059 31.7126 7.16304 31.7126 8.0856L31.7126 17.9763Z"
      fill="url(#paint1_linear_34_33993)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_34_33993"
        x1="-3.95674"
        y1="42.6944"
        x2="37.4926"
        y2="68.7209"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA000" />
        <stop offset="1" stopColor="#FFECB3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_34_33993"
        x1="28.9112"
        y1="19.3812"
        x2="58.143"
        y2="37.7362"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6D3EB3" />
        <stop offset="1" stopColor="#FFE7FF" />
      </linearGradient>
    </defs>
  </svg>
);
