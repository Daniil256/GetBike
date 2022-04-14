import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './User.css'
export const User = () => {

    return (
        <div className="User">
            <div className="title">
                <img src="../img/page_user/background_title.jpg" alt="error" />
                <span className="background"></span>
                <div className="container">
                    <h2>Гарантия на велосипеды</h2>
                </div>
            </div>
            <div className="row container">
                <div className="column table_of_contents">
                    <Link className="btn font_bold"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Срок службы, гарантийный срок
                    </Link>
                    <Link className="btn font_bold"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Условия предоставления гарантии
                    </Link>
                    <Link className="btn font_bold"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Обязанности владельца
                    </Link>
                    <Link className="btn font_bold"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Гарантия не распространяется
                    </Link>
                    <Link className="btn font_bold"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Снятие с гарантии
                    </Link>
                </div>
                <div className="column content">
                    <h2>Гарантийные обязательства</h2>
                    <h3 id="section1">Срок службы, гарантийный срок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus suscipit omnis temporibus necessitatibus ratione voluptate sequi? Voluptates eum nesciunt animi suscipit qui officiis ipsam inventore a. Esse, maiores facilis cupiditate placeat quam nemo. Inventore nihil molestiae iusto nemo maxime dolorum libero fugit aspernatur cupiditate quo accusantium, expedita laboriosam labore aperiam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem rem laboriosam, vitae magnam molestiae earum aliquid quisquam vero necessitatibus eum! Dolorem dignissimos blanditiis libero, earum ipsum delectus ab in?</p>
                    <div className="row">
                        <h3 id="section2">Условия предоставления гарантии</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse pariatur earum commodi voluptas eos autem rem beatae enim, soluta exercitationem veniam ab laborum amet vero dolore? Obcaecati, perspiciatis esse?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere molestiae nesciunt, laboriosam, id hic quam distinctio quis nemo illo dicta eaque quod, voluptates totam voluptatibus. Quis dicta alias reprehenderit accusamus?</p>
                    </div>
                    <div className="row">
                        <h3 id="section3">Обязанности владельца</h3>
                        <ol className="column">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum.</li>
                        </ol>
                    </div>
                    <div className="row">
                        <h3 id="section4">Гарантия не распространяется</h3>
                        <ol className="column">
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa praesentium libero?</li>
                        </ol>
                    </div>
                    <div className="row">
                        <h3 id="section5">Снятие велосипеда с гарантийного обслуживания</h3>
                        <ol className="column">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quidem.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quidem.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quidem.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quidem.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quidem.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}