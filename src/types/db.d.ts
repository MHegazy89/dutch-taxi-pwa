export type DomainType =
  | 'gordelplicht'
  | 'bcdt'
  | 'atbv'
  | 'paman'
  | 'transport'
  | 'gedrag'
  | 'casus';

export type ExamFrequency = 'high' | 'medium' | 'low';
export type GrammarMarkerType = 'WH' | 'Modal' | 'Negation' | 'Condition';
export type SentenceRole = 'Actor' | 'Obligation' | 'Condition' | 'Target' | 'Other';

export interface RoleAnnotation {
  text: string;
  role: SentenceRole;
  tip?: string;
}

export interface Vocab {
  id: number;
  dutch_term: string;
  root_decomposition: string | null; // e.g. "Arbeids|tijden|besluit"
  literal_english: string | null;
  legal_meaning: string | null;
  exam_frequency: ExamFrequency;
}

export interface Grammar {
  id: number;
  marker_type: GrammarMarkerType;
  dutch_word: string;
  impact: string | null;
}

export interface PracticeQ {
  id: number;
  dutch_stem: string;
  english_breakdown: string | null;
  correct_option: number;
  explanation: string | null;
  role_annotations: string | null; // JSON string of RoleAnnotation[]
  domain: DomainType;
}

export interface PracticeOption {
  id: number;
  q_id: number;
  option_text: string;
  is_correct: number | boolean;
  trap_annotation: string | null;
}

export interface PracticeQWithOptions extends PracticeQ {
  options: PracticeOption[];
}

export interface Flashcard {
  id: number;
  front_text: string;
  back_text: string;
  audio_path: string | null;
  vocab_refs: string | null; // JSON string of number[]
  last_review: string | null; // ISO-8601
  ease: number; // default 2.5
  interval: number; // days, default 1
  next_due: string | null; // ISO-8601
}

export interface Scenario {
  id: number;
  title: string;
  description: string | null;
  difficulty: 'easy' | 'medium' | 'hard';
  steps: string; // JSON
}

export interface Theme {
  id: number;
  name: string;
  description: string | null;
}

export interface VideoChunk {
  id: number;
  video_file: string;
  start_ms: number;
  end_ms: number;
  transcript: string;
  vocab_ids: string | null;
  created_at: string;
}

export interface CurriculumSubsection {
  id: string;
  heading: string;
  headingEn: string;
  headingAr?: string;
  content: string;
  contentEn: string;
  contentAr?: string;
  keyPoints: string[];
  keyPointsEn: string[];
  keyPointsAr?: string[];
  examTip?: string;
  examTipEn?: string;
  examTipAr?: string;
}

export interface CurriculumSection {
  id: string;
  eindtermNumber: number;
  title: string;
  titleEn: string;
  titleAr?: string;
  subtitle: string;
  subtitleEn: string;
  subtitleAr?: string;
  icon: string;
  domain: DomainType | null;
  pageRange: string;
  subsections: CurriculumSubsection[];
}

