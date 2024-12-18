import React from "react";
import styles from "./styles.module.css";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BlogPostItemHeaderAuthors from "../../BlogPostItem/Header/Authors";
import BlogPostItemHeaderInfo from "../../BlogPostItem/Header/Info";
import Link from "@docusaurus/Link";

export function LatestBlogPostItem({ children }) {
  const post = useBlogPost();

  return (
    <div className={styles.container}>
      <Link to={post.metadata.permalink} className={styles.heroImage}>
        <img
          src={useBaseUrl(post.assets.image)}
          className={styles.image}
          alt={post.metadata.title}
        />
      </Link>
      <div className={styles.metaContainer}>
        <h2 className={styles.title}>{post.metadata.title}</h2>

        <div className={styles.info}>
          <BlogPostItemHeaderAuthors />
          <BlogPostItemHeaderInfo />
        </div>

        <div className={styles.content}>{children}</div>
        <Link to={post.metadata.permalink}>Read more {`->`}</Link>
      </div>
    </div>
  );
}
