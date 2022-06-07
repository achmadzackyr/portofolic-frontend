import AdminNavbar from '../molecule/admin-navbar';

export default function Layout({ children }) {
  return (
    <>
      <AdminNavbar />
      <main>{children}</main>
    </>
  );
}
