import { motion } from 'framer-motion'

const projects = [
  {
    title: '교육용 웹 애플리케이션',
    description: 'React와 TypeScript를 활용한 교육용 웹 애플리케이션 개발',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/education_site.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: '온라인 학습 플랫폼',
    description: 'Next.js를 활용한 온라인 학습 플랫폼 구축',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/online_education_platform.png',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: '포트폴리오 웹사이트',
    description: '반응형 디자인의 포트폴리오 웹사이트',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/portfolio_site.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: '스팬딧 B2B SaaS 비관리 솔루션 개발 및 유지보수',
    description: '2023 ~ 2025 기준 MAU 약 1만명 / 일 4~600만 요청을 위한 서버 운영. 핵심 로직 데드락 해결 및 고객문의 90% 이상 감소. 레거시 코드 개선 및 쿼리 최적화 (2.3배 개선). 외부 ERP DB 데이터 연동 시 Redis 분산락 구현 (에러 95% 감소). 더존(아마란스10), CODEF, 파투아 등 외부 연동 및 레거시 코드 레이어드 아키텍처 도입. 고객사 SSO(Okta 등) 포함 인증 + OPEN API 레거시 로직 Spring 어플리케이션 포팅 개발/운영. 운영업무 Jira 보드 도입으로 중앙업무 문서화 및 사내 문의량 제거.',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/spendit.png',
    tags: ['Ruby', 'Ruby on Rails', 'Java', 'SpringBoot', 'PostgreSQL', 'AWS'],
  },
  {
    title: '위쿡 공유주방과 F&B 컨설팅 서비스 서버 개발',
    description: 'MAU 약 3천명 / B2B, B2C 공유주방 & 컨설팅 서비스 개발. 위쿡 모든 서비스 서버 파트 개발. 인증/인가 모듈(Token Auth, OAuth) 및 전체 서비스 사용자 RBAC 기반 기능 개발. 예약 및 포인트 관리 시스템 개발 & 결제 PG(Iamport) 연동 진행. 추상화를 통한 알림 서비스 지원(slack, 카카오톡, SMS 등).',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/wecook.png',
    tags: ['Python', 'Django', 'Django REST framework', 'MySQL', 'Docker', 'AWS'],
  },
  {
    title: '피플펀드 P2P 플랫폼 서비스 개발 및 유지보수',
    description: '법인 기준 60% 누적 취급액 및 월 평균 3천명 이상 신규 고객 증가. P2P 투자 플랫폼 서비스 개발/운영. 신규/컨설팅 모델별 대출 상품 서비스 정의/관리. Python 기반 웹 플랫폼 개발 및 운영, 라우팅, DB/도메인 매핑 테스트, 보안, 웹 서비스 관리/운영 30% 개선. 개인 민감 정보 데이터 암호화 및 하급 접근 제어 개발로 금융감독원 보안 심사 긍정적 평가. 신규 채권 연장 서비스 MVP 개발 및 고도화 진행.',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/peoplefund.png',
    tags: ['Python', 'Django', 'Django REST framework', 'Celery', 'MySQL', 'Docker', 'AWS'],
  },
  {
    title: 'CNN 비속어 탐지기',
    description: '프로젝트 링크: https://wiggleji.github.io/2019/06/10/project_manuscript/. 욕설 및 변형된 욕설을 탐지하는 딥러닝 모델, 하이라이팅 기능 개발. 단어 -> 글자 -> 자유/모음 순으로 학습단위 조정/개선하여 1D-CNN 연산 적용. 텔레그램 봇 웹서비스 및 텔레그램/카카오톡 봇 개발.',
    image: 'https://github.com/wiggleji/ku_ebook/raw/main/public/slang.jpeg',
    tags: ['Python', 'Django', 'Pytorch', 'Tensorflow', 'Flask', 'VueJS'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트</h2>
          <p className="text-gray-600">최근 진행한 주요 프로젝트</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
