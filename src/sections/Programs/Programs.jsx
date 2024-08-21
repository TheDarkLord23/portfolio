import styles from './ProgramsStyles.module.css'
import vscode from '../../assets/vscode.png'
import figma from '../../assets/figma.png'
import photoshop from '../../assets/photoshop.png'
import illustrator from '../../assets/illustrator.png'
import lightroom from '../../assets/lightroom.png'
import premiere from '../../assets/premiere-pro.png'

function Programs() {
  return (
    <section id='programs' className={styles.container}>
        <div className={styles.skillList}>
            <img src={vscode} alt="Visual Studio Code" />
            <img src={photoshop} alt="Adobe Photoshop" />
            <img src={illustrator} alt="Adobe Illustrator" />
            <img src={lightroom} alt="Adobe Lightroom" />
            <img src={premiere} alt="Adobe Premiere Pro" />
            <img src={figma} alt="Figma" />

        </div>
    </section>
  )
}

export default Programs