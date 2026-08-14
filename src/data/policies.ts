/**
 * Website policy facts for launch-safety pages.
 * Leave unknown fields empty or null. Do not invent legal values.
 * Last-updated is a human-set string, not a build timestamp.
 */

export const policyLastUpdated = 'August 14, 2026';

export const sitePayments = {
  publicCheckoutActive: false,
};

export const siteTracking = {
  firstPartyAnalytics: false,
  firstPartyTrackingCookies: false,
};

/**
 * Concrete cancellation and refund wording.
 * Null means not approved yet. Policy pages must not invent substitutes.
 */
export const refundPolicy = {
  privateSessionCancelNotice: null as string | null,
  privateSessionRefundWindow: null as string | null,
  mentorshipPackageTerms: null as string | null,
  courseCancelWindow: null as string | null,
  courseRefundWindow: null as string | null,
  eventOrRetreatTerms: null as string | null,
  processorFeeHandling: null as string | null,
};

export function hasPolicyText(value: string | null | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}
