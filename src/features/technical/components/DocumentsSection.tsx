import { useTranslation } from 'react-i18next';
import { FileText, Download, Lightbulb, Music, Users, Eye } from 'lucide-react';
import { useDialog } from '@core/ui-overlay';
import { AppSizes } from '@core/constants';
import { SoundPatchContent, useSoundPatchPdf } from './SoundPatchContent';
import planDeScene from '@/assets/pdf/plan-de-scene.pdf';
import planDeFeu from '@/assets/pdf/plan-de-feu.pdf';

interface Document {
  icon: typeof Users;
  titleKey: string;
  descriptionKey: string;
  file?: string;
  fileName?: string;
  isInteractive?: boolean;
}

const documents: Document[] = [
  {
    icon: Users,
    titleKey: 'technical.documents.stagePlan.title',
    descriptionKey: 'technical.documents.stagePlan.description',
    file: planDeScene,
    fileName: 'plan-de-scene.pdf',
  },
  {
    icon: Lightbulb,
    titleKey: 'technical.documents.lightingPlan.title',
    descriptionKey: 'technical.documents.lightingPlan.description',
    file: planDeFeu,
    fileName: 'plan-de-feu.pdf',
  },
  {
    icon: Music,
    titleKey: 'technical.documents.soundPatch.title',
    descriptionKey: 'technical.documents.soundPatch.description',
    isInteractive: true,
  },
];

export const DocumentsSection = () => {
  const { t } = useTranslation();
  const { openDialog } = useDialog();
  const { generatePdf, isGenerating, HiddenPortal } = useSoundPatchPdf();

  const handleOpenSoundPatch = () => {
    openDialog(
      {
        title: 'Sound Patch',
        description: 'Configuration audio pour le spectacle Little Aretha',
        size: AppSizes['2xl'],
      },
      <SoundPatchContent />
    );
  };

  return (
    <section className="py-32 bg-brand-darker">
      {HiddenPortal}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('technical.documents.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('technical.documents.title1')} <span className="text-brand-gold">{t('technical.documents.title2')}</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="text-brand-cream/50 max-w-2xl mx-auto">
            {t('technical.documents.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-brand-dark border border-brand-gold/10 p-8 flex flex-col hover:border-brand-gold/30 transition-colors duration-500"
            >
              <div className="flex items-center justify-center w-16 h-16 border border-brand-gold/30 mb-6 mx-auto">
                <doc.icon className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="text-xl font-serif text-brand-cream mb-4 text-center">
                {t(doc.titleKey)}
              </h3>

              <p className="text-brand-cream/50 text-sm leading-relaxed text-center mb-8 flex-1">
                {t(doc.descriptionKey)}
              </p>

              <div className="flex flex-col gap-3">
                {doc.isInteractive ? (
                  <>
                    <button
                      onClick={handleOpenSoundPatch}
                      className="flex items-center justify-center gap-2 px-6 py-3 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-colors text-sm uppercase tracking-[0.1em]"
                    >
                      <Eye size={16} />
                      {t('technical.documents.view')}
                    </button>
                    <button
                      onClick={generatePdf}
                      disabled={isGenerating}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-darker transition-colors text-sm uppercase tracking-[0.1em] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Download size={16} />
                      {isGenerating ? t('technical.documents.generating') : t('technical.documents.download')}
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-colors text-sm uppercase tracking-[0.1em]"
                    >
                      <FileText size={16} />
                      {t('technical.documents.view')}
                    </a>
                    <a
                      href={doc.file}
                      download={doc.fileName}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-darker transition-colors text-sm uppercase tracking-[0.1em]"
                    >
                      <Download size={16} />
                      {t('technical.documents.download')}
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
