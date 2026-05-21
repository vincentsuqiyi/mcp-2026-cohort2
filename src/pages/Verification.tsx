import { Link } from 'react-router-dom';

const Verification = () => {
  return (
    <div>
      <h1>Verification</h1>
      <p>This is where the user will verify the information extracted from their documents.</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default Verification;