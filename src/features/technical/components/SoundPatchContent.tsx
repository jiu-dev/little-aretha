import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import logo from '@/assets/images/logo.png';

const drumKit = [
  { source: 'Kick', microphone: 'Shure Beta 52 + Beta 91', qty: 2 },
  { source: 'Snare Top', microphone: 'Shure SM 57', qty: 1 },
  { source: 'Snare Bottom', microphone: 'Shure SM 57', qty: 1 },
  { source: 'Tom Basse', microphone: 'Audix D4', qty: 1 },
  { source: 'Toms', microphone: 'Audix D2', qty: 2 },
  { source: 'Hi-Hat', microphone: 'Rode NT5', qty: 1 },
  { source: 'Cymbales', microphone: 'Neumann KM 184', qty: 2 },
];

const percussions = [
  { source: 'Congas', microphone: 'Shure SM 57', qty: 2 },
  { source: 'Bongos', microphone: 'Neumann KM 184', qty: 1 },
  { source: 'Ambiance', microphone: 'Rode NT5', qty: 1 },
];

const instruments = [
  { source: 'Clavier', microphone: 'DI Palmer (Stereo)', qty: 1 },
  { source: 'Guitare Ampli', microphone: 'Sennheiser e906', qty: 1 },
  { source: 'Guitare Acoustique', microphone: 'DI BSS (Mono)', qty: 1 },
  { source: 'Basse DI', microphone: 'DI BSS (Mono)', qty: 1 },
  { source: 'Basse Ampli', microphone: 'Audix D6', qty: 1 },
];

const brass = [
  { source: 'Saxophone Tenor', microphone: 'DPA 4099', qty: 1 },
  { source: 'Saxophone Alto', microphone: 'DPA 4099', qty: 1 },
  { source: 'Trombone', microphone: 'Pastille perso', qty: 1 },
];

const vocals = [
  { source: 'Flute', microphone: 'Shure SM 58', qty: 1 },
  { source: 'Choeurs', microphone: 'Shure SM 58', qty: 2 },
  { source: 'Lead Vocal', microphone: 'Shure Beta 58 (filaire)', qty: 1 },
];

interface SectionProps {
  title: string;
  icon: string;
  items: { source: string; microphone: string; qty: number }[];
}

interface SectionWithTranslationProps extends SectionProps {
  sourceLabel: string;
  microphoneLabel: string;
  qtyLabel: string;
}

const Section = ({ title, icon, items, sourceLabel, microphoneLabel, qtyLabel }: SectionWithTranslationProps) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-3 pb-2 border-b border-brand-gold/20">
      <span className="text-xl">{icon}</span>
      <h3 className="font-serif text-lg text-brand-cream">{title}</h3>
    </div>
    <div className="overflow-hidden">
      <div className="grid grid-cols-[1fr_1.5fr_0.6fr] gap-3 px-3 py-2 bg-brand-gold/5 text-xs uppercase tracking-wider text-brand-cream/40">
        <span>{sourceLabel}</span>
        <span>{microphoneLabel}</span>
        <span className="text-center">{qtyLabel}</span>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_1.5fr_0.6fr] gap-3 px-3 py-2.5 border-b border-brand-gold/5 last:border-0"
        >
          <span className="text-brand-cream text-sm">{item.source}</span>
          <span className="text-brand-gold-light text-sm">{item.microphone}</span>
          <span className="text-center text-brand-cream/60 text-sm">{item.qty}</span>
        </div>
      ))}
    </div>
  </div>
);

// Couleurs en hex pour html2canvas (évite les erreurs oklab de Tailwind v4)
const colors = {
  dark: '#1a1612',
  darker: '#0f0d0b',
  cream: '#f5f0e8',
  creamMuted: 'rgba(245, 240, 232, 0.5)',
  creamLight: 'rgba(245, 240, 232, 0.6)',
  creamVeryLight: 'rgba(245, 240, 232, 0.4)',
  gold: '#c9a227',
  goldLight: '#d4b84a',
  goldBorder: 'rgba(201, 162, 39, 0.2)',
  goldBorderLight: 'rgba(201, 162, 39, 0.1)',
  goldBg: 'rgba(201, 162, 39, 0.05)',
};

