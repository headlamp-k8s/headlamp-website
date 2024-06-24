import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";

import type { Props } from "@theme/BlogLayout";
import { LatestBlogPostItem } from "../BlogPostItems/LatestBlogPostItem/LatestBlogPostItem";

export default function BlogLayout(props: Props): JSX.Element {
  const { toc, children, ...layoutProps } = props;

  return <Layout {...layoutProps}>{children}</Layout>;
}
