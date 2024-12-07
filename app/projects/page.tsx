import Link from 'next/link';
import "./page.css";
import "../colors.css";


export default function Page() {
    return (
        <div className="bg-image project-page-container">
                <h1 className="title">Projects</h1>

                <h1 className="projects-page-title">Projects</h1>

                <ul className="projects-page-list">
                    <li className="projects-page-list-item"><Link className="projects-page-link-item" href="#" />project one</li>
                    <li className="projects-page-list-item"><Link className="projects-page-link-item" href="#" />project one</li>
                    <li className="projects-page-list-item"><Link className="projects-page-link-item" href="#" />project one</li>
                    <li className="projects-page-list-item"><Link className="projects-page-link-item" href="#" />project one</li>
                    <li className="projects-page-list-item"><Link className="projects-page-link-item" href="#" />project one</li>
                </ul>
        </div>
    );
}
