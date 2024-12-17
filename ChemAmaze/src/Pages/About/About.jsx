import "./About.css";
import ChemAmaze from "../pageAssests/ChemAmaze.png";
import PKCLogo from "../pageAssests/PKC.png";

const About = () => {
    return ( 
        <>
        <div className="complete-about">
            <div className="blank"></div>
            <div className="about-title">About Us</div>
            <div className="total">
            <div className="up-about">
                <div className="curved">
                    <div className="for-img"><img src={ChemAmaze}></img></div>
                    <div className="for-text">
                        <p>‘ChemAmaze’ is an initiative of BASF India, implemented by PKC and IIT-Madras, and enabled by the Office of PSA. ChemAmaze is a platform designed to introduce gamified learning as a pedagogical tool for teaching and learning Chemistry. Showcasing a repository of engaging games, it provides students and teachers across India with an opportunity to embrace game-based teaching and learning techniques at the school level, in line with the NEP 2020 recommendations. This innovative initiative aims to make STEM education interactive and accessible, fostering a new era of enriched learning experiences at the school level in India.</p>
                    </div>
                </div>
            </div>
            <div className="down-about">
            <div className="curved">
                <div className="for-img"><img src={PKCLogo}></img></div>
                <div className="for-text"><p>Pune Knowledge Cluster has been established by the Office of The Principal Scientific  Advisor, GoI under The City Knowledge and Innovation Cluster Initiative (CKIC). PKC aims to bring together Academic Institutions, R&D organizations, Industries, Industry Associations,  NGOs, Civic Bodies, and Local and State governments to collectively work for the betterment of  Pune City by leveraging the science and technology capabilities of its partner organizations.  PKC is one of six Knowledge Cluster Initiatives in India. PKC is hosted by the Inter-University  Centre for Astronomy & Astrophysics (IUCAA) which is a UGC-supported government institution in Pune. Funding received for projects by PKC is administered by IUCAA.</p></div>
            </div>
            </div>
            </div>
        </div>    
        </>
     );
}
 
export default About;