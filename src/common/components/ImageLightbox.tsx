import { useState, useCallback, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
}

export const ImageLightbox: FC<ImageLightboxProps> = ({
  src,
  alt,
  children,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    },
    [closeLightbox]
  );

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className={`cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${className}`}
        aria-label={`Agrandir l'image: ${alt}`}
      >
        {children || (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        )}
      </button>

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Image agrandie: ${alt}`}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onKeyDown={handleKeyDown}
          >
            {/* Backdrop - cliquable pour fermer */}
            <div
              className="absolute inset-0 bg-black/90 cursor-pointer"
              style={{
                animation: 'fadeIn 200ms ease-out forwards',
              }}
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>

            {/* Image container */}
            <div
              className="relative z-10 max-w-[90vw] max-h-[90vh]"
              style={{
                animation: 'scaleIn 200ms ease-out forwards',
              }}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>,
          document.body
        )}

      {/* Inline styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};
