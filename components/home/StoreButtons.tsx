import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────

const GOOGLE_PLAY_URL = "https://play.google.com/store";
const APP_STORE_URL = "https://www.apple.com/app-store/";

const googlePlayImage = "/google-play-button.png";
const appleStoreImage = "/apple-store-button.png";

const StoreButtons = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Eaglespress on Google Play"
        className="inline-flex transition-transform duration-200 hover:scale-[1.04] active:scale-95"
      >
        <Image
          src={googlePlayImage}
          alt="Get it on Google Play"
          width={260}
          height={78}
          className={
            compact
              ? "h-[34px] w-auto object-contain"
              : "h-[44px] w-auto object-contain"
          }
        />
      </a>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Eaglespress on the Apple App Store"
        className="inline-flex transition-transform duration-200 hover:scale-[1.04] active:scale-95"
      >
        <Image
          src={appleStoreImage}
          alt="Download on the App Store"
          width={260}
          height={78}
          className={
            compact
              ? "h-[34px] w-auto object-contain"
              : "h-[44px] w-auto object-contain"
          }
        />
      </a>
    </div>
  );
};

export default StoreButtons;
