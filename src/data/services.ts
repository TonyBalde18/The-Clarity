// ---------------------------------------------------------------------------
// Services — single source of truth for the homepage cards, the navigation
// and the four /services/<slug>/ pages (rendered by src/pages/services/[slug].astro
// through src/layouts/ServiceLayout.astro).
//
// TODO: client copy — everything below `cardSummary` is placeholder copy
// written in the brand voice. Replace with final copy before launch.
// ---------------------------------------------------------------------------

import type { ImageMetadata } from 'astro';
import strategyImage from '../assets/images/service-strategy-notebook.jpg';
import systemsImage from '../assets/images/service-systems-facade.jpg';
import brandImage from '../assets/images/service-brand-swatches.jpg';
import growthImage from '../assets/images/service-growth-stairs.jpg';

export interface Service {
  slug: string;
  /** Short label used in the navigation. */
  navLabel: string;
  /** Full name used on cards, as the page <h1> and in the <title>. */
  title: string;
  /** One line shown on the homepage card. */
  cardSummary: string;
  metaDescription: string;
  /** One-line intro under the page <h1>. */
  intro: string;
  image: ImageMetadata;
  imageAlt: string;
  whoFor: string[];
  problems: { title: string; body: string }[];
  included: { title: string; body: string }[];
  outcomes: string[];
}

