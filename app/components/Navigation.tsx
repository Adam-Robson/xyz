import Link from "next/link";
import "./navigation.css";

export const pages = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "music",
    url: "/music",
  },
  {
    id: 3,
    title: "writing",
    url: "/writing",
  },
  {
    id: 4,
    title: "projects",
    url: "/projects",
  },
  {
    id: 5,
    title: "photos",
    url: "/photos",
  },
  {
    id: 6,
    title: "about",
    url: "/about",
  },
  {
    id: 7,
    title: "contact",
    url: "/contact",
  },
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
