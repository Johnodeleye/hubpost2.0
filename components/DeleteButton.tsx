import Image from "next/image"
import { files } from "@/app/assets/files"
const DeleteButton = () => {
    return (
        <div>
            <Image 
            src={files.del}
            alt="delete button"
            className=""
            />
        </div>
    )
}

export default DeleteButton