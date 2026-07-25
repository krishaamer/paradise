import { useI18n } from '@/lib/i18n/I18nContext';

const sampleSupporters = [
  { id: 'alex', picture: '/artists/alex-keller-fonseca-90.jpg', name: 'Alex-Keller', message: '' },
  { id: 'rene', picture: '/artists/rene-tavares-90.jpg', name: 'René', message: '' },
  { id: 'catita', picture: '/artists/catita-dias-90.jpg', name: 'Catita', message: '' },
  { id: 'leonel', picture: '/artists/leonel-varela-90.jpg', name: 'Leonel', message: '' },
  { id: 'nezo', picture: '/artists/nezo-90.jpg', name: 'Nezo', message: '' },
  { id: 'nelito', picture: '/artists/nelito-pereira-90.jpg', name: 'Nelito', message: '' },
  { id: 'miguel', picture: '/artists/miguel-angel-90.jpg', name: 'Miguel', message: '' },
  { id: 'julio', picture: '/artists/julio-90.jpg', name: 'Julio', message: '' }
];

export default function Supporters() {
  const { t } = useI18n();
  const daysUntilFinish = 21;
  const supporterCount = `${sampleSupporters.length} ${t('supporters.people')}`;
  return (
    <div id="listPledges" className="animated fadeIn">
      <div id="film-supported-by"><h3>{supporterCount}</h3></div>
      <ul className="thumbnails span8" id="listSupporters">
        {sampleSupporters.map((s) => (
          <li className="span1" key={s.id}>
            {s.message ? (
              <a href="#" className="tip-trigger tipFadeUp">
                <span>
                  <i className="icon-quote-left"></i> {s.message} <i className="icon-quote-right"></i>
                </span>
                <div className="thumbnail supporter" id={s.id}>
                  <img src={`${s.picture}`} className="img-rounded" style={{ width: 90 }} />
                  <p>{s.name}</p>
                </div>
              </a>
            ) : (
              <div className="thumbnail supporter" id={s.id}>
                <img src={`${s.picture}`} className="img-rounded" style={{ width: 90 }} />
                <p>{s.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div style={{ float: 'right', fontWeight: 600 }}>
        <span style={{ paddingRight: 5 }}>
          <i className="icon-map-marker"></i> São Tomé
        </span>
        <span>
          <i className="icon-time"></i> {daysUntilFinish} {t('supporters.daystogo')}
        </span>
      </div>
    </div>
  );
}

