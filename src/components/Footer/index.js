import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="Logo do Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/images/tw.png" alt="Logo do Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="Logo do Instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo do Organo"/>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>

            {/* <div className="social-medias">
                <img src="/images/fb.png" alt="Facebook logo" />
                <img src="/images/tw.png" alt="Twitter logo" />
                <img src="/images/ig.png" alt="Instagram logo" />
            </div>
            <img src="/images/logo.png" alt="Organo logo" />
            <p>Desenvolvido por Alura.</p> */}
        </footer>
    )
}

export default Footer