import { useI18n } from '@/lib/i18n/I18nContext';

export default function Movie() {
  const { t } = useI18n();
  return (
    <div className="container">
      <div id="movie" style={{ background: '#0c0d0b' }}>
        <div className="row" id="row-movie">
          <div className="span12 movie" style={{ height: '170px' }}>
            <h1 className="animated fadeInLeft" id="title-movie">{t('movie.themovie')}</h1>
          </div>
        </div>
        <div className="row" id="row-storyline" style={{ height: '220px' }}>
          <div className="container storyline">
            <div className="span2"></div>
            <div className="span8">
              <h6>
                {t('movie.synopsis')}
                <br />
                <br />
                <span style={{ float: 'right' }}>– Kris Haamer & Alex-Keller Fonseca</span>
              </h6>
            </div>
            <div className="span2"></div>
          </div>
        </div>
        <div className="row" id="row-thumbnails">
          <div className="span12 thumbs">
            <ul className="thumbnails span12">
              <li className="span1"></li>
              <li className="span6">
                <div className="thumbnail">
                  <img
                    src="/gallery/alex-keller-fonseca-still-1.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-big-view"
                  />
                  <h3 id="movie-still-big-header">Alex-Keller Fonseca</h3>
                  <p id="movie-still-big-desc">{t('movie.atmamaafrica')}</p>
                </div>
              </li>
              <li className="span2">
                <div className="thumbnail">
                  <img
                    src="/gallery/alex-keller-fonseca-still-1.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-1"
                    className="movie-still thumb-selected"
                  />
                </div>
              </li>
              <li className="span2">
                <div className="thumbnail" id="movie-still-3">
                  <img
                    src="/gallery/alex-keller-fonseca-still-3.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-2"
                    className="movie-still"
                  />
                </div>
              </li>
              <li className="span2">
                <div className="thumbnail" id="movie-still-4">
                  <img
                    src="/gallery/alex-keller-fonseca-still-4.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-3"
                    className="movie-still"
                  />
                </div>
              </li>
              <li className="span2">
                <div className="thumbnail" id="movie-still-5">
                  <img
                    src="/gallery/alex-keller-fonseca-still-5.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-4"
                    className="movie-still"
                  />
                </div>
              </li>
              <li className="span2">
                <div className="thumbnail" id="movie-still-6">
                  <img
                    src="/gallery/alex-keller-fonseca-still-6.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-5"
                    className="movie-still"
                  />
                </div>
              </li>
              <li className="span2">
                <div className="thumbnail" id="movie-still-7">
                  <img
                    src="/gallery/alex-keller-fonseca-still-7.jpg"
                    alt="Alex-Keller Fonseca"
                    id="movie-still-6"
                    className="movie-still"
                  />
                </div>
              </li>
              <li className="span4">
                <div id="wantmore" dangerouslySetInnerHTML={{ __html: t('movie.wanttoseemore').replace("href='#hero'", "href='#hero'") }} />
              </li>
              <li className="span1"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
