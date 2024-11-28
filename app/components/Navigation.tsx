import Link from "next/link";
import "./navigation.css";

export const pages = [
  {
    id: 1,
    title: "about",
    url: "/about",
  },
  {
    id: 2,
    title: "photos",
    url: "/photos",
  },
  {
    id: 3,
    title: "music",
    url: "/music",
  },
  {
    id: 4,
    title: "writing",
    url: "/writing",
  },
  {
    id: 5,
    title: "projects",
    url: "/projects",
  },
  {
    id: 6,
    title: "contact",
    url: "/contact",
  }
];


export default function Navigation() {
  return (
    <>
        <div className="navigation-container">
            <nav className="navlinks">
                {
                    pages.map(({id, title, url}) => (
                        <Link key={id} href={url} className="navlink">{title}</Link>
                    ))
                }
            </nav>
        </div>
    </>
  )
}
