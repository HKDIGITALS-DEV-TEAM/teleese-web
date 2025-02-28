import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

function UploadData() {

    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        const files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className + " flex border"} >
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex w-full items-center gap-3 ml-auto">
                    <span className="text-nowrap">{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} className="w-full" style={{ height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex flex-col items-center justify-center">
                <i className="pi pi-image text-8xl text-gray-200"></i>
                <span className="my-5 h-fit text-xl">
                    Glisser deposer vos fichier ici
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: '', iconOnly: false, className: 'custom-choose-btn' };
    const uploadOptions = { icon: '', iconOnly: false, className: 'custom-upload-btn p-button-success' };
    const cancelOptions = { icon: '', iconOnly: false, className: 'custom-cancel-btn p-button-danger' };

    return (
        <div className="w-full">
            <Toast ref={toast}></Toast>

            <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" customUpload uploadHandler={(e) => console.log(e.files)} multiple maxFileSize={1000000}
                onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                headerTemplate={headerTemplate} emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions}
            />
        </div>
    )
}

export default UploadData;