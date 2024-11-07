export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    );
}
