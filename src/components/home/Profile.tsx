'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const Profile = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div
        className="text-center space-y-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <motion.h1
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-primary px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          김지원
        </motion.h1>

        <motion.h2
          className="text-xl md:text-4xl text-gray-700 dark:text-gray-300 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          Frontend Developer
        </motion.h2>

        <motion.p
          className="md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          저는 초기 스타트업에서 개발의 설계부터 운영까지
          <br />
          모두 경험한 4년차 프론트엔드 개발자입니다. <br />
          문제를 해결하는 걸 좋아하고, 팀과 함께 목표를 이루는 데 큰 보람을
          느낍니다.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-col sm:flex-row px-4 md:px-0">
          <li className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors text-sm">
            <Link
              href="https://github.com/iamkjw77"
              target="_blank"
              rel="noopener noreferrer"
              className="block">
              GitHub
            </Link>
          </li>
          <li className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm">
            <Link
              href="https://medium.com/@iamkjw"
              target="_blank"
              rel="noopener noreferrer"
              className="block">
              Blog
            </Link>
          </li>
        </motion.ul>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}>
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Profile;
