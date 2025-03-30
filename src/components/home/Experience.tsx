'use client';

import { HOME_CONSTANT } from '@/constants/home';
import {
  experienceContainerVariants,
  experienceVariants,
} from '@/styles/animations/variants';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Building2, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const Experience = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 xl:px-56">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={experienceContainerVariants}>
          {/* Experience Section */}
          <motion.div variants={experienceVariants} className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Work Experience
              </h2>
            </div>
            <ul className="space-y-6 md:space-y-8">
              {HOME_CONSTANT.EXPERIENCES.map((experience, index) => (
                <motion.li
                  key={index}
                  variants={experienceVariants}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {experience.company}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
                    {experience.period}
                  </p>
                  <p className="text-accent font-medium mt-2 text-sm md:text-base">
                    {experience.role}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {experience.projects.map((project) => (
                      <li
                        key={project}
                        className="flex items-start text-sm md:text-base dark:text-gray-300">
                        <span className="text-accent mr-2">•</span>
                        <p>{project}</p>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Projects Section */}
          <motion.div variants={experienceVariants} className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <BriefcaseBusiness className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Company Projects
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {HOME_CONSTANT.COMPANY_PROJECTS.map((project, index) => (
                <li
                  key={index}
                  className="group flex flex-col h-full dark:text-gray-300">
                  <Link
                    href={`/projects/${project.id}`}
                    className="block h-full">
                    <motion.div
                      variants={experienceVariants}
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 md:p-6 
                     shadow-lg transition-all duration-300 ease-in-out
                     group-hover:shadow-2xl
                     group-hover:bg-gray-100 dark:group-hover:bg-gray-700
                     relative h-full flex flex-col justify-between">
                      <div
                        className="absolute inset-0 bg-accent/0 
                          group-hover:bg-accent/5 dark:group-hover:bg-accent/10 
                          rounded-lg transition-colors duration-300"
                      />
                      <div>
                        <h3
                          className="text-lg md:text-xl font-semibold 
                         group-hover:text-accent dark:group-hover:text-accent
                         transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 mt-1 text-xs md:text-sm">
                          {project.period}
                        </p>
                        <p
                          className="text-gray-600 dark:text-gray-400 mt-2 text-base
                       group-hover:text-gray-800 dark:group-hover:text-gray-200 font-semibold">
                          {project.description}
                        </p>

                        <ul className="mt-4 flex flex-col gap-2">
                          {project.summary.map((item) => (
                            <li
                              key={item}
                              className="flex items-start text-base">
                              <span className="text-accent dark:text-purple mr-2">
                                •
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ul className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((stack) => (
                          <li
                            key={stack}
                            className="px-2 py-1 bg-purple-100 dark:bg-rose-400/30
                           text-accent dark:text-rose-100 rounded-full 
                           text-xs md:text-sm
                           group-hover:bg-purple-200 dark:group-hover:bg-rose-500/30">
                            {stack}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div variants={experienceVariants}>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Personal Projects
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {HOME_CONSTANT.PERSONAL_PROJECTS.map((project, index) => (
                <li
                  key={index}
                  className="group flex flex-col h-full dark:text-gray-300">
                  <Link
                    href={`/projects/${project.id}`}
                    className="block h-full">
                    <motion.div
                      variants={experienceVariants}
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 md:p-6 
                     shadow-lg transition-all duration-300 ease-in-out
                     group-hover:shadow-2xl
                     group-hover:bg-gray-100 dark:group-hover:bg-gray-700
                     relative h-full flex flex-col justify-between">
                      <div
                        className="absolute inset-0 bg-accent/0 
                          group-hover:bg-accent/5 dark:group-hover:bg-accent/10 
                          rounded-lg transition-colors duration-300"
                      />
                      <div>
                        <h3
                          className="text-lg md:text-xl font-semibold 
                         group-hover:text-accent
                         transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 mt-1 text-xs md:text-sm">
                          {project.period} (
                          {project.members?.reduce(
                            (acc, curr) => acc + curr.size,
                            0
                          )}
                          인 프로젝트)
                        </p>
                        <p
                          className="text-gray-600 dark:text-gray-400 mt-2 text-base
                       group-hover:text-gray-800 dark:group-hover:text-gray-200 font-semibold">
                          {project.description}
                        </p>

                        <ul className="mt-4 flex flex-col gap-2">
                          {project.summary.map((item) => (
                            <li
                              key={item}
                              className="flex items-start text-base">
                              <span className="text-accent mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ul className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((stack) => (
                          <li
                            key={stack}
                            className="px-2 py-1 bg-purple-100 dark:bg-rose-400/30
                           text-accent dark:text-rose-100 rounded-full 
                           text-xs md:text-sm
                           group-hover:bg-purple-200 dark:group-hover:bg-rose-500/30">
                            {stack}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
