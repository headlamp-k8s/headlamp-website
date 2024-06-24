import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import TOC from "@theme/TOC";
import type { Props } from "@theme/BlogPostItem";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import BlogPostItemHeaderTitle from "./Header/Title";
import BlogPostItemHeaderAuthors from "./Header/Authors";
import BlogPostItemHeaderInfo from "./Header/Info";

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const post = useBlogPost();

  const isPage = post.isBlogPostPage;
  const isTOC = isPage && post.toc?.length > 0;

  // Post preview as a card
  if (!isPage) {
    return (
      <Link to={post.metadata.permalink} className={styles.postLink}>
        <article className={clsx("card", className, styles.postCard)}>
          <img
            src={useBaseUrl(post.assets.image)}
            style={{
              objectFit: "cover",
              height: "200px",
              width: "100%",
            }}
            alt="article image"
          />
          <header className={styles.postCardHeader}>
            <BlogPostItemHeaderTitle />
            <div className={styles.postCardBottom}>
              <div>
                <BlogPostItemHeaderAuthors />
                <BlogPostItemHeaderInfo />
              </div>
              <div className={styles.readMore}>Read more {`->`}</div>
            </div>
          </header>
        </article>
      </Link>
    );
  }

  // Full post page
  return (
    <main>
      <article className={clsx("container margin-vert--lg", className)}>
        <div className="row">
          <div className={"col col--8 col--offset-2"}>
            <img
              src={useBaseUrl(post.assets.image)}
              style={{
                display: "block",
                height: "100%",
                objectFit: "cover",
                maxHeight: "400px",
                width: "100%",
                borderRadius: "10px",
              }}
              alt="article image"
            />
            <BlogPostItemHeader />
            <BlogPostItemContent>{children}</BlogPostItemContent>
            <BlogPostItemFooter />
          </div>

          {isTOC && (
            <div className="col col--2">
              <TOC toc={post.toc} />
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
