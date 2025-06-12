import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">소개</h2>
          <p className="text-gray-600">웹 개발과 교육을 결합한 혁신적인 교사</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              안녕하세요, 저는 웹 개발과 교육에 열정을 가진 김지형입니다. 
              현대적인 웹 기술을 활용하여 학생들에게 더 나은 학습 경험을 제공하는 것을 목표로 하고 있습니다.
            </p>
            <p className="text-lg text-gray-700">
              React, Next.js, TypeScript 등 최신 웹 기술을 활용한 프로젝트를 진행하며,
              이를 교육 현장에 접목하여 학생들의 실무 역량을 키우는데 기여하고 있습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">주요 경력</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                웹 개발 강의 및 멘토링
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                React/Next.js 프로젝트 개발
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                교육용 웹 애플리케이션 개발
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
