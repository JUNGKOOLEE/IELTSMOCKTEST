Slider = React.createClass({

    render() {
        var margintop30px={marginTop: 30};
        var margin30px={margin: "30 0 0 10"};
        var videobgcolor={backgroundColor: "rgba(0,0,0,0.20)"};
        return (
            <section id="slider" className="force-full-screen full-screen">

                <div className="force-full-screen full-screen dark section nopadding nomargin noborder ohidden">

                    <div className="container clearfix">
                        <div className="slider-caption slider-caption-center">
                            <h2 data-animate="fadeInUp">Welcome to IELTSMOCTEST.COM</h2>
                            <p data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on our Canvas.</p>
                            <a data-animate="fadeInUp" data-delay="400" href="#" className="button button-border button-light button-rounded button-large noleftmargin nobottommargin" style={margintop30px}>Start Browsing</a>
                            <a data-animate="fadeInUp" data-delay="600" href="#" className="button button-3d button-teal button-large nobottommargin" style={margin30px}>Buy Now</a>
                        </div>
                    </div>
                    <div className="video-wrap">
                        <video poster="/images/videos/writing.jpg" preload="auto" loop="true" autoPlay="true" muted="true">
                            <source src='/images/videos/writing.mp4' type='video/mp4' />
                            <source src='/images/videos/writing.webm' type='video/webm' />
                        </video>
                        <div className="video-overlay" style={videobgcolor}></div>
                    </div>

                </div>
            </section>
        );
    }
});