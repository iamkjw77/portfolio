'use client';

import { IProject } from '@/types/home';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import MediaSlider from './MediaSlider';
import Link from 'next/link';

interface IMotionProjectProps {
  project: IProject;
}

const MotionProject = ({ project }: IMotionProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.period}
        </p>

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            className="inline-flex items-center text-accent/90 hover:text-accent/100 mb-6">
            <ExternalLink className="w-4 h-4 mr-2" />
            프로젝트 방문하기
          </Link>
        )}

        {project.media && project.media.length > 0 && (
          <MediaSlider media={project.media} projectName={project.name} />
        )}

        <div className="space-y-6">
          {project.members && (
            <div>
              <h3 className="text-xl font-semibold mb-3">👪 Members</h3>
              <ul>
                {project.members?.map((member) => (
                  <li key={member.team} className="flex flex-start">
                    <span className="text-accent mr-2">•</span>
                    {member.team} {member.size}명
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold mb-3">📌 Summary</h3>
            <p className="text-gray-700 dark:text-gray-400 font-semibold mb-4">
              {project.description}
            </p>
            <ul>
              {project.summary.map((item) => (
                <li key={item} className="flex align-start mb-1">
                  <span className="text-accent mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🤔 Background</h3>
            <ul>
              {project.background.map((item) => (
                <li key={item} className="whitespace-pre-wrap mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🔍 Meaning</h3>
            <ul>
              {project.meaning.map(({ title, description }) => (
                <li key={title} className="mb-6">
                  {title && (
                    <h6 className="flex flex-start mb-2 font-semibold">
                      <span className="text-accent mr-2">•</span>
                      {title}
                    </h6>
                  )}
                  <ul>
                    {description.map((item) => (
                      <li key={item} className="whitespace-pre-wrap mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">👩‍🌾 Responsibilities</h3>
            <p className="text-gray-700 dark:text-gray-400 font-semibold mb-3">
              기여도 : {project.contributionPercentage}
            </p>

            <ul>
              {project.technicalContributions.map((item) => (
                <li key={item} className="flex flex-start">
                  <span className="text-accent mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              🔨 Technology Stack(s)
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((stack) => (
                <li
                  key={stack}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-accent dark:text-purple-300 rounded-full">
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MotionProject;
