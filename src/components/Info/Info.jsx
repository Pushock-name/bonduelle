import s from './Info.module.scss'
import info1 from '../../assets/img/info-1.png'
import info2 from '../../assets/img/info-2.png'


const Info = ({ }) => {

    return (
        <div className={s.info}>
            <div className={s.content}>
                <h2 className={s.title}>Как участвовать</h2>
                <div className={s.cards}>
                    <div className={s.card}>
                        <div className={s.number}>
                            01
                        </div>
                        <div className={s.description}>
                            Выбери блюда для своего праздничного стола
                        </div>
                    </div>
                    <img src={info1} alt="" />
                    <div className={s.card}>
                        <div className={s.number}>
                            02
                        </div>
                        <div className={s.description}>
                            Получи промокод на&nbsp;покупку товаров Бондюэль от&nbsp;1&nbsp;000&nbsp;₽
                        </div>
                    </div>
                    <img src={info2} alt="" />
                    <div className={s.card}>
                        <div className={s.number}>
                            03
                        </div>
                        <div className={s.description}>
                            Совершай заказы с&nbsp;5&nbsp;ноября по&nbsp;25&nbsp;декабря и&nbsp;участвуй в&nbsp;розыгрыше призов
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info