import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children, activeClass }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClass}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
