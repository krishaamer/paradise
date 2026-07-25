import MapLeaflet from '@/components/MapLeaflet';
import { useI18n } from '@/lib/i18n/I18nContext';
import UserInfo from '@/components/UserInfo';

export default function Ipad() {
  const { t } = useI18n();
  return (
    <div className="container">
      <div className="row" id="row-ipad">
        <div className="span12 ipad" id="ipad">
          <div className="row">
            <div className="span1"></div>
            <div className="span10">
              <div className="launch-promise" id="launch-promise">{t('ipad.amazinglaunching')}</div>
            </div>
            <div className="span1"></div>
          </div>
          <div className="row">
            <div className="span7">
              <div className="map_tilted" id="map_tilted">
                <MapLeaflet />
              </div>
            </div>
            <div className="span4">
              <div id="sales-argument">
                <ul className="sales-argument unstyled">
                  <li>
                    <strong>{t('ipad.appfeatures')}</strong>
                  </li>
                  <li>{t('ipad.hd72min')}</li>
                  <li>{t('ipad.journeymap')}</li>
                  <li>
                    <a href="#art">{t('ipad.hdpaintings')}</a>
                  </li>
                </ul>
                <UserInfo />
              </div>
            </div>
            <div className="span1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
