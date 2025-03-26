'use client';

import { HOME_CONSTANT } from '@/constants/home';
import {
  learningContainerVariants,
  learningVariants,
} from '@/styles/animations/variants';
import { motion } from 'framer-motion';
import { Book, Calendar } from 'lucide-react';

const Learning = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 xl:px-56">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={learningContainerVariants}
          className="space-y-8">
          <div className="flex items-center gap-2 mb-12">
            <Book className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold">Learning & Education</h2>
          </div>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={learningContainerVariants}>
            {HOME_CONSTANT.LEARNING.map((study) => (
              <li key={study.title} className="group h-full">
                <a href={study.url} target="_blank" className="block h-full">
                  <motion.div
                    variants={learningVariants}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 
                    shadow-lg transition-all duration-300 ease-in-out
                    group-hover:shadow-2xl
                    group-hover:bg-gray-50 dark:group-hover:bg-gray-700
                    relative h-full">
                    <div
                      className="absolute inset-0 bg-purple-600/0 
                    group-hover:bg-purple-600/5 dark:group-hover:bg-purple-600/10 
                    rounded-lg transition-colors duration-300"
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-xl font-semibold text-gray-900 dark:text-gray-100
                        group-hover:text-purple-600 dark:group-hover:text-purple-400
                        transition-colors duration-300">
                          {study.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{study.period}</span>
                        </div>
                      </div>
                      <span
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 
                      text-purple-600 dark:text-purple-300 rounded-full text-sm 
                      whitespace-nowrap min-w-[70px] text-center
                      group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60
                      transition-colors duration-300">
                        {study.type}
                      </span>
                    </div>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400
                    group-hover:text-gray-800 dark:group-hover:text-gray-200
                    transition-colors duration-300">
                      {study.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {study.operations.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm md:text-base dark:text-gray-300">
                          <span className="text-purple-600 mr-2">•</span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
