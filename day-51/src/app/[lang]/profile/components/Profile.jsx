import {
    SignInGoogleBtn,
    SignInGithubBtn,
} from "../../../../components/SignInBtn";
import LogoutBtn from "./LogoutBtn";
import "./button.css";

export default function Profile({ dataLang, session }) {
    const isLoggedInWithGoogle = session?.provider === "google";
    const isLoggedInWithGithub = session?.provider === "github";
    console.log(session);

    return (
        <div className="flex flex-col items-center mx-auto max-w-[calc(100%-300px)] mt-10 p-5 border border-green-500 rounded-xl">
            <div className="container mx-auto min-w-full">
                <div className="flex">
                    <div className=" w-12 h-12 rounded-full overflow-hidden ">
                        <img src={session?.picture} />
                    </div>
                    <div className="ml-3">
                        <h2>{session?.name}</h2>
                        <span>{session?.email}</span>
                    </div>
                </div>
                <div className="flex justify-between mt-10 ">
                    <div className="flex gap-3 ">
                        <div className="min-h-[50px]">
                            {isLoggedInWithGithub && (
                                <button className="bg-green-500 rounded-lg px-4 py-2 font-bold button-profile">
                                    <i class="bx bx-check"></i> Đăng nhập GitHub
                                    thành công
                                </button>
                            )}
                            {!isLoggedInWithGithub && <SignInGithubBtn />}
                        </div>
                        <div className="min-h-[50px]">
                            {isLoggedInWithGoogle && (
                                <button className="bg-green-500 rounded-lg px-4 py-2 font-bold button-profile">
                                    <i class="bx bx-check"></i> Đăng nhập Google
                                    thành công
                                </button>
                            )}
                            {!isLoggedInWithGoogle && <SignInGoogleBtn />}
                        </div>
                    </div>
                    <div>
                        <LogoutBtn dataLang={dataLang} />
                    </div>
                </div>
            </div>
        </div>
    );
}
