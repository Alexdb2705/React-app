function Popup({ question, popupOpen, setPopupOpen }) {
    return (
        <>
            <div className="popup">
                <span>{question}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => setPopupOpen(!popupOpen)}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel">Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    )
}

export default Popup