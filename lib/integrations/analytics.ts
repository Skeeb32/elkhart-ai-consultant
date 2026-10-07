export type AnalyticsEvent='audit_completed'|'content_draft_created'|'consultation_brief_prepared';
export interface AnalyticsSink{track(event:AnalyticsEvent):void}
export const disabledAnalytics:AnalyticsSink={track(){/* Deliberately disabled until a consent-aware adapter is configured. */}};
