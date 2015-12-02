Slider = React.createClass({

    render() {
        return (
            <section id="slider" class="force-full-screen full-screen">

                <div class="force-full-screen full-screen dark section nopadding nomargin noborder ohidden">

                    <div class="container clearfix">
                        <div class="slider-caption slider-caption-center">
                            <h2 data-animate="fadeInUp">Welcome to Canvas</h2>
                            <p data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on our Canvas.</p>
                            <a data-animate="fadeInUp" data-delay="400" href="#" class="button button-border button-light button-rounded button-large noleftmargin nobottommargin" style="margin-top: 30px;">Start Browsing</a>
                            <a data-animate="fadeInUp" data-delay="600" href="#" class="button button-3d button-teal button-large nobottommargin" style="margin: 30px 0 0 10px;">Buy Now</a>
                        </div>
                    </div>
                    <div class="video-wrap">
                        <video poster="/images/videos/writing.jpg" preload="auto" loop autoplay muted>
                            <source src='/images/videos/writing.mp4' type='video/mp4' />
                            <source src='/images/videos/writing.webm' type='video/webm' />
                        </video>
                        <div class="video-overlay" style="background-color: rgba(0,0,0,0.45);"></div>
                    </div>

                </div>
            </section>
        );
    }
});