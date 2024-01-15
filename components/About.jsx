import { fadeIn } from '../variants'
import { MotionDiv } from './MotionElm'
import ProjectCounter from './ProjectCounter'

const About = () => {
  return (
    <section className="h-screen min-h-screen ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:gap-x-6 lg:flex-row lg:items-center lg:gap-y-0 h-screen px-3">
          {/*text */}
          <MotionDiv
            variants={fadeIn('left', 0.01)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent font-bold">About Me</h2>

            <p className={`text-gray-300 transition-all mb-6 `}>
              After earning my BSc, I delved into the world of design, igniting
              a journey where technology meets creativity. This intersection has
              become the canvas for my{' '}
              <span className="text-purple-600">UI/UX aspirations,</span>{' '}
              crafting user-centric experiences that bridge innovation and
              functionality.
              <br />
              <br />
              Creative UI/UX designer proficient in crafting outstanding designs
              using{' '}
              <span className="text-purple-600">
                {' '}
                Figma, Photoshop, and Illustrator.
              </span>{' '}
              Dedicated to delivering visually impactful and user-centric
              solutions that elevate the digital landscape, blending innovation
              with a keen eye for design excellence.
              <br />
              <br />
              The primary aspirations of a UI/UX designer include creating
              seamless and enjoyable{' '}
              <span className="text-purple-600">user experiences</span> staying
              at the forefront of design trends, fostering innovation, and
              contributing to projects that make a positive impact on users'
              lives
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-12 mb-12">
              <div className="bg-white p-4 rounded-tl-3xl rounded-br-3xl rounded projectCount">
                {/* counter */}
                <ProjectCounter />
                <div
                  className={`text-white font-primary text-sm tracking-[2px]`}
                >
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center ">
              <div className="btn btn-lg flex items-center">
                <a
                  href="#work"
                  className="hover:scale-[1.01]  active:scale-[0.99] transition-all   "
                >
                  view projects
                </a>
              </div>
            </div> */}
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
export default About
