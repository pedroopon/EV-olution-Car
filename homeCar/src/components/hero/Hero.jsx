import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroCount, setHeroCount, heroData, setPlayStatus, playStatus}) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p> Explores o Futuro </p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className="hero-ponto-play">
                <ul className="hero-pontos">
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-ponto orange":"hero-ponto"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-ponto orange":"hero-ponto"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-ponto orange":"hero-ponto"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                    <p>Ver o video</p>
                </div>
            </div>

        </div>
    )
}

export default Hero