export const events = [
    {
      id: 1,
      title: 'YOUTHS CONVERSATION',
      text: `Life Care Fellowship International Church - Juja Amani invites you to a special youth event on 30th November 2025 from 2:00 PM to 6:00 PM. This afternoon will be full of inspiration, discussion, and growth, exploring topics such as:
      • Relationships
      • Drugs
      • Social Media
      • Spiritual Growth
      • Mental Health
      • Unlocking Your Potential

      There will also be refreshments as we connect, share, and empower one another. Don't miss out! Feel free to bring your friends along. For more info, contact us at 07 13 445 055.

      Additionally, The University of Marriage, a non-profit marriage school part of LIFE CARE FELLOWSHIP INTERNATIONAL, offers programs such as The Third Option to strengthen marriages and families, focusing on practical skills and inner growth. Volunteers follow a ministry philosophy based on Ephesians 4:12, being spiritually gifted, humble, and dedicated to personal development. Programs run in four seasons/semesters: Spring, Summer, Autumn, Winter.`,
      start: '30 November, 2025',
      end: '30 November, 2025',
      frequency: 'Edition 1',
      time: '14:00 - 18:00'
  },
  {
    id: 2,
    images: ['/assets/images/love-letters.jpg'],
    title: 'LOVE LETTERS',
    text: 'Love letters is a part of the University of Marriage, providing prompt solutions for marital challenges. This program runs from August to December.',
    start: 'August',
    end: 'September',
    frequency: 'Weekly - Thursday',
    time: '8pm to 10pm',
  },
  {
    id: 3,
    images: ['/assets/images/assiduous woman/AWD.jpg'],
    title: 'YOUTHS FELLOWSHIP',
    text: "Love letters is a part of the University of Marriage, providing prompt solutions for marital challenges. This program runs from August to December.",
     
    start: 'Augast 2025',
    end: 'Never',
    frequency: 'Weekly - Thursday',
    time: '6pm to 8pm',
  },
  {
    id: 3,
    images: ['/assets/images/post.jpg'],
    galleryImages: [
      '/assets/images/assiduous woman/IMG_20240426_193045.jpg',
      '/assets/images/assiduous woman/IMG_20240426_192508.jpg',
      '/assets/images/assiduous woman/IMG_20240426_193254.jpg',
    ],
    title: 'THE ASSIDUOUS WOMAN INTERNATIONAL CONFERENCE',
    text: "The Assiduous Woman (TAW) Int is a divine vision that highlights women's role as helpers and contributors in society as intended by God. We aim to empower women and make history together.",
    start: 'February',
    end: 'June',
    frequency: 'Weekly - Thursday',
    time: '8pm to 10pm',
  },
  {
    id: 4,
    images: ['/assets/images/street-worship.jpg'],
    title: 'STREET WORSHIP, EVANGELISM, AND WORSHIP NIGHT',
    text: "Jesus didn't confine his presence to the synagogue; his kindness extended everywhere. Street worship serves as a platform where we can honor him openly and spread his message far and wide.",
    start: null,
    end: null,
    frequency: 'Last Saturday of the month',
    time: '3pm',
  },
  {
    id: 5,
    images: ['/assets/images/worshippers-blueprint.jpg'],
    title: "THE WORSHIPPER'S BLUEPRINT",
    text: 'Leading worship and musicianship in the gospel music world and church settings can be challenging, but it’s a skill that can be taught and learned at . The Worshipper Blueprint program is designed not only to develop excellence in voice and musicianship but also to instill ministerial ethics, character, and integrity',
    start: null,
    end: null,
    frequency: 'Done Annually',
    time: null,
  },
];

export const services = [
  {
    image: '/assets/images/church/teaching.jpg',
    title: 'Discipleship and Training Sessions',
    text: "Grow in faith through our discipleship programs and Bible-based training sessions. We equip believers with the Word of God and practical wisdom for daily living, ministry, and leadership.",
  },
  {
    image: '/assets/images/church/outreach.jpg',
    title: 'Evangelism and Outreach',
    text: "We are committed to reaching our community with the Gospel of Christ. Join us for street evangelism, community service, and mission outreach as we share the love of Jesus in action.",
  },
  {
    image: '/assets/images/church/worship.jpg',
    title: 'Worship and Prayer Experience',
    text: "Experience the presence of God in powerful worship and prayer gatherings. Our services are filled with heartfelt praise, intercession, and the move of the Holy Spirit.",
  },
  {
    image: '/assets/images/church/events.jpg',
    title: 'Special Events and Fellowships',
    text: "Be part of our vibrant church family through youth events, family fellowships, conferences, and special worship nights designed to build faith and community bonds.",
  },
  {
    image: '/assets/images/church/care.jpg',
    title: 'Counseling and Life Care Support',
    text: "We provide spiritual and emotional support through one-on-one counseling, marriage guidance, and mentorship programs — helping individuals find healing, direction, and purpose in Christ.",
  },
];


export const ministers = [
  {
    image:
      '/media/founder.jpeg',
    title: 'Bishop Charles Kinuthia',
    text: 'Founder',
  },
  {
    image:
      '/media/cofounder.jpeg',
    title: 'Pastor Ann',
    text: 'Co-Founder',
  },
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137641/darko_egffqm.jpg',
    title: 'Mr George ',
    text: 'Treasurer',
  },
  {
    image:
      'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137640/alex_buph2h.jpg',
    title: ' Church Chairman',
    text: 'Administrator',
  },
  {
    image:
      '/media/youths.jpeg',
    title: 'Mr Dauglas Ogero',
    text: ' Youths CHairman 2022 to date',
  },
  {
    image:'/media/media.jpeg',
    title: 'Eng Dominic Vurudi',
    text: 'Media/Organizer',
  },
];

export const heroImages = [
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137644/main-bg_diqvdm.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137711/IMG_20230902_160831_kznlig.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137668/IMG_20231007_164207_shxag5.jpg',
];

export const christmasMomentsImages = [
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137679/christmas-moments_lztzxd.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137650/christmas-moments1_kf4f7y.jpg',
  'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137650/christmas-moments2_fvc2er.jpg',
];

export interface Event {
  id: number;
  images: string[];
  galleryImages?: string[]; // Optional field, only present in some events
  title: string;
  text: string;
  start: string | null;
  end: string | null;
  frequency: string;
  time: string | null;
}

export interface Service {
  image?: string;
  title: string;
  text: string;
}

export interface Testimonial {
  title: string;
  text: string;
  ministry: string;
  image: string;
}

export const emailUrl: string =
  'https://-mail.up.railway.app/api/email/send';
