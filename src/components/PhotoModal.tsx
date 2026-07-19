import { useEffect } from 'react';

interface PhotoModalProps {
  photoUri: string;
  onClose: () => void;
}

export default function PhotoModal({ photoUri, onClose }: PhotoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={photoUri}
          alt="Full size"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
          }}
        />

        {/* Keyboard Hint */}
        <p className="text-white text-center text-sm mt-4 text-gray-400">
          Press ESC to close
        </p>
      </div>
    </div>
  );
}
