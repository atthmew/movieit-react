import { FaRegTimesCircle } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
	const modalStyle = {
		display: isOpen ? 'block' : 'none',
	};

	const overlayHandler = () => {
		onClose();
	};
	return (
		<>
			{isOpen && (
				<div className={'modal'}>
					<div className={'modalContainer'} style={modalStyle}>
						{children}
						<FaRegTimesCircle className={'exitBtnModal'} onClick={onClose} />
					</div>
				</div>
			)}

			{isOpen && <div className={'overlayModal'} onClick={overlayHandler}></div>}
		</>
	);
};

export default Modal;
