import React from 'react'
import './musculation.css'
import { motion } from 'framer-motion'
import Newsletter from '../Newsletter/Newsletter'
import { Link } from 'react-router-dom'
export default function Musculation() {
  return (
    <>
        <div className='container-muscilation'>
             <h1 className='my-h1-weclom-muscilation'>WELCOM TO MUSCILATION </h1>
             <img src='https://i.pinimg.com/1200x/71/98/51/719851ab2199e16bb82657fb88477a78.jpg' className='img-1-muscilation'/>
             <h1 className='my-h1-muscilation'>MUSCILATION</h1>
             <motion.div
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{duration:1.5}}
              className='title-musculation'>
                <h1 className='h1-MUSCULATION'>MUSCULATION</h1>
                <h1 className='h1-SOULEVEZ'>SOULEVEZ,TRACTEZ ET DÉVELOPPEZ</h1>
             </motion.div>
             <motion.div 
               initial={{opacity:1,translateX:"100%"}}  
               whileInView={{opacity:1,scale:1,translateX:0}}
               transition={{duration:3}}
             className='discription-muscilation-1'>
                  <span>
                       <h1 className='titre_Renforcer_1'>RENFORCEZ-VOUS</h1> 
                       <p className='paragraphe_dicription_1'>
                        La musculation est une discipline qui vise à développer et à entretenir la masse <br/>
                        musculaire des pratiquants par le biais d’exercices physiques. Elle permet d’accroitre le <br/>
                        volume musculaire, la force, l’endurance, la puissance, l’explosivité et la résistance du <br/>
                        corps. La musculation est l’élément central de plusieurs sports comme le culturisme ou <br/>
                        l’haltérophilie par exemple. Elle constitue également une part de la préparation <br/>
                        physique pour les athlètes, notamment de haut niveau, qui ont besoin d’une solide <br/>
                        condition physique pour maximiser leurs performances. La musculation peut être <br/>
                        également utilisée par des méthodes plus douces comme le fitness, le stretching ou <br/>
                        dans le cas de soins médicaux comme la kinésithérapie ou la rééducation. Découvre en <br/>
                        exemple les espaces musculation de la salle de Paris 18 et de Paris 12.
                       </p>  
                  </span>
                  <img src='https://i.pinimg.com/736x/87/cf/15/87cf15a568d3f7cf903dabf1f7316d00.jpg' className='img1-muscilation'/>
             </motion.div>
             <motion.div 
             initial={{opacity:1,scale:1,translateX:"-100%"}}
             whileInView={{opacity:1,scale:1,translateX:0}}
             transition={{duration:3}}
             className='discription-muscilation-2'>
                  <span>                       
                       <h1 className='titre_Pour_Qui_1'>POUR QUI ?</h1> 
                       <p className='paragraphe_discription_1'>
                       Pour ceux qui veulent pratiquer la musculation de manière occasionnelle en <br/>
                       complément d’une autre activité sportive, mais aussi pour tous ceux qui souhaitent<br/>
                       transformer leur corps en décuplant leur masse musculaire et pousser leurs limites ! <br/>
                       Découvre nos clubs de sport partout en France : Paris, Rennes, Toulouse, Lyon, <br/>
                       Marseille ou encore Toulouse. <br/><br/>
                       Simples d’utilisation, les stations de musculation sont issues des plus grandes<br/>
                       marques et proposent des programmes sur mesure pour répondre aux besoins de<br/>
                       débutants et des amateurs de la musculation.<br/>
                       </p>  
                  </span>
                  <img src='https://i.pinimg.com/1200x/c5/e0/a2/c5e0a2ca09cfa0253114eee835f80428.jpg' className='img2-muscilation'/>
             </motion.div>
             <motion.div 
             initial={{opacity:1,scale:1,translateX:"100%"}}
             whileInView={{opacity:1,scale:1,translateX:0}}
             transition={{duration:3}}
             className='discription-muscilation-3'>
                  <span>
                       <h1 className='POUR_QUOI_3'>POUR QUOI ?</h1> 
                       
                       <p className='paragraph_dicription_3'>
                       - Développer ta croissance musculaire et ta force physique. Obtenir une plus grande <br/>
                       résistance et des muscles plus toniques, plus saillants.<br/><br/>
                       - Augmenter ta prise de masse musculaire en diminuant ta masse grasse <br/>
                                                                                          
                       - Renforcer ta résistance osseuse en luttant contre la perte de densité osseuse<br/>
                       (ostéoporose) à l’aide des charges progressives - Renforcer ta confiance personnelle en <br/>
                       vous aider à obtenir un corps dans lequel vous vous sentirez bien.
                       </p>  
                  </span>
                  <img src='https://i.pinimg.com/736x/bb/f4/a9/bbf4a959e80c276f25ce5fd12b0d8f38.jpg' className='img3-muscilation'/>
             </motion.div>
             <motion.div 
             initial={{opacity:1,scale:1,translateY:"100%"}}
             whileInView={{opacity:1,scale:1,translateY:0}}
             transition={{duration:3}}
             className='btn-SINSCRIRE'>
             <button className='sincrire-link'><Link to="/" style={{textDecoration:"none"}}>S'INSCRIRE</Link></button>
             </motion.div>
             <motion.div 
               initial={{opacity:0,translateY:"100%"}}
               whileInView={{opacity:1,scale:1,translateY:0}}
               transition={{duration:2}}
               className='title-DÉCOUVRE-activites'>
                     <h1 className='titre_decouvre'>DÉCOUVRE NOS ACTIVITÉS</h1> 
                     <h1 className='title-choix-activites'>CHOISIS TA DISCIPLINE</h1> 
                     
            </motion.div>
            <motion.div 
                 initial={{opacity:0,translateX:"-100%"}}
                 whileInView={{opacity:1,scale:1,translateX:0}}
                 transition={{duration:3}}
               className='img-activites'>
                     <Link to="/Activities"><img src='Images/activites.jpg' className='img-muscilation'/></Link>
                     <Link to="/cross-training"><img src='Images/photof2.jpg'  className='img-muscilation' /></Link>
                     <Link to="/cours_collectifs"><img src='Images/photo4.jpg' className='img-muscilation' /></Link>
                     <Link to="/cross-training"><img src='Images/photof3.jpg' className='img-muscilation' /></Link>
               </motion.div>
               <motion.div  
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:3}}
               className="compent-newleste">
                         <Newsletter/>
                </motion.div>


        </div>

    </>
  )
}
