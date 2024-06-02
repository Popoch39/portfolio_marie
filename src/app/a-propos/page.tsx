import style from "@/style/page/propos.module.css"
import marie from "@/assets/images/marie.jpg"
import ExportedImage from "next-image-export-optimizer";
import Header from "@/components/Header";
const page = () => {
    return (
        // header
        <>
            <Header />
            <div className={style.container}>
                <div className={style.personal}>
                    <h1>Mon parcours</h1>
                    <div className={style.parcours}>
                        <ExportedImage src={marie} alt="Static Image" className={style.marie} />
                        <div className={style.text_container}>
                            <p>Je suis Marie Pocheron, designer et illustratrice.
                                J’ai étudié le design d’espace à Olivier de
                                Serres et à l’École Boulle à Paris et terminé mon
                                parcours à la Pratt Institute de New-York où j’ai
                                étudié l’urbanisme et l’illustration. </p>
                            <p>Durant deux années, j’ai occupé le poste de
                                chargée de projet en agence de paysage et
                                urbanisme, ce qui a renforcé mon sens critique et
                                ma capacité à réfléchir aux projets à toutes les
                                échelles et m’adapter aux différentes contraintes.
                            </p>
                            <p>Ma passion réside dans la représentation graphique
                                et technique des architectures, des paysages
                                et des milieux naturels. Mon travail explore
                                également les projets d’animations 2D, ouvrant
                                ainsi la voie à une diversification dans la
                                représentation des projets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default page;