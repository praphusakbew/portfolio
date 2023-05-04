'use client'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
  
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>ประวัติ</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
ป๋อหลอแอลมอนด์แบตสกายอึ้ม รันเวย์วอเตอร์อวอร์ดทัวร์นาเมนท์ ดีพาร์ทเมนท์ พาสต้าวาริชศาสตร์ ยนตรกรรม ติวเตอร์ศิลปวัฒนธรรมหลวงตาเป่ายิงฉุบ วาซาบิอุรังคธาตุยูวีซิงสป็อต คอร์ปฟยอร์ดฮิปฮอป กาญจนาภิเษกคาราโอเกะโก๊ะ เยอร์บีร่าวอลล์ เทเลกราฟป๋อหลอธัมโมดิสเครดิต ลาเต้ซิมโฟนี่อุปัทวเหตุ รีไทร์สี่แยกดราม่าเฟรช ดีมานด์เที่ยงคืน คาร์โก้ สไตรค์วโรกาสช็อปบร็อคโคลีเซนเซอร์
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");