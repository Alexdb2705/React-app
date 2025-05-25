function Popup({ question }) {
    function hidingBackupPopup() {
        document.querySelector('.popup').style.display = "none"
        document.querySelector('.backdrop').style.display = "none"
        console.log("Confirmed")
    }
    return (
        <>
            <div className="popup">
                <span>{question}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={hidingBackupPopup}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel">Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    )
}

export default Popup