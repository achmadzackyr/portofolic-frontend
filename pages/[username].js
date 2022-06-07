import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/organism/layout';
import axios from 'axios';
import Link from 'next/dist/client/link';
import styles from '../styles/username.module.css';
import PortofolioNavbar from '../components/molecule/portofolio-navbar';
import Jumbotron from '../components/molecule/jumbotron';
import About from '../components/molecule/about';

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
        <PortofolioNavbar bgColor={'rgba(95, 95, 95, 0.5)'} textColor="white" />
      </header>
      <main className={styles.body}>
        <Jumbotron
          bgColor={'rgba(200, 200, 255, 0.3)'}
          textColor="black"
          fullName={'Achmad Zacky Rachmatullah'}
          headline={'10 Years+ Experienced Full Stack Developer'}
        />
        <About>Namaku asep</About>
      </main>
      <footer className="pt-5 my-5 text-muted border-top">
        Created by the Bootstrap team &middot; &copy; 2022
      </footer>
    </>
  );
}

export default MyPortofolio;
