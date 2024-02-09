import './FooterStyle.css'

function Footer() {
    const iframeStyle = {
        height: "100%",
        width: "100%",
        border: "0",
    };
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="">
                            <ul className='ul_footer'>
                                <li>
                                    <p>Director: <a href="mailto:director.terceraquillota@gmail.com">director.terceraquillota@gmail.com</a></p>
                                </li>
                                <li>
                                    <p>Capitán:<a href="mailto:3.capitan.qta@gmail.com"> 3.capitan.qta@gmail.com</a></p>
                                </li>
                                <li>
                                    <p>Dirección: <span>Blanco 47, Quillota.</span></p>
                                </li>
                                <li>
                                    <p>Número Teléfono: <a href="">+332 312312</a></p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="mapa-footer">
                            <div style={{overflow:'hidden',resize:'none',maxwidth:'100%',width:'100%',height:'400px'}}>
                                <div id="embed-ded-map-canvas" style={{height:'100%',width:'100%',maxwidth:'100%'}}>
                                    <iframe style={{height:'100%',width:'100%',border:'0'}} src="https://www.google.com/maps/embed/v1/place?q=Tercera+Compañía+de+Bomberos+-+Blanco+Encalada,+Quillota,+Chile&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                                </div>
                                    <a className="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="authmaps-data">premium bootstrap themes</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;