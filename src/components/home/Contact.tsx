'use client';

import { HOME_CONSTANT } from '@/constants/home';
import {
  contactContainerVariants,
  contactVariants,
} from '@/styles/animations/variants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={contactContainerVariants}
          className="max-w-3xl mx-auto">
          <motion.div variants={contactVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              언제든 연락 주시면 빠르게 답변 드리도록 하겠습니다.
            </p>
          </motion.div>

          <motion.ul
            variants={contactContainerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_CONSTANT.CONTACT.map((contact) => (
              <motion.li
                key={contact.label}
                variants={contactVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <contact.icon className="w-8 h-8 mb-4 dark:text-accent" />
                  <h3 className="text-lg font-semibold mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {contact.value}
                  </p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={contactVariants}
            className="mt-16 text-center text-gray-600 dark:text-gray-400">
            <p>현재 새로운 기회를 찾고 있습니다.</p>
            <p>
              좋은 사람들과 함께 나아갈 수 있는 새로운 환경을 기대하고 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
