import { useI18n } from '@/lib/i18n/I18nContext';

export default function Featured() {
  const { t } = useI18n();
  return (
    <div className="container">
      <div className="flipper front" id="flipboard">
        <div className="row" id="row-featured">
          <div className="span12 featured" id="featured-1">
            <div>
              <h1 className="animated fadeInLeft" id="title-featured-artist">{t('navbar.featuredartists')}</h1>
            </div>
          </div>
        </div>
        <div className="row" id="row-artists" style={{ background: '#1a1b17' }}>
          <div className="container" style={{ paddingTop: '40px' }}>
            <div className="span1"></div>
            <div className="span5 artists" id="artists-1">
              <div className="media animated fadeInLeft artist" id="profile-alex-keller-fonseca" title="Alex-Keller Fonseca">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/alex-keller-fonseca-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Alex-Keller Fonseca</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.alexquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInLeft artist" id="profile-dio-lima" title="Dio Lima">
                <div className="pull-left">
                  <img className="media-object img-rounded blue-a" src="/artists/dio-lima-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Dio Lima</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.dioquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInLeft artist" id="profile-olie-ribeiro" title="Olie Ribeiro">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/olie-ribeiro-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Olie Ribeiro</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.oliequote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInLeft artist" id="profile-catita-dias" title="Catita Dias">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/catita-dias-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Catita Dias</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.catitaquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInLeft artist" id="profile-julio" title="Julio">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/julio-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Julio</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.julioquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInLeft artist" id="profile-guilherme-carvalho" title="Guilherme Carvalho">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/guilherme-carvalho-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Guilherme Carvalho</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.guilhermequote')} <i className="icon-quote-right"></i>
                </p>
              </div>
            </div>
            <div className="span5 artists" id="artists-2">
              <div className="media animated fadeInRight artist" id="profile-rene-tavares" title="René Tavares">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/rene-tavares-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">René Tavares</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.renequote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInRight artist" id="profile-olavo-amado" title="Olavo Amado">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/olavo-amado-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Olavo Amado</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.olavoquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInRight artist" id="profile-miguel-angel" title="Miguel Angel">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/miguel-angel-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Miguel Angel</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.miguelquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInRight artist" id="profile-leonel-varela" title="Leonel Varela">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/leonel-varela-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Leonel Varela</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.leonelquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInRight artist" id="profile-nelito-pereira" title="Nelito Pereira">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/nelito-pereira-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Nelito Pereira</h4>
                  Painter
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.nelitoquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInRight artist" id="profile-jesus-quaresma" title="Jesus Quaresma">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/jesus-quaresma-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Jesus Quaresma</h4>
                  <div className="artist-subtitle">Painter</div>
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.jesusquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
              <div className="media animated fadeInLeft artist" id="profile-nezo" title="Nezo">
                <div className="pull-left">
                  <img className="media-object img-rounded" src="/artists/nezo-90.jpg" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Nezo</h4>
                  <div className="artist-subtitle">Painter &amp; Musician</div>
                </div>
                <p>
                  <i className="icon-quote-left"></i> {t('featured.nezoquote')} <i className="icon-quote-right"></i>
                </p>
              </div>
            </div>
            <div className="span1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
