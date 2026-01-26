import Loader from "@/components/Loader";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
            <Loader />
        </div>
    );
}
