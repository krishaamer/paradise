export default function Footer() {
  return (
    <div className="container">
      <div className="row" id="row-footer" style={{ height: '40px' }}>
        <div id="footer" className="span12">
          <div className="container">
            <div className="pull-left">
              <p className="muted credit">
                Interactive documentary directed by{' '}
                <a href="http://krishaamer.com">Kris Haamer</a>. All rights held by respective artists.
                2011-2014.
              </p>
            </div>
            <div id="tracker" className="pull-right">
              <a href="https://mixpanel.com/f/partner">
                <img src="//cdn.mxpnl.com/site_media/images/partner/badge_blue.png" alt="Mobile Analytics" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

