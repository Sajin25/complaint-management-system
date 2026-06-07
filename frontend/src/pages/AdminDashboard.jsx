import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [remarks, setRemarks] = useState({});

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/complaints?t=${new Date().getTime()}`);
      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:8080/api/complaints/${id}/status`, { status });
      await fetchComplaints();
      alert("Status updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update status. Check console.");
    }
  };

  const handleRemarkSubmit = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/complaints/${id}/status`, { remarks: remarks[id] });
      fetchComplaints();
      alert("Remark updated!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="card">
        <h3>All Complaints</h3>
        {complaints.length === 0 ? <p>No complaints found.</p> : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Update Status</th>
                <th>Admin Remarks</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(c => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.category}</td>
                  <td><span className={`badge ${c.status.toLowerCase()}`}>{c.status}</span></td>
                  <td>
                    <select 
                      value={c.status} 
                      onChange={(e) => handleStatusChange(c.id, e.target.value)}
                      className="form-control"
                      style={{ width: 'auto', display: 'inline-block' }}
                    >
                      <option value="PENDING">Pending</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="RESOLVED">Resolved</option>
                    </select>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <input 
                        type="text" 
                        defaultValue={c.remarks || ''}
                        onChange={(e) => setRemarks({...remarks, [c.id]: e.target.value})}
                        className="form-control"
                        placeholder="Add remark..."
                      />
                      <button onClick={() => handleRemarkSubmit(c.id)} className="btn btn-secondary">Save</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
