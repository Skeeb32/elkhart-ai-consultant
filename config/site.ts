export const site = {
  name: 'Elkhart AI Consultant',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://elkhart-ai-consultant.shaqib-dev.chatgpt.site',
  description: 'Practical AI consulting, websites, marketing and automation for businesses in Elkhart, Indiana and Michiana.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '',
  communities: ['Elkhart', 'Goshen', 'Mishawaka', 'South Bend', 'Nappanee', 'Bristol', 'Middlebury'],
};
export const navigation = [ ['Services', '/services'], ['How it works', '/#how-it-works'], ['Pricing', '/pricing'], ['Free tools', '/tools'], ['About', '/about'] ];
