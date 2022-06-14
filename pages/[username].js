import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/organism/layout';
import axios from 'axios';
import Link from 'next/dist/client/link';
import styles from '../styles/username.module.css';
import PortofolioNavbar from '../components/molecule/portofolio-navbar';
import Jumbotron from '../components/molecule/jumbotron';
import About from '../components/molecule/about';
import Skill from '../components/organism/skill';
import Contact from '../components/molecule/contact';
import Portofolio from '../components/organism/portofolio';

export async function getServerSideProps({ params }) {
  //   const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${params.id}`);
  //   const res = await req.data.data;
  return {
    props: {
      username: params.username
    }
  };
}

function MyPortofolio(props) {
  const { username } = props;

  //   const updateSkill = async (e) => {
  //     e.preventDefault();

  //     const formData = new FormData();
  //     formData.append('skill_name', skillName);
  //     formData.append('_method', 'PUT');

  //     await axios
  //       .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${skill.id}`, formData)
  //       .then(() => {
  //         Router.push('/admin/master/skills');
  //       })
  //       .catch((error) => {
  //         setValidation(error.response.data);
  //       });
  //   };

  return (
    <>
      <header>
        <PortofolioNavbar bgColor={'#5f5f5f'} textColor="white" />
      </header>
      <main className={styles.body}>
        <Jumbotron
          bgColor={'rgba(200, 200, 255, 0.3)'}
          textColor="black"
          fullName={'Achmad Zacky Rachmatullah'}
          headline={'10 Years+ Experienced Full Stack Developer'}
        />
        <About>
          Hallo I'm Zacky, I love to code. <br />
          I have more than 10 years of experience in web programming and 3 years in mobile
          programming. <br />
          Now I work in an airline in Indonesia as a Full Stack Developer. <br /> I can build
          website, desktop application and mobile application. <br /> I am open to freelance offers.
        </About>
        <Portofolio />
        <Skill />
        <Contact />
      </main>
      <footer className="pb-5 text-center" style={{ backgroundColor: '#5f5f5f', color: 'white' }}>
        Portofolic - Made By IT Worker For IT Worker &middot; &copy; 2022
      </footer>
    </>
  );
}

export default MyPortofolio;
