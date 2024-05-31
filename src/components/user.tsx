import { useSearchParams } from "next/navigation";

export const User: React.FC = () => {
    const idParams = useSearchParams();

    const id = idParams?.get('userid')

    return id
}