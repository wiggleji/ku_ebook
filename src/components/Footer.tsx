import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">김지형</h3>
            <p className="text-gray-400">
              웹 개발과 교육을 사랑하는 교사입니다.
              최신 기술을 활용한 교육 콘텐츠를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: example@email.com</li>
              <li>전화: 010-1234-5678</li>
              <li>위치: 서울특별시</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 김지형. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
