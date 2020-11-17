import { Link } from "react-router-dom";
// import '...'

export default function Marketing () {
    return (
        <div>
            <header id="header">
                <div className="content">
                    <h1><a href="/home">Pintereach</a></h1>
                    <p>
                        Pintereach helps you research by<br />
                        enabling you to save and organize<br />
                        articles in to categories to read later.
                    </p>
                    <ul className="actions">
                        <li>
                            <Link to="/login" className="button primary icon solid fa-sign-in-alt">Login</Link>
                        </li>
                        <li>
                            <a href="#one" className="button icon solid fa-chevron-down scrolly">Learn More</a>
                        </li>
                    </ul>
                </div>
                <div className="image phone">
                    <div className="inner"><img src="images/screen.jpg" alt="" /></div>
                </div>
            </header>

            <section id="one" className="wrapper style2 special">
                <header className="major">
                    <h2>
                        Sed ipsum magna lorem tempus amet<br />
                        vehicula et gravida elementum
                    </h2>
                </header>
                <ul className="icons major">
                    <li>
                        <span className="icon solid fa-camera-retro"><span className="label">Shoot</span></span>
                    </li>
                    <li>
                        <span className="icon solid fa-sync"><span className="label">Process</span></span>
                    </li>
                    <li>
                        <span className="icon solid fa-cloud"><span className="label">Upload</span></span>
                    </li>
                </ul>
            </section>

            <section id="two" className="wrapper">
                <div className="inner alt">
                    <section className="spotlight">
                        <div className="image"><img src="images/pic01.jpg" alt="" /></div>
                        <div className="content">
                            <h3>Magna sed ultrices</h3>
                            <p>
                                Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
                                elementum elit fusce accumsan dui libero, quis vehicula lectus
                                ultricies eu. In convallis amet leo non sapien iaculis efficitur
                                consequat lorem ipsum.
                            </p>
                        </div>
                    </section>
                    <section className="spotlight">
                        <div className="image"><img src="images/pic02.jpg" alt="" /></div>
                        <div className="content">
                            <h3>Ultrices nullam aliquam</h3>
                            <p>
                                Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
                                elementum elit fusce accumsan dui libero, quis vehicula lectus
                                ultricies eu. In convallis amet leo non sapien iaculis efficitur
                                consequat lorem ipsum.
                            </p>
                        </div>
                    </section>
                    <section className="spotlight">
                        <div className="image"><img src="images/pic03.jpg" alt="" /></div>
                        <div className="content">
                            <h3>Aliquam sed magna</h3>
                            <p>
                                Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
                                elementum elit fusce accumsan dui libero, quis vehicula lectus
                                ultricies eu. In convallis amet leo non sapien iaculis efficitur
                                consequat lorem ipsum.
                            </p>
                        </div>
                    </section>
                    <section className="special">
                        <ul className="icons labeled">
                            <li>
                                <span className="icon solid fa-camera-retro"><span className="label">Ipsum lorem accumsan</span></span>
                            </li>
                            <li>
                                <span className="icon solid fa-sync"><span className="label">Sed vehicula elementum</span></span>
                            </li>
                            <li>
                                <span className="icon solid fa-cloud"><span className="label">Elit fusce consequat</span></span>
                            </li>
                            <li>
                                <span className="icon solid fa-code"><span className="label">Lorem nullam tempus</span></span>
                            </li>
                            <li>
                                <span className="icon solid fa-desktop"><span className="label">Adipiscing amet sapien</span></span>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>

            <section id="three" className="wrapper style2 special">
                <header className="major">
                    <h2>Magna leo sapien gravida</h2>
                    <p>
                        Gravida at leo elementum elit fusce accumsan dui libero, quis
                        vehicula<br />
                        lectus ultricies eu. In convallis amet leo sapien iaculis efficitur.
                    </p>
                </header>
                <ul className="actions special">
                    <li>
                        <Link to="/register" className="button primary icon solid fa-sign-in-alt">Register</Link>
                    </li>
                    <li><Link to="/login" className="button">Login</Link></li>
                </ul>
            </section>
        </div>
    )
}