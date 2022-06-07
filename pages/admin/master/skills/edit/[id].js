import { useState } from 'react';
import Router from 'next/router';
import Layout from '../../../../../components/organism/layout';
import axios from 'axios';
import Link from 'next/dist/client/link';

export async function getServerSideProps({ params }) {
  const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${params.id}`);
  const res = await req.data.data;
  return {
    props: {
      skill: res
    }
  };
}

function SkillEdit(props) {
  const { skill } = props;
  const [skillName, setSkillName] = useState(skill.skill_name);

  const [validation, setValidation] = useState({});

  const updateSkill = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('skill_name', skillName);
    formData.append('_method', 'PUT');

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${skill.id}`, formData)
      .then(() => {
        Router.push('/admin/master/skills');
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                <form onSubmit={updateSkill}>
                  <div className="form-group mb-3">
                    <label className="form-label fw-bold">Skill Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                      placeholder="Insert Skill Name"
                    />
                  </div>
                  {validation.skill_name && (
                    <div className="alert alert-danger">{validation.skill_name}</div>
                  )}
                  <button className="btn btn-primary border-0 shadow-sm me-2" type="submit">
                    UPDATE
                  </button>
                  <Link href="/admin/master/skills">
                    <button className="btn btn-secondary border-0 shadow-sm">BACK</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SkillEdit;