// Section pour le PDF avec styles inline
interface PdfSectionProps {
  title: string;
  icon: string;
  items: { source: string; microphone: string; qty: number }[];
}

const PdfSection = ({ title, icon, items }: PdfSectionProps) => (
  <div style={{ marginBottom: '24px' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px',
        paddingBottom: '8px',
        borderBottom: `1px solid ${colors.goldBorder}`,
      }}
    >
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '18px',
          color: colors.cream,
          margin: 0,
        }}
      >
        {title}
      </h3>
    </div>
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr 0.6fr',
          gap: '12px',
          padding: '8px 12px',
          backgroundColor: colors.goldBg,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: colors.creamVeryLight,
        }}
      >
        <span>Source</span>
        <span>Microphone</span>
        <span style={{ textAlign: 'center' }}>Qty</span>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr 0.6fr',
            gap: '12px',
            padding: '10px 12px',
            borderBottom:
              index < items.length - 1
                ? `1px solid ${colors.goldBorderLight}`
                : 'none',
          }}
        >
          <span style={{ color: colors.cream, fontSize: '14px' }}>
            {item.source}
          </span>
          <span style={{ color: colors.goldLight, fontSize: '14px' }}>
            {item.microphone}
          </span>
          <span
            style={{
              textAlign: 'center',
              color: colors.creamLight,
              fontSize: '14px',
            }}
          >
            {item.qty}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Composant interne pour le rendu PDF (caché) avec styles inline
interface HiddenPdfContentProps {
  onReady: (element: HTMLDivElement) => void;
}

const HiddenPdfContent = ({ onReady }: HiddenPdfContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      onReady(ref.current);
    }
  }, [onReady]);

  return (
    <div
      ref={ref}
      style={{
        width: '800px',
        backgroundColor: colors.dark,
        padding: '24px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <img
          src={logo}
          alt="Little Aretha"
          style={{
            height: '80px',
            width: 'auto',
            margin: '0 auto 16px',
            display: 'block',
          }}
          crossOrigin="anonymous"
        />
        <p
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: colors.gold,
            marginBottom: '8px',
          }}
        >
          Fiche Technique
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '24px',
            color: colors.cream,
            margin: 0,
          }}
        >
          Sound Patch
        </h2>
        <div
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: 'rgba(201, 162, 39, 0.3)',
            margin: '16px auto 0',
          }}
        />
      </div>

      {/* Sections */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
      >
        <div>
          <PdfSection title="Batterie" icon="🥁" items={drumKit} />
          <PdfSection title="Percussions" icon="🪘" items={percussions} />
        </div>
        <div>
          <PdfSection title="Instruments" icon="🎹" items={instruments} />
          <PdfSection title="Cuivres" icon="🎷" items={brass} />
          <PdfSection title="Voix" icon="🎤" items={vocals} />
        </div>
      </div>

      {/* Wedges */}
      <div
        style={{
          marginTop: '24px',
          textAlign: 'center',
          padding: '24px',
          backgroundColor: colors.goldBg,
          border: `1px solid ${colors.goldBorder}`,
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            color: colors.cream,
            marginBottom: '8px',
          }}
        >
          Retours de scène
        </h3>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '30px',
            color: colors.gold,
            margin: 0,
          }}
        >
          11/12
        </p>
        <p
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: colors.creamMuted,
            marginTop: '4px',
          }}
        >
          Wedges
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '24px',
          textAlign: 'center',
          fontSize: '14px',
          color: colors.creamMuted,
        }}
      >
        Contact : <span style={{ color: colors.gold }}>littlearethaband@gmail.com</span>
      </div>
    </div>
  );
};

