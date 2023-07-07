import {toast} from "react-toastify";

export default function ({message, isSuccess}:{message:string|null|undefined ,isSuccess:boolean}){
    return (
        isSuccess? toast.success(message || "Thành công", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }):
            toast.error(message || "Thất bại", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
    )
}