import { HOME_CONSTANT } from '@/constants/home';
import MotionProject from '../components/MotionProject';

export function generateStaticParams() {
  const { COMPANY_PROJECTS, PERSONAL_PROJECTS } = HOME_CONSTANT;

  return [...COMPANY_PROJECTS, ...PERSONAL_PROJECTS].map((project) => ({
    id: project.id,
  }));
}

interface IProjectDetailProps {
  params: Promise<{ id: string }>;
}

const ProjectDetail = async ({ params }: IProjectDetailProps) => {
  const { id } = await params;
  const { COMPANY_PROJECTS, PERSONAL_PROJECTS } = HOME_CONSTANT;
  const project = [...COMPANY_PROJECTS, ...PERSONAL_PROJECTS].find(
    (project) => project.id === id
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto xl:px-40 py-20">
        <MotionProject project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail;
