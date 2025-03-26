'use client';

import { HOME_CONSTANT } from '@/constants/home';
import {
  skillContainerVariants,
  skillItemVariants,
} from '@/styles/animations/variants';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 xl:px-56">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={skillContainerVariants}
          className="space-y-12">
          <motion.h2
            variants={skillItemVariants}
            className="text-2xl md:text-4xl font-bold text-center mb-16">
            Technical Skills
          </motion.h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {HOME_CONSTANT.SKILLS.map((skillWithCategory) => (
              <motion.li
                key={skillWithCategory.category}
                variants={skillItemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200">
                  {skillWithCategory.category}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {skillWithCategory.skills.map((skill) => {
                    const IconComponent = skill.icon as React.ElementType;
                    return (
                      <motion.li
                        key={skill.name}
                        variants={skillItemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2">
                        <IconComponent
                          className="w-8 h-8 md:w-12 md:h-12 mb-2"
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">
                          {skill.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
