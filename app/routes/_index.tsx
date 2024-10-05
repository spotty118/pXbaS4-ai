import {
  EditOutlined,
  RocketOutlined,
  CodeOutlined,
  CloudOutlined,
  ThunderboltOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Code Generation`,
      description: `Transform your ideas into functional code with our advanced AI, no coding experience required.`,
      icon: <CodeOutlined />,
    },
    {
      heading: `Rapid Prototyping`,
      description: `Bring your app concepts to life in hours, not months. Iterate and refine with unprecedented speed.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `Secure Containerization`,
      description: `Deploy your applications in secure, scalable Docker containers for optimal performance and peace of mind.`,
      icon: <CloudOutlined />,
    },
    {
      heading: `Intuitive Interface`,
      description: `Our user-friendly platform makes app creation accessible to everyone, from novices to seasoned developers.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Scalable Solutions`,
      description: `Build applications that grow with your business, from MVP to enterprise-level solutions.`,
      icon: <ThunderboltOutlined />,
    },
    {
      heading: `Collaborative Environment`,
      description: `Foster teamwork and innovation with our built-in collaboration tools and version control.`,
      icon: <TeamOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Startup Founder`,
      content: `This platform turned our startup idea into a working MVP in just two weeks. We secured funding shortly after. It's a game-changer for non-technical founders like me.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Product Manager`,
      content: `As a PM, I've always had ideas for tools to improve our workflow. Now, I can create them myself without burdening our dev team. It's empowering and efficient.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `UX Designer`,
      content: `The speed at which I can now prototype and test new UI concepts is incredible. It's revolutionized our design process and client presentations.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Okafor`,
      designation: `Small Business Owner`,
      content: `I never thought I'd be able to create a custom app for my business. This platform made it possible, and now we're more competitive than ever.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Zhang`,
      designation: `Software Engineer`,
      content: `Even as an experienced developer, I find this tool invaluable for rapid prototyping. It's cut our development time in half and improved our ideation process.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Alex Novak`,
      designation: `EdTech Entrepreneur`,
      content: `We've created three educational apps in the time it would have taken to build one traditionally. The impact on our business and our students has been phenomenal.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for individuals and small projects`,
      monthly: 49,
      yearly: 490,
      features: [`Up to 3 apps`, `Basic AI assistance`, `Community support`],
    },
    {
      title: `Pro`,
      description: `Ideal for growing businesses and teams`,
      monthly: 99,
      yearly: 990,
      features: [
        `Unlimited apps`,
        `Advanced AI features`,
        `Priority support`,
        `Team collaboration`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large organizations`,
      monthly: 299,
      yearly: 2990,
      features: [
        `Custom integrations`,
        `Dedicated account manager`,
        `24/7 premium support`,
        `Advanced security features`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `Do I need coding experience to use this platform?`,
      answer: `Not at all! Our AI-powered platform is designed to be user-friendly for individuals with no coding experience. Simply describe your app idea, and our system will generate the code for you.`,
    },
    {
      question: `How secure are the applications created on your platform?`,
      answer: `Security is our top priority. All applications are deployed in secure Docker containers, ensuring isolation and protection. We also implement industry-standard security practices throughout our development process.`,
    },
    {
      question: `Can I customize the AI-generated code?`,
      answer: `Absolutely! While our AI generates the initial code, you have full access to modify and customize it according to your specific needs. Our platform supports both AI-assisted and manual coding.`,
    },
    {
      question: `What kind of support do you offer?`,
      answer: `We offer various levels of support depending on your plan. This ranges from community support for our Starter plan to 24/7 premium support with a dedicated account manager for our Enterprise customers.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Describe Your Vision`,
      description: `Simply tell our AI what kind of app you want to create. No technical jargon needed - just explain your idea in plain language.`,
    },
    {
      heading: `AI Generates Code`,
      description: `Our advanced AI processes your description and generates functional, clean code tailored to your specific requirements.`,
    },
    {
      heading: `Customize and Refine`,
      description: `Review the generated app, make adjustments, and fine-tune features using our intuitive interface or by editing the code directly.`,
    },
    {
      heading: `Deploy and Scale`,
      description: `With a click, deploy your app in secure Docker containers. Easily scale as your user base grows, without worrying about infrastructure.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💸`,
      title: `High development costs pricing out great ideas`,
    },
    {
      emoji: `⏳`,
      title: `Months of waiting to see your vision come to life`,
    },
    {
      emoji: `🤯`,
      title: `Complexity of coding leaving you frustrated and stuck`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Turn Your App Ideas into Reality, No Coding Required`}
        subtitle={`Harness the power of AI to create, deploy, and scale your dream applications in record time. From concept to launch, we've got you covered.`}
        buttonText={`Start Building Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/pXbaS4-ai-T9hA`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`innovators already building their dreams`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The App Development Struggle is Real: 85% of Great Ideas Never See the Light of Day`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`From Imagination to Implementation in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Vision with Cutting-Edge Technology`}
        subtitle={`Our AI-driven platform provides all the tools you need to bring your app ideas to life, faster and easier than ever before.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How Our Platform is Changing the Game`}
        subtitle={`Hear from innovators who've transformed their ideas into thriving applications.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Affordable Plans for Every Innovator`}
        subtitle={`Choose the perfect package to fuel your app development journey, from solo creators to enterprise teams.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Everything you need to know about turning your app ideas into reality.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your App Development?`}
        subtitle={`Join thousands of innovators who are already building the future. Start creating your dream app today!`}
        buttonText={`Begin Your Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
