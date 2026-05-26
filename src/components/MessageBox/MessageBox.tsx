import { MdCancel } from 'react-icons/md';
import './message-box-styles.css';

interface MessageBoxProps {
  message: string
  success: boolean
  onDismiss: () => void
}

const MessageBox = ({ message, success, onDismiss }: MessageBoxProps) => {
  return (
    message ? (
      <div className={success ? 'success-box' : 'error-box'}>
        <p>{message}</p>
        <button className='dismiss-button' onClick={onDismiss}>
          <MdCancel style={{ background: 'none' }}/>
        </button>
      </div>
    ) : null
  );
};

export default MessageBox;
