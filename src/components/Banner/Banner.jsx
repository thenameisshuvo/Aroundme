import { useMemo, useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CampaignIcon from '@mui/icons-material/Campaign';
import './Banner.css';

export default function Banner({
  bannerTitle = '',
  bannerDescription = '',
  bannerStyle = {},
  bannerPlace = 'top',
  bannerButtonText = '',
  bannerButtonClass = '',
  bannerButtonUrl = '#',
  bannerButtonOnClick = null,
  bannerButtonStyle = {}
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seenBanner = window.localStorage.getItem('seen_banner');
    setShow(!seenBanner);
  }, []);

  const bannerPosition = useMemo(() => {
    return bannerPlace === 'bottom' ? {
      bottom: 0,
      position: 'fixed',
      width: '100%'
    } : {};
  }, [bannerPlace]);

  const handleDismiss = () => {
    window.localStorage.setItem('seen_banner', 'true');
    setShow(false);
  };

  const mergedStyles = { ...bannerPosition, ...bannerStyle };

  if (!show) return null;

  return (
    <div
      style={mergedStyles}
      className="banner-wrapper bg-indigo-600"
    >
      <div className="max-w-7xl mx-auto py-7 px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0 flex flex-wrap items-center gap-3">
            <span className="flex p-2 rounded-lg bg-indigo-800 shadow-md">
              <CampaignIcon
                fontSize="large"
                className="h-8 w-8 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-sm sm:text-base md:text-lg text-white leading-snug">
              <span className="font-bold block sm:inline">{bannerTitle}</span>
              <span className="block sm:inline"> {bannerDescription}</span>
            </p>
          </div>

          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              target="_blank"
              rel="noreferrer"
              onClick={bannerButtonOnClick}
              href={bannerButtonUrl}
              style={bannerButtonStyle}
              className={`flex items-center justify-center py-2 px-4 border border-transparent banner-button rounded-md text-md font-medium ${bannerButtonClass}`}
            >
              {bannerButtonText}
            </a>
          </div>

          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              onClick={handleDismiss}
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <CloseIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
