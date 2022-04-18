import { useContext, useState } from "react"
import { Context2 } from "../../App"
import { BikeItem } from "../../components/bikes_components/BikeItem/BikeItem"
import { MyModal } from "../../components/UI/MyModal/MyModal"
import { Subtitle } from "../../components/UI/Subtitle/Subtitle"
import './Favorites.css'

export const Favorites = () => {
    const [modal, setModal] = useState(false)
    const context = useContext(Context2)
    const clear = () => {
        context.setBikesFavorites([])
        context.setBikeNum(0)
    }
    return (
        <div className="Favorites culumn">
            <MyModal visible={modal} setVisible={setModal} />
            <div className="row colored">
                <div className="container row">
                    <div className="column">
                        <Subtitle title='Избранное' />
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem velit, beatae nemo aut illo. Blanditiis, molestias? Sit qui voluptas distinctio culpa, suscipit nisi similique illo, molestias officia facilis repellat.</p>
                    </div>
                    <div className="column">
                        <div className="block_colored">
                            <h3>Получить бесплатную консультацию</h3>
                            <button onClick={() => setModal(true)}>Связаться с нами</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row bikelist">
                    <div className="options">
                        {context.bikesFavorites.length
                            ?
                            <button className="btn" onClick={clear}>Очистить список</button>
                            :
                            <span className="font_bold">Добавьте велосипеды в избранное чтобы не потерять!</span>
                        }
                    </div>
                    <BikeItem
                        currentCountry={context.bikesFavorites}
                        category='favorites'
                    />
                </div>
            </div>
        </div>
    )
}