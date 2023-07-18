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
                    <div className="col-md-6"></div>
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