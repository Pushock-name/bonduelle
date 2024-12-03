import s from './Hero.module.scss'
import logo from '../../assets/img/logo.svg'


const Hero = ({ }) => {

    return (
        <div className={s.hero}>
            <div className={s.content}>
                <div className={s.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={s.text}>
                    <h1 className={s.title}>В новый год с&nbsp;Бондюэль</h1>
                    <div className={s.description}>
                        Участвуй в розыгрыше призов
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero