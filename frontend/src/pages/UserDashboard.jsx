import { useState, useEffect } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Hardware');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/complaints/user/${user.id}?t=${new Date().getTime()}`);
      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/complaints', {
        title, description, category, createdBy: user.id
      });
      setTitle('');
      setDescription('');
      fetchComplaints();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <div className="card">
        <h3>Submit a New Complaint</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control">
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Network">Network</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Complaint</button>
        </form>
      </div>

      <div className="card">
        <h3>My Complaints</h3>
        {complaints.length === 0 ? <p>No complaints submitted yet.</p> : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Admin Remarks</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(c => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.category}</td>
                  <td><span className={`badge ${c.status.toLowerCase()}`}>{c.status}</span></td>
                  <td>{c.remarks || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
