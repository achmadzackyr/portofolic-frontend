import Layout from '../../../../components/organism/layout';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const req = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills`);
  const res = await req.data.data.data;

  return {
    props: {
      skills: res
    }
  };
}

function SkillIndex(props) {
  const { skills } = props;
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const deleteSkill = async (id) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/skills/${id}`);
    refreshData();
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body">
                <Link href="/admin/master/skills/create">
                  <button className="btn btn-primary border-0 shadow-sm mb-3">ADD</button>
                </Link>
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Skill Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill) => (
                      <tr key={skill.id}>
                        <td>{skill.skill_name}</td>
                        <td className="text-center">
                          <Link href={`/admin/master/skills/edit/${skill.id}`}>
                            <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">
                              EDIT
                            </button>
                          </Link>
                          <button
                            onClick={() => deleteSkill(skill.id)}
                            className="btn btn-sm btn-danger border-0 shadow-sm mb-3"
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SkillIndex;
