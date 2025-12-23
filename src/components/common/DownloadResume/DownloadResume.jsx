import { FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import './DownloadResume.css';

const DownloadResume = ({ variant = 'primary', text = 'Download Resume' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'AnuragAgrawal_DotNetDeveloper_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className={`download-resume-btn btn-${variant}`}
      onClick={handleDownload}
    >
      <FaDownload />
      <span>{text}</span>
    </button>
  );
};

export default DownloadResume;
