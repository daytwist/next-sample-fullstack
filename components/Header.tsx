import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="left">
      <Link href="/">
        <span className="bold" data-active={isActive("/")}>
          Feed
        </span>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        span {
          text-decoration: none;
          color: #000;
          display: inline-block;
          cursor: pointer;
        }

        .left span[data-active="true"] {
          color: gray;
        }

        span + span {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
