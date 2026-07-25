import { useI18n } from '@/lib/i18n/I18nContext';

export default function ArtGallery() {
  const { t } = useI18n();
  return (
    <div className="container">
      <div id="art-gallery">
        <div className="row" id="row-expert">
          <div className="span12 expert" style={{ background: '#0c0d0b', height: '500px' }}>
            <h1 className="text-left">{t('artgallery.artguru')}</h1>
          </div>
        </div>
        <div className="row" id="row-artwork">
          <div className="span12 art-scroller carousel slide" id="art" data-interval="5000" data-ride="carousel">
            <div className="carousel-inner">
              <div className="active item"><img src="/gallery/page-1.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-2.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-3.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-4.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-5.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-6.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-7.jpg" alt="Enter the Storyworld" /></div>
              <div className="item"><img src="/gallery/page-8.jpg" alt="Enter the Storyworld" /></div>
            </div>
            <a className="carousel-control left" href="#art" data-slide="prev">&lsaquo;</a>
            <a className="carousel-control right" href="#art" data-slide="next">&rsaquo;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
