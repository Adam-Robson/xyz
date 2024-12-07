import Link from 'next/link';
import "./page.css";
import "../colors.css";


export default function Page() {
    return (
        <div className="bg-image project-page-container">
                <h1 className="projects-page-title">Projects</h1>

                <ul className="projects-page-list">
                    <li><Link className="projects-page-list-item" href="#" />project one</li>
                    <li><Link className="projects-page-list-item" href="#" />project one</li>
                    <li><Link className="projects-page-list-item" href="#" />project one</li>
                    <li><Link className="projects-page-list-item" href="#" />project one</li>
                    <li><Link className="projects-page-list-item" href="#" />project one</li>
                </ul>
        </div>
    );
}
