
interface ImagePopupProps {
	apiUrl:string,
    imageId:string,
}
export function ImagePopup({apiUrl, imageId} : ImagePopupProps) {
    return (
        <>
        <div className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">프로필카드</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="rounded mx-auto d-block"
                            src={`${apiUrl}/images/${imageId}`}
                            style={{
                                height: "35%",
                                width: "80%"
                            }}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        <a 
                        type="button" 
                        className="btn btn-primary"
                        href={imageId?`${apiUrl}/images/${imageId}/download`: "#"}
                        target="_blank"
                        >
                            다운로드
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}