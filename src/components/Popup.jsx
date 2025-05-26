function Popup({ question, setPopupOpen, closePopup }) {
    return (
        <>
            <div className="popup">
                <span>{question}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => setPopupOpen(prevPopup => (!prevPopup))}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => closePopup()}>Cancel</button>
                </div>
            </div>
            <div className="backdrop" onClick={() => closePopup()}></div>
        </>
    )
}

export default Popup