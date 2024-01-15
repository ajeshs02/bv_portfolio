import { fadeIn } from '../variants'
import HeroText from './HeroText'
import { MotionDiv, MotionH1, MotionP } from './MotionElm'

const Hero = () => {
  return (
    <section className="h-[91vh] flex items-center snap-start" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* ṭext */}
          <div className="flex-1  text-center font-secondary lg:text-left">
            <MotionH1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className={`text-white  text-[55px] mb-1 font-bold leading-[1.2] lg:text-[110px]`}
            >
              BHAVYA B.
            </MotionH1>

            {/* Text Animation */}
            <HeroText />

            {/* about */}
            <MotionP
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className={`mb-8 max-w-lg mx-auto lg:mx-0 font-medium tracking-widest text-gray-500 italic `}
            >
              Innovative UI/UX Designer Elevating User Engagement Through Design
              Excellence
            </MotionP>
            {/* explore */}
            <MotionDiv
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 text-purple-600/70"
            >
              <a
                href="#about"
                className=" relative  transition-all flex items-center justify-center gap-x-2 tracking-widest "
              >
                Explore More <div className="down-arrow" />
              </a>
            </MotionDiv>
          </div>
          {/* image */}
          {/* <MotionDiv
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            <img src={Image} alt="profile" />
          </MotionDiv> */}
        </div>
        <div id="about" />
      </div>
    </section>
  )
}
export default Hero
