'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Link from "next/link";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mb-20`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>ช่องทางติดต่อ</h3>

        <div className="grid grid-cols-2 gap-7 pt-3">
          <Link href="mailto:praphusak.biw@gmail.com">
            <div className="flex justify-center">
              <Image src="/email.png" alt="email icon" width={500} height={500} className="h-auto max-w-full rounded-lg" />
            </div>
          </Link> 
          <Link href="https://line.me/ti/p/tvETfiqdmq">
          <div className="flex justify-center">
            <Image src="/line.png" alt="line icon" width={500} height={500} className="h-auto max-w-full rounded-lg" />
          </div>
          </Link>
          <Link href="https://www.messenger.com/t/100007677406784">
          <div className="flex justify-center">
            <Image src="/messenger.png" alt="messenger icon" width={500} height={500} className="h-auto max-w-full rounded-lg" />
          </div>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100007677406784">
          <div className="flex justify-center">
            <Image src="/facebook.png" alt="facebook icon" width={500} height={500} className="h-auto max-w-full rounded-lg" />
          </div>
          </Link>
        </div>




      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");