export const services: Service[] = [
  {
    slug: 'strategy',
    navLabel: 'Strategy',
    title: 'Business Strategy Consulting',
    cardSummary: 'Clear direction for confident decision-making.',
    metaDescription:
      'Business strategy consulting for service-based founders. Get clear on direction, priorities and the decisions that actually move your business forward.',
    intro: 'Clear direction, fewer priorities and decisions you can stand behind.',
    image: strategyImage,
    imageAlt: 'An open notebook and fountain pen resting on a pale wooden desk in soft daylight',
    whoFor: [
      'Founders with more good ideas than time to act on them.',
      'Businesses that have grown past the plan they started with.',
      'Owners who feel busy every week but unsure what is actually working.',
    ],
    problems: [
      {
        title: 'Too many directions',
        body: 'Every opportunity looks worth pursuing, so energy gets spread thin and nothing gets finished properly.',
      },
      {
        title: 'Decisions on instinct alone',
        body: 'Big calls get made on gut feel and pressure, then revisited, then made again.',
      },
      {
        title: 'No shared picture',
        body: 'The plan lives in your head. Your team, and sometimes you, cannot see how today connects to next year.',
      },
    ],
    included: [
      {
        title: 'An honest review',
        body: 'We look at where revenue, time and attention really go, and what is quietly holding the business back.',
      },
      {
        title: 'Focus and priorities',
        body: 'We narrow the list to the few things that matter most over the next twelve months, and agree what to stop.',
      },
      {
        title: 'A plan you can use',
        body: 'A short, clear strategy document with quarterly priorities, owners and measures, not a report that sits in a drawer.',
      },
      {
        title: 'Regular check-ins',
        body: 'We review progress together and adjust as the business changes, so the plan stays useful.',
      },
    ],
    outcomes: [
      'A clear sense of where the business is going and why.',
      'Fewer, better decisions made with more confidence.',
      'Time and money pointed at what actually moves things forward.',
    ],
  },
  {
    slug: 'systems',
    navLabel: 'Systems',
    title: 'Business Systems & Process Consulting',
    cardSummary: 'Practical systems that make the business easier to run.',
    metaDescription:
      'Business systems and process consulting for service-based founders. Build practical structure so the business runs smoothly without depending on you for everything.',
    intro: 'Practical structure, so the business runs well without running through you.',
    image: systemsImage,
    imageAlt: 'A grid of glass windows on a modern facade, reflecting the building opposite in warm light',
    whoFor: [
      'Founders who are the bottleneck for most decisions.',
      'Small teams where knowledge lives in people’s heads, not in a process.',
      'Businesses where growth means more hours, not more capacity.',
    ],
    problems: [
      {
        title: 'Everything goes through you',
        body: 'Questions, approvals and fixes all land on your desk, so the business moves only as fast as you do.',
      },
      {
        title: 'Held together by memory',
        body: 'Things work because the right person remembers. When they are away, busy or gone, it shows.',
      },
      {
        title: 'Tools that do not talk',
        body: 'Software was added one problem at a time. Now there are too many tools and not enough system.',
      },
    ],
    included: [
      {
        title: 'Map how work really flows',
        body: 'From first enquiry to final invoice, we trace what happens, who does it and where it gets stuck.',
      },
      {
        title: 'Simplify before you automate',
        body: 'We remove steps that do not need to exist before adding any new tools.',
      },
      {
        title: 'Document the essentials',
        body: 'Clear, lightweight processes your team can follow, find and improve without asking you.',
      },
      {
        title: 'Set up and hand over',
        body: 'We help put the right tools and routines in place, then make sure your team owns them.',
      },
    ],
    outcomes: [
      'A business that keeps running when you step back.',
      'Less time spent answering the same questions.',
      'Room to take on more work without the wheels coming off.',
    ],
  },
  {
    slug: 'brand',
    navLabel: 'Brand',
    title: 'Brand Strategy & Positioning',
    cardSummary: 'Strong positioning, communication and visual identity.',
    metaDescription:
      'Brand strategy and positioning for service-based founders. Get clear on who you serve, what makes you different and how to say it with confidence.',
    intro: 'Know exactly who you are for, and say it so the right clients hear it.',
    image: brandImage,
    imageAlt: 'Curved fabric swatches in soft neutral and warm tones arranged in a flowing row',
    whoFor: [
      'Founders whose work has outgrown how the business looks and sounds.',
      'Businesses that win on referrals but struggle to explain what they do.',
      'Owners competing on price when they should be competing on value.',
    ],
    problems: [
      {
        title: 'Hard to explain',
        body: 'You know the work is good, but describing it clearly and briefly feels harder than it should.',
      },
      {
        title: 'Looks like everyone else',
        body: 'Your website and messaging could belong to any business in your sector.',
      },
      {
        title: 'The wrong enquiries',
        body: 'Too many conversations with people who are not a good fit, and not enough with those who are.',
      },
    ],
    included: [
      {
        title: 'Positioning',
        body: 'We define who you serve best, the problem you solve and why you are the right choice.',
      },
      {
        title: 'Messaging',
        body: 'A clear core message, service descriptions and the language your clients actually use.',
      },
      {
        title: 'Identity direction',
        body: 'Guidance on how the brand should look and feel, so design decisions stop being guesswork.',
      },
      {
        title: 'Putting it to work',
        body: 'We apply it where it counts first: your website, proposals and the conversations that win work.',
      },
    ],
    outcomes: [
      'A brand that reflects the quality of your work.',
      'Clear language you and your team can use with confidence.',
      'Better-fit enquiries and less time spent justifying your fees.',
    ],
  },
  {
    slug: 'growth',
    navLabel: 'Growth',
    title: 'Business Growth Consulting',
    cardSummary: 'Sustainable growth that increases profit and freedom.',
    metaDescription:
      'Business growth consulting for service-based founders. Grow revenue and profit sustainably, without adding more complexity or more hours.',
    intro: 'Growth that adds profit and freedom, not more hours and more complexity.',
    image: growthImage,
    imageAlt: 'A concrete staircase rising out of shadow towards a bright opening',
    whoFor: [
      'Founders ready to grow but wary of what growth has cost them before.',
      'Businesses with steady revenue that has stopped climbing.',
      'Owners who want the business to give them more time, not take it.',
    ],
    problems: [
      {
        title: 'Growth that costs too much',
        body: 'Each new client brings more work, more stress and barely more profit.',
      },
      {
        title: 'A plateau',
        body: 'Revenue has held steady for a while and it is not clear which lever to pull next.',
      },
      {
        title: 'Unpredictable income',
        body: 'Feast and famine months make it hard to plan, hire or invest with confidence.',
      },
    ],
    included: [
      {
        title: 'Find the real levers',
        body: 'We look at pricing, offers, client mix and capacity to see where growth will come from most easily.',
      },
      {
        title: 'Shape the offer',
        body: 'We refine what you sell and how it is packaged, so it is easier to buy and more profitable to deliver.',
      },
      {
        title: 'Build a steady pipeline',
        body: 'A simple, repeatable way to attract and convert the right clients, month after month.',
      },
      {
        title: 'Grow with structure',
        body: 'We plan hires, roles and systems ahead of growth, so it does not outrun the business.',
      },
    ],
    outcomes: [
      'Higher profit, not just higher revenue.',
      'More predictable income you can plan around.',
      'Growth that gives you more freedom, not less.',
    ],
  },
];