// Hook pour générer le PDF depuis l'extérieur
export const useSoundPatchPdf = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const resolveRef = useRef<((element: HTMLDivElement) => void) | null>(null);

  const generatePdf = useCallback(async () => {
    setIsGenerating(true);
    setShouldRender(true);

    try {
      // Attendre que le composant soit rendu
      const content = await new Promise<HTMLDivElement>((resolve) => {
        resolveRef.current = resolve;
      });

      // Petit délai pour s'assurer que les styles sont appliqués
      await new Promise((resolve) => setTimeout(resolve, 50));

      const canvas = await html2canvas(content, {
        scale: 2,
        backgroundColor: '#1a1612',
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Remplir le fond du PDF avec la couleur sombre
      pdf.setFillColor(26, 22, 18); // #1a1612
      pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;

      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save('little-aretha-sound-patch.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setShouldRender(false);
      setIsGenerating(false);
    }
  }, []);

  const handleReady = useCallback((element: HTMLDivElement) => {
    if (resolveRef.current) {
      resolveRef.current(element);
      resolveRef.current = null;
    }
  }, []);

  // Portail pour rendre le contenu caché
  const HiddenPortal = shouldRender
    ? createPortal(
        <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <HiddenPdfContent onReady={handleReady} />
        </div>,
        document.body
      )
    : null;

  return { generatePdf, isGenerating, HiddenPortal };
};

// Composant pour l'affichage dans le dialog
export const SoundPatchContent = () => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const { generatePdf, isGenerating, HiddenPortal } = useSoundPatchPdf();

  const sectionLabels = {
    sourceLabel: t('technical.soundPatch.source'),
    microphoneLabel: t('technical.soundPatch.microphone'),
    qtyLabel: t('technical.soundPatch.qty'),
  };

  return (
    <div className="space-y-4">
      {HiddenPortal}
      <div
        ref={contentRef}
        className="bg-brand-dark p-6 border border-brand-gold/10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 border-2 border-brand-gold rounded-full flex items-center justify-center">
            <span className="font-serif text-2xl font-bold text-brand-gold">LA</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-2">
            {t('technical.soundPatch.subtitle')}
          </p>
          <h2 className="text-2xl font-serif text-brand-cream">{t('technical.soundPatch.title')}</h2>
          <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto mt-4" />
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <div>
            <Section title={t('technical.soundPatch.drums')} icon="🥁" items={drumKit} {...sectionLabels} />
            <Section title={t('technical.soundPatch.percussion')} icon="🪘" items={percussions} {...sectionLabels} />
          </div>
          <div>
            <Section title={t('technical.soundPatch.instruments')} icon="🎹" items={instruments} {...sectionLabels} />
            <Section title={t('technical.soundPatch.brass')} icon="🎷" items={brass} {...sectionLabels} />
            <Section title={t('technical.soundPatch.vocals')} icon="🎤" items={vocals} {...sectionLabels} />
          </div>
        </div>

        {/* Wedges */}
        <div className="mt-6 text-center p-6 bg-brand-gold/5 border border-brand-gold/20">
          <h3 className="font-serif text-lg text-brand-cream mb-2">
            {t('technical.soundPatch.wedges')}
          </h3>
          <p className="text-3xl font-serif text-brand-gold">{t('technical.soundPatch.wedgesValue')}</p>
          <p className="text-xs uppercase tracking-wider text-brand-cream/50 mt-1">
            {t('technical.soundPatch.wedgesLabel')}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-brand-cream/50">
          {t('technical.soundPatch.contact')} :{' '}
          <span className="text-brand-gold">littlearethaband@gmail.com</span>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={generatePdf}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-darker font-medium hover:bg-brand-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? t('technical.documents.generatingPdf') : t('technical.documents.downloadPdf')}
        </button>
      </div>
    </div>
  );
};
