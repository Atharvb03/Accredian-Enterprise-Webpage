export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface Stat {
  value: string;
  label: string;
}

export interface DomainExpertise {
  title: string;
  icon: string;
}

export interface CourseSegment {
  title: string;
  description: string;
  image: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  company: string;
  logo: string;
  text: string;
}
