'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CURRICULUM_SECTIONS,
  GLOSSARY_TERMS,
} from '@/lib/curriculumContent';
import { CurriculumSection } from '@/types/db';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DomainBadge } from '@/components/DomainBadge';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { gateContent, FREE_LIMITS } from '@/lib/accessControl';
import { PaywallCard } from '@/components/PaywallCard';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Search,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  FileText,
  Scale,
  Compass,
  Shield,
  MessageSquare,
  Users,
  Flame,
  FileCheck,
  MapPin,
  Bookmark,
  Check
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  FileText,
  Scale,
  Compass,
  Shield,
  AlertTriangle,
  MessageSquare,
  Users,
  Flame,
  FileCheck,
  MapPin,
};

const READ_STORAGE_KEY = 'cbr_curriculum_read_sections';

export default function CurriculumPage() {
  const { language, isRtl } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>('eindterm-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [readSections, setReadSections] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'glossary'>('curriculum');

  // Load read progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(READ_STORAGE_KEY);
      if (saved) {
        setReadSections(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load read sections:', e);
    }
  }, []);

  const toggleRead = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (readSections.includes(id)) {
      updated = readSections.filter((s) => s !== id);
    } else {
      updated = [...readSections, id];
    }
    setReadSections(updated);
    try {
      localStorage.setItem(READ_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save read sections:', e);
    }
  };

  const toggleAccordion = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  // Filter sections by search query
  const filteredSections = CURRICULUM_SECTIONS.filter((section) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchTitle =
      section.title.toLowerCase().includes(query) ||
      section.titleEn.toLowerCase().includes(query) ||
      (section.titleAr && section.titleAr.toLowerCase().includes(query)) ||
      section.subtitle.toLowerCase().includes(query);

    const matchSubsections = section.subsections.some(
      (sub) =>
        sub.heading.toLowerCase().includes(query) ||
        sub.headingEn.toLowerCase().includes(query) ||
        sub.content.toLowerCase().includes(query) ||
        sub.contentEn.toLowerCase().includes(query) ||
        sub.keyPoints.some((kp) => kp.toLowerCase().includes(query))
    );

    return matchTitle || matchSubsections;
  });

  // Filter glossary by search
  const filteredGlossary = GLOSSARY_TERMS.filter((g) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      g.term.toLowerCase().includes(q) ||
      g.termEn.toLowerCase().includes(q) ||
      g.definition.toLowerCase().includes(q) ||
      g.definitionEn.toLowerCase().includes(q)
    );
  });

  // Gating
  const { visible: visibleSections, locked: lockedSections, isGated } =
    gateContent(filteredSections, FREE_LIMITS.curriculumSections);

  const progressPercent = Math.round(
    (readSections.length / CURRICULUM_SECTIONS.length) * 100
  );

  return (
    <div className={`space-y-6 ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-950/60 via-slate-900 to-amber-950/30 border border-sky-500/20 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
            <GraduationCap className="w-4 h-4 text-sky-400" />
            <span>
              {language === 'ar'
                ? 'المنهاج التعليمي المعتمد'
                : language === 'en'
                ? 'Official Curriculum'
                : 'CBR Basisopleiding'}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-400">Van A tot Z (CDT)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {language === 'ar'
              ? 'المنهاج الكامل لامتحان تاكسي CBR'
              : language === 'en'
              ? 'Full CBR Taxi Theory Curriculum'
              : 'Compleet CBR Taxi Theorie Curriculum'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {language === 'ar'
              ? 'شرح شامل ومكثف لجميع مخرجات التعلم الـ 10 (Eindtermen) مع التركيز على أهم فخاخ الامتحان والمصطلحات المعتمدة.'
              : language === 'en'
              ? 'Concise, structured summaries for all 10 CBR exam Eindtermen with key takeaways, exam traps, and bilingual explanations.'
              : 'Kernachtige samenvatting van alle 10 CBR TVT-eindtermen, direct gekoppeld aan examenvallen, wetgeving en praktijksituaties.'}
          </p>

          {/* Progress Bar */}
          <div className="pt-2 max-w-md space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>
                {language === 'ar'
                  ? `التقدم: ${readSections.length} من ${CURRICULUM_SECTIONS.length} فصول`
                  : language === 'en'
                  ? `Progress: ${readSections.length} of ${CURRICULUM_SECTIONS.length} modules completed`
                  : `Voortgang: ${readSections.length} van ${CURRICULUM_SECTIONS.length} onderwerpen gelezen`}
              </span>
              <span className="text-amber-400 font-bold">{progressPercent}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-sky-500 via-amber-500 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Navigation Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-white/10 rounded-2xl w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'curriculum'
                ? 'bg-[#0b6687] text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {language === 'ar' ? 'الفصول الـ 10' : language === 'en' ? '10 Eindtermen' : '10 Eindtermen'}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'glossary'
                ? 'bg-[#0b6687] text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>
              {language === 'ar' ? 'قاموس المفاهيم' : language === 'en' ? 'Glossary' : 'Begrippenlijst'}
            </span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'ar'
                ? 'ابحث في مواضيع المنهاج...'
                : language === 'en'
                ? 'Search curriculum & topics...'
                : 'Zoek in theorie & begrippen...'
            }
            className="w-full bg-slate-900/80 border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'curriculum' ? (
        <div className="space-y-4">
          {/* Visible Eindtermen */}
          {visibleSections.map((section) => {
            const isExpanded = expandedSection === section.id;
            const isRead = readSections.includes(section.id);
            const IconComponent = ICON_MAP[section.icon] || BookOpen;

            const displayTitle =
              language === 'ar' && section.titleAr
                ? section.titleAr
                : language === 'en'
                ? section.titleEn
                : section.title;

            const displaySubtitle =
              language === 'ar' && section.subtitleAr
                ? section.subtitleAr
                : language === 'en'
                ? section.subtitleEn
                : section.subtitle;

            return (
              <Card
                key={section.id}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isExpanded
                    ? 'bg-slate-900/90 border-sky-500/40 shadow-xl'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header / Click to Expand */}
                <div
                  onClick={() => toggleAccordion(section.id)}
                  className="p-5 sm:p-6 cursor-pointer select-none flex items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    {/* Eindterm Number & Icon Badge */}
                    <div className="relative shrink-0">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0b6687] to-[#0082d5] flex items-center justify-center text-white shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] flex items-center justify-center shadow-sm">
                        {section.eindtermNumber}
                      </span>
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                          Eindterm {section.eindtermNumber}
                        </span>
                        <span className="text-slate-600 text-xs">•</span>
                        <span className="text-[11px] text-slate-400">{section.pageRange}</span>
                        {section.domain && (
                          <div className="scale-90 origin-left">
                            <DomainBadge domain={section.domain} />
                          </div>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-white truncate">
                        {displayTitle}
                      </h3>

                      <p className="text-xs text-slate-400 truncate max-w-xl">
                        {displaySubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Chevron */}
                  <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                    <button
                      onClick={(e) => toggleRead(section.id, e)}
                      title={isRead ? 'Gelezen' : 'Markeer als gelezen'}
                      className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                        isRead
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : 'bg-slate-800/80 text-slate-400 border-white/10 hover:text-white'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">
                        {isRead
                          ? language === 'ar'
                            ? 'تمت قراءته'
                            : 'Gelezen'
                          : language === 'ar'
                          ? 'تم الحفظ'
                          : 'Markeer gelezen'}
                      </span>
                    </button>

                    <div className="p-2 rounded-xl bg-white/5 text-slate-400">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="border-t border-white/10 p-5 sm:p-7 space-y-6 bg-slate-950/40">
                    {section.subsections.map((sub) => {
                      const displayHeading =
                        language === 'ar' && sub.headingAr
                          ? sub.headingAr
                          : language === 'en'
                          ? sub.headingEn
                          : sub.heading;

                      const displayContent =
                        language === 'ar' && sub.contentAr
                          ? sub.contentAr
                          : language === 'en'
                          ? sub.contentEn
                          : sub.content;

                      const keyPointsList =
                        language === 'ar' && sub.keyPointsAr
                          ? sub.keyPointsAr
                          : language === 'en'
                          ? sub.keyPointsEn
                          : sub.keyPoints;

                      const displayExamTip =
                        language === 'ar' && sub.examTipAr
                          ? sub.examTipAr
                          : language === 'en'
                          ? sub.examTipEn
                          : sub.examTip;

                      return (
                        <div
                          key={sub.id}
                          className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3.5 shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-400" />
                            <h4 className="text-sm sm:text-base font-bold text-white">
                              {displayHeading}
                            </h4>
                          </div>

                          {/* Primary Explanation */}
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {displayContent}
                          </p>

                          {/* Secondary Language Helper if non-Dutch */}
                          {language !== 'nl' && (
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 italic">
                              <span className="font-bold text-slate-300 not-italic mr-1">
                                🇳🇱 Origineel Nederlands:
                              </span>
                              {sub.content}
                            </div>
                          )}

                          {/* Key Takeaways / Checklist */}
                          {keyPointsList && keyPointsList.length > 0 && (
                            <div className="space-y-1.5 pt-1">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                {language === 'ar'
                                  ? 'أهم النقاط الواجب حفظها:'
                                  : language === 'en'
                                  ? 'Core Exam Takeaways:'
                                  : 'Belangrijkste Examenpunten:'}
                              </span>
                              <div className="grid grid-cols-1 gap-1.5">
                                {keyPointsList.map((kp, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 text-xs text-slate-200"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                                    <span>{kp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Exam Trap / Alert Callout */}
                          {displayExamTip && (
                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <div className="space-y-0.5">
                                <span className="font-bold block text-amber-400">
                                  {language === 'ar'
                                    ? 'تنبيه فخاخ امتحان CBR:'
                                    : language === 'en'
                                    ? 'CBR Exam Alert / Trap:'
                                    : 'CBR Examentip & Valkuil:'}
                                </span>
                                <span>{displayExamTip}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Bottom Link to Practice questions */}
                    {section.domain && (
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 to-slate-900 border border-sky-500/20">
                        <div className="text-xs text-slate-300 text-center sm:text-left">
                          <span className="font-bold text-white block">
                            {language === 'ar'
                              ? 'اختبر فهمك لهذا القسم الآن'
                              : language === 'en'
                              ? 'Ready to test this topic?'
                              : 'Klaar om dit onderwerp te oefenen?'}
                          </span>
                          <span className="text-slate-400">
                            {language === 'ar'
                              ? 'توجد أسئلة تدريب وأسئلة سحب مباشرة حول هذه القوانين.'
                              : 'Practice multiple-choice & drag-and-drop questions.'}
                          </span>
                        </div>

                        <Link href={`/practice?domain=${section.domain}`}>
                          <Button className="bg-[#0b6687] hover:bg-[#0082d5] text-white font-bold text-xs h-9 px-4 rounded-xl shadow-md gap-1.5">
                            <span>
                              {language === 'ar'
                                ? 'ابدأ التدريب'
                                : language === 'en'
                                ? 'Practice Questions'
                                : 'Oefen Vragen'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            );
          })}

          {/* Locked Sections Paywall */}
          {isGated && lockedSections.length > 0 && (
            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {language === 'ar'
                    ? `+${lockedSections.length} فصول إضافية مقفلة`
                    : `+${lockedSections.length} Meer Eindtermen Vergrendeld`}
                </span>
                <p className="text-xs text-slate-400">
                  {language === 'ar'
                    ? 'افتح كامل المنهاج وجميع أسئلة التدريب والامتحانات بالترقية إلى الباقة الكاملة.'
                    : 'Ontgrendel alle 10 CBR eindtermen en 100+ theorievragen met de Premium Pas.'}
                </p>
              </div>

              <PaywallCard
                lockedCount={lockedSections.length}
                contentType="curriculum"
              />
            </div>
          )}
        </div>
      ) : (
        /* Glossary / Moeilijke Woorden Tab */
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-400" />
              <span>
                {language === 'ar'
                  ? 'المصطلحات المهنية والكلمات الصعبة (Vaktaal)'
                  : language === 'en'
                  ? 'Professional Terminology & Exam Keywords'
                  : 'Moeilijke Woorden & Vaktaal Taxivervoer'}
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'ar'
                ? 'مأخوذة مباشرة من معجم كتاب الأساسيات الرسمي (الصفحات 96-97).'
                : 'Direct ontleend aan de woordenlijst van het officiële basisopleidingsboek (p. 96-97).'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredGlossary.map((item, i) => (
              <Card
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/30 transition-all space-y-2"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {item.term}
                  </h3>
                  <span className="text-[11px] text-sky-400 italic">
                    {item.termEn}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.definition}
                </p>

                {language !== 'nl' && (
                  <p className="text-[11px] text-slate-400 italic border-t border-white/5 pt-1.5">
                    🇬🇧 {item.definitionEn}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
