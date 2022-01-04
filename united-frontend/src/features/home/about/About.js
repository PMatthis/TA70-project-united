import './About.css';
import 'primeflex/primeflex.css';

import us from "../../../images/images_vitrine/us.jpg"
import defis from "../../../images/images_vitrine/defis.jpg"
import sharing from "../../../images/images_vitrine/sharing.png"

function About() {
    return <div className="about" id="about">
        <h2>À propos</h2>

        <div className="p-d-flex p-jc-evenly services-card">
            <div className="p-mr-4">
                <img className="image-apropo" src={us} /> 
                <h2 className="space-text description-text">Qui sommes-nous ?</h2>
                <h4 className="space-text description-text"> Nous sommes une équipe de développeur informatique localisé à Belfort et nous mettons notre savoir au service des associations. </h4>
            </div>
            <div className="p-mr-4">
                <img className="image-apropo" src={defis} /> 
                <h2 className="space-text description-text">Nos défis</h2>
                <h4 className="space-text description-text">Mettre en relation des associations avec des donnateurs, facilité les donnations, mettre à la disposition des donnateurs et associations des éléments permettant de traiter l'information (outils graphiques, factures...) </h4>
            </div>
            <div>
                <img className="image-apropo" src={sharing} />
                <h2 className="space-text description-text"> Notre vision</h2>
                <h4 className="space-text description-text">Nous avons une vision d'entraide, solidarité, ensemble, unité, amour, fraternité, bonté, coopération, charité, et de partage. Ainsi, nous pensons que chacun peur apporter sa contribution et deviennir le bâtisseur d'un monde fondé</h4>
            </div>
        </div> 
        
    </div>
}

export default About
