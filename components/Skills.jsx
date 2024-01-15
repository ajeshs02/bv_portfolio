import { fadeIn } from '../variants'
import { Skill_set } from '../constants'
import SkillDataProvider from './SkillDataProvider'
import { MotionDiv } from './MotionElm'

const Skills = () => {
  return (
    <section
      className="section mx-auto min-h-fit h-fit max-h-fit  py-3  !max-md:mt-64   "
      id="skills"
    >
      <div className="container mx-auto ">
        <div className="w-full flex  gap-y-10 justify-center lg:items-center lg:gap-y-0 h-screen px-3">
          {/* icons */}
          <MotionDiv
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full   flex flex-col justify-center items-center  "
          >
            <h2 className="h2  text-accent text-4xl ml-2 mb-20 font-bold ">
              SKILLS
            </h2>
            <div className="flex-1  flex flex-row  flex-wrap gap-x-5 gap-y-3 items-center justify-center lg:max-w-[50%] lg:gap-y-5 max-lg:max-h-[50%] ">
              {Skill_set.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                  name={image.skill_name}
                  style={image.style}
                />
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
export default Skills